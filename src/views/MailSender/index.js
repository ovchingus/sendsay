import React from 'react'
import { connect } from 'react-redux'
import Input from 'components/Forms/Input'
import InputGroup from 'components/Forms/InputGroup'
import TextArea from 'components/Forms/TextArea'
import SvgIcon from 'components/SvgIcon'
import paperclipIcon from 'assets/IconPaperclipSM_Blue.svg'
import Button from 'components/Button'
import Dropzone from 'components/Dropzone'
import { useComponentVisible } from 'utils'
import { fileAttach, fileDetach } from 'flux/actions'

import './style.css'

import Attachment from './Attachment'

const MailSender = ({
  className,
  attachments,
  handleFileAttachAccept,
  handleFileDetach,
  adw
}) => {
  const [ref, isDropzoneVisible, setIsDropzoneVisible] = useComponentVisible(
    false
  )

  const handleAttachButtonClick = () => {
    setIsDropzoneVisible(true)
  }

  return (
    <div className={`MailSender ${className}`}>
      {isDropzoneVisible && (
        <div ref={ref}>
          <Dropzone
            maxFileSize={5000000}
            handleAccept={handleFileAttachAccept}
            className='MailSender-dropzone'
          />
        </div>
      )}

      <div className='MailSender-title'>Отправлялка сообщений</div>
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
        {attachments.map(file => (
          <Attachment
            onRemove={() => handleFileDetach(file)}
            key={file.name}
            name={file.name}
            className='MailSender-attachment'
          />
        ))}
      </div>

      <Button
        textOnly
        onClick={() => handleAttachButtonClick()}
        className='MailSender-fileAttach'
      >
        <SvgIcon src={paperclipIcon} alt='paperclip-icon' />
          &nbsp;Прикрепить файл
      </Button>

      <Button className='MailSender-sendButton'>Отправить</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  attachments: state.attachments
})

const mapDispatchToProps = dispatch => ({
  handleFileAttachAccept: files => {
    dispatch(fileAttach(files))
  },
  handleFileDetach: file => {
    dispatch(fileDetach(file))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MailSender)
