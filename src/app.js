
import React  from 'react'
import ReactDOM  from 'react-dom'
import ApplicationPage from './pages/ApplicationPage'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()


const app =  <Provider store={store}><ApplicationPage/></Provider>

ReactDOM.render(app, document.getElementById('application'));
