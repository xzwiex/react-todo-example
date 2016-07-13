//import { routerReducer as routing } from 'react-router-redux'
import userInfo from './userInfo'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userInfo
})

export default rootReducer
