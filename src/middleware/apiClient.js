
const baseUrl = 'http://localhost:3000'

class HttpClient {
  get(url, params = {})  {

    let config = {
      method: 'GET',
      headers: { 'Content-Type':'application/json' }
    }

    return fetch(baseUrl + url)
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


export default store => next => action => {

  console.log('API CALL: ', store, next, action)

  if (!action.payload || !action.payload.url) {
    return next(action)
  }

  httpClient
  .get(action.payload.url)
  .then(
    response => {
      console.log(response)
      return next(action)
    },
    error => {
      console.log(error)
      return next(action)
    }
  )


}
