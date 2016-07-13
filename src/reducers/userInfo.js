import { REQUEST_USER_INFO, RECIEVE_USER_INFO, ERROR_USER_INFO } from '../constants'
import HttpClient from '../utils/HttpClient'
import _ from 'lodash'

const initialState = {
  user : {
    authorized : false,
    isFetching : false
  }
}

export default function userInfo(state = initialState, action) {

  switch (action.type) {
    case REQUEST_USER_INFO:
      return  _.merge( {}, state, { user : { isFetching : true } }  )
    case RECIEVE_USER_INFO:
      return  _.merge( {}, state, { user : { isFetching : true } }  )
    case ERROR_USER_INFO:
      return  _.merge( {}, state, { user : { isFetching : false, hasErrors: true } }  )

    default:
      return state;
  }

}
