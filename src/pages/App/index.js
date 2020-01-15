import React from 'react'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import logo from 'assets/logo.svg'

import MailSender from 'views/MailSender'
import MailSendedTable from 'views/MailSendedTable'

import './style.css'

function App () {
  return (
    <Layout>
      <Logo src={logo} className='App-logo' />
      <MailSender className='App-MailSender' />
      <div className='App-SendedTable'>
        <div className='App-SendedTableTitle'>
        Отправленные сообщения
        </div>
        <MailSendedTable className='App-SendedTableData' />
      </div>
    </Layout>
  )
}

export default App
