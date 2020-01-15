import React from 'react'
import Input from 'components/Forms/Input'
import InputGroup from 'components/Forms/InputGroup'
import TextArea from 'components/Forms/TextArea'
import SvgIcon from 'components/SvgIcon'
import paperclipIcon from 'assets/IconPaperclip.svg'
import Button from 'components/Button'

import './style.css'

const MailSender = () => {
  return (
    <div className='MailSender'>
      <div className='MailSender-title'>
        Отправлялка сообщений
      </div>
      <InputGroup className='MailSender-inputGroup'>
        <Input
          label='От кого'
          placeholder='Имя'
          className='MailSender-inputGroupInput'
        />
        <Input placeholder='Email' className='MailSender-inputGroupInput' />
      </InputGroup>
      <InputGroup className='MailSender-inputGroup'>
        <Input
          label='Кому'
          placeholder='Имя'
          className='MailSender-inputGroupInput'
        />
        <Input placeholder='Email' className='MailSender-inputGroupInput' />
      </InputGroup>
      <Input
        label='Тема письма'
        placeholder='Тема'
        className='MailSender-topicInput'
      />
      <TextArea
        label='Сообщение'
        className='MailSender-messageTextAreaForm'
        fieldStyle='MailSender-messageTextAreaField'
        placeholder='Ваше письмо'
      />
      <Button textOnly className='MailSender-fileAttach'>
        <SvgIcon src={paperclipIcon} alt='paperclip-icon' />
        &nbsp;Прикрепить файл
      </Button>
      <Button className='MailSender-sendButton'>
        Отправить
      </Button>
    </div>
  )
}

export default MailSender
