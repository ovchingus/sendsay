import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import logo from 'assets/logo.svg'
import MailSender from 'views/MailSender'
import MailSentTable from 'views/MailSentTable'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import 'normalize.css'

import { current } from 'flux/reducers'
import './index.css'
import './style.css'

const reducer = combineReducers({
  current
})

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App () {
  return (
    <Provider store={store}>
      <Layout>
        <Logo src={logo} className='App-logo' />
        <MailSender className='App-MailSender' />
        <div className='App-SentTable'>
          <div className='App-SentTableTitle'>
            Отправленные сообщения
          </div>
          <MailSentTable className='App-SentTableData' />
        </div>
      </Layout>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
