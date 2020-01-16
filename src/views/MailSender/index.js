import React, { useState } from 'react'
import Input from 'components/Forms/Input'
import InputGroup from 'components/Forms/InputGroup'
import TextArea from 'components/Forms/TextArea'
import SvgIcon from 'components/SvgIcon'
import paperclipIcon from 'assets/IconPaperclipSM_Blue.svg'
import Button from 'components/Button'
import Dropzone from 'components/Dropzone'

import { useComponentVisible } from 'utils'

import './style.css'

import Attachment from './Attachment'

const MailSender = ({ className }) => {
  const [ref, isDropzoneVisible, setIsDropzoneVisible] = useComponentVisible(true)

  const handleAttach = () => {
    setIsDropzoneVisible(true)
  }

  const handleAttachedFiles = (files) => {
    // add to store
  }

  return (
    <>
      <div className={`MailSender ${className}`}>
        {isDropzoneVisible &&
          <div ref={ref}>
            <Dropzone
              maxFileSize={5000000}
              handleFiles={handleAttachedFiles}
              className='MailSender-dropzone'
            />
          </div>}

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

        <div className='MailSender-attachmentContainer'>
          {/* get from store */}
          {/* {attachedFiles.map(file => (
            <Attachment key={file.name} name={file.name} className='MailSender-attachment' />
          ))} */}
        </div>

        <Button textOnly onClick={(e) => handleAttach(e)} className='MailSender-fileAttach'>
          <SvgIcon src={paperclipIcon} alt='paperclip-icon' />
          &nbsp;Прикрепить файл
        </Button>
        <Button className='MailSender-sendButton'>
        Отправить
        </Button>
      </div>

    </>
  )
}

export default MailSender
