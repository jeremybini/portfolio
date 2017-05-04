import 'hamburgers/dist/hamburgers.min.css'
import 'normalize.css/normalize.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'picturefill'

import './App.css'

import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import projectData from './data/projects'
import reducers from './reducers'

import Routes from './Routes'

const initialState = {
  projects: projectData,
}

const middleware = [
  thunk,
  promiseMiddleware(),
]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

let store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
)

const App = () => (
  <Provider store={ store }>
    <Routes />
  </Provider>
)

export default App
