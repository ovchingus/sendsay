import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import logo from 'assets/logo.svg'
import MailSender from 'modules/MailSender'
import MailSentTable from 'modules/MailSentTable'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Sendsay from 'sendsay-api'

import 'normalize.css'

import { current, sent } from 'flux/reducers'
import './index.css'
import './style.css'

const sendsayApi = new Sendsay({ apiKey: process.env.REACT_APP_SENDSAY_API_KEY });

const reducer = combineReducers({
  current,
  sent
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(sendsayApi))
))

function App () {
  return (
    <Provider store={store}>
      <Layout>
        <Logo src={logo} className='App-logo' />
        <MailSender className='App-MailSender' />
        <MailSentTable className='App-SentTable' />
      </Layout>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
