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
import { Field, Form, ErrorMessage, withFormik } from 'formik'
import * as Yup from 'yup'

import './style.css'

import Attachment from './Attachment'

const validationSchema = Yup.object().shape({
  fromName: Yup.string()
    .min(2, 'Имя очень подозрительно')
    .required('Ваше имя не может не быть'),
  fromEmail: Yup.string()
    .email('Email должен быть корректным')
    .required('Email не может быть пустым'),
  toName: Yup.string()
    .min(2, 'Имя очень подозрительно')
    .required('Имя получателя не может не быть'),
  toEmail: Yup.string()
    .email('Email должен быть корректным')
    .required('Email не может быть пустым'),
  subject: Yup.string().required('Тема не может быть пустой'),
  message: Yup.string().required('Email не может быть пустым')
})

const MailSender = ({
  className,
  attachments,
  handleFileAttachAccept,
  handleFileDetach,
  values,
  touched,
  errors,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  handleBlur
}) => {
  const [ref, isDropzoneVisible, setIsDropzoneVisible] = useComponentVisible(
    false
  )

  const handleAttachButtonClick = () => {
    setIsDropzoneVisible(true)
  }

  return (
    <Form onSubmit={handleSubmit} className={`MailSender ${className}`}>
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
        <Field
          as={Input}
          type='text'
          name='fromName'
          label='От кого'
          placeholder='Имя'
          className='MailSender-input'
        />

        <Field
          as={Input}
          type='email'
          name='fromEmail'
          placeholder='Email'
          className='MailSender-input'
        />

      </InputGroup>
      <ErrorMessage component='div' className='MailSender-inputMessage' name='fromName' />
      <ErrorMessage component='div' className='MailSender-inputMessage' name='fromEmail' />

      <InputGroup onSubmit={handleSubmit} className='MailSender-inputGroup'>
        <Field
          as={Input}
          type='text'
          name='toName'
          label='Кому'
          placeholder='Имя'
          className='MailSender-input'
        />
        <Field
          as={Input}
          type='email'
          name='toEmail'
          placeholder='Email'
          className='MailSender-input'
        />
      </InputGroup>
      <ErrorMessage component='div' className='MailSender-inputMessage' name='toName' />
      <ErrorMessage component='div' className='MailSender-inputMessage' name='toEmail' />

      <Field
        as={Input}
        type='text'
        name='subject'
        label='Тема письма'
        placeholder='Тема'
        className='MailSender-topicInput'
      />
      <ErrorMessage component='div' className='MailSender-inputMessage' name='subject' />
      <Field
        as={TextArea}
        name='message'
        label='Сообщение'
        className='MailSender-messageTextAreaForm'
        fieldStyle='MailSender-messageTextAreaField'
        placeholder='Ваше письмо'
      />

      <div className='MailSender-attachmentContainer'>
        {attachments.map((file, ind) => {
          // const onChangeAttachment = () => {
          //   setFieldValue('attachments', [...attachments])
          // }
          return (
            <Field
              as={Attachment}
              // onChange={onChangeAttachment}
              onRemove={() => { handleFileDetach(file) }}
              key={`file_${ind}`}
              name={file.name}
              className='MailSender-attachment'
            />
          )
        })}
      </div>

      <Button
        textOnly
        type='button'
        onClick={handleAttachButtonClick}
        className='MailSender-fileAttach'
      >
        <SvgIcon src={paperclipIcon} alt='paperclip-icon' />
        &nbsp;Прикрепить файл
      </Button>

      <Button type='submit' className='MailSender-sendButton'>
        Отправить
      </Button>
    </Form>
  )
}

const formikEnhancer = withFormik({
  validationSchema: validationSchema,
  mapPropsToValues: () => ({
    fromName: '',
    fromEmail: '',
    toName: '',
    toEmail: '',
    subject: '',
    attachments: []
  }),
  handleSubmit: (values, formikBag) => {
    setTimeout(() => {
      
    }, 1000)
  },
  displayName: 'MailSender'
})(MailSender)

const mapStateToProps = state => ({
  attachments: state.current.attachments
})

const mapDispatchToProps = dispatch => ({
  handleFileAttachAccept: files => {
    dispatch(fileAttach(files))
  },
  handleFileDetach: file => {
    dispatch(fileDetach(file))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(formikEnhancer)
