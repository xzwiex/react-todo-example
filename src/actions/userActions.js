import { HTTP_REQUEST, RECIEVE_USER_INFO, ERROR_USER_INFO } from '../constants'

export function loadUserInfo() {
  return {
    [HTTP_REQUEST] : {
      url : '/user-info',
      successType : RECIEVE_USER_INFO,
      errorType : ERROR_USER_INFO
    }
  }
}
