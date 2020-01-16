import React from 'react'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import logo from 'assets/logo.svg'
import MailSender from 'views/MailSender'
import MailSentTable from 'views/MailSentTable'

import './style.css'

function App () {
  return (
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
  )
}

export default App
