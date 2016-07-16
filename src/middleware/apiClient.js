import { HTTP_REQUEST  } from '../constants'


const baseUrl = 'http://localhost:9000'

class HttpClient {
  get(url, params = {})  {

    let config = {
      method: 'GET',
      headers: { 'Content-Type':'application/json' }
    }

    return fetch(baseUrl + url, config)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {

      if (!response.ok) {
        return Promise.reject(json)
      }

      return json

    })

  }
}

const httpClient = new HttpClient();
console.log('Http client init')


function actionWith(action, data) {
  const finalAction = Object.assign({}, action, data)
  delete finalAction[HTTP_REQUEST]
  return finalAction
}


export default store => next => action => {

  const request = action[HTTP_REQUEST]

  if (!request) {
    return next(action)
  }

  const { successType, errorType } = request

  httpClient
  .get(request.url)
  .then(
    response => {
      console.log(response)
      return next(actionWith(action, { response, type : successType }))
    },
    error => {
      console.log(error)
      return next(actionWith(action, { error, type : errorType }))
    }
  )


}
