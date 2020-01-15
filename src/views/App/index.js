import React from 'react'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import logo from 'assets/logo.svg'

import MailSender from '../MailSender'

import './style.css'

function App () {
  return (
    <Layout>
      <Logo src={logo} />
      <div className='u-marginMailSender' />
      <MailSender />
    </Layout>
  )
}

export default App
