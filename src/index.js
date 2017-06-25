import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AppContainer} from 'react-hot-loader'

const root = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
    <Component/>
  </AppContainer>, root)
}

render(App)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextRootContainer = require('./App.js').default
    render(NextRootContainer)

  })
}
