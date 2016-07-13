import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import apiClient from '../middleware/apiClient'
import rootReducer from '../reducers'

export default function configureStore(preloadedState = {}) {

  return createStore(
    rootReducer,
    applyMiddleware(thunk, apiClient)
  )

}
