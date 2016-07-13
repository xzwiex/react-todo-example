import { REQUEST_USER_INFO, RECIEVE_USER_INFO, ERROR_USER_INFO } from '../constants'

export function loadUserInfo() {
  return (dispatch, getState) => {
    return dispatch({
      type : REQUEST_USER_INFO,
      payload : {
        url : '/user-info',
        successType : RECIEVE_USER_INFO,
        errorType : ERROR_USER_INFO
      }
    })
  }
}
