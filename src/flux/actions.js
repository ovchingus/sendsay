/**
 * Actions
 */
export const FILE_ATTACH = 'FILE_ATTACH'
export const RESET_ATTACHMENTS = 'RESET_ATTACHMENTS'
export const FILE_DETACH = 'FILE_DETACH'
export const SEND_EMAIL = 'SEND_EMAIL'
export const SENT_SUCCESS = 'SENT_SUCCESS'
export const SENT_ERROR = 'SENT_ERROR'

/**
 * Action creators
 */
export const fileAttach = (attachments) => ({
  type: FILE_ATTACH,
  attachments
})

export const resetAttachments = () => ({
  type: RESET_ATTACHMENTS
})

export const fileDetach = (attachment) => ({
  type: FILE_DETACH,
  attachment
})

export const sentSuccess = (email, trackId) => ({
  type: SENT_SUCCESS,
  email,
  trackId
})

export const sentError = (email, error) => ({
  type: SENT_ERROR,
  email,
  error
})

/**
 * Thunks
 */
export const sendEmail = (email) => (dispatch) => {
  dispatch(resetAttachments())
  return dispatch(processEmail(email))
}

const processEmail = (email) => (dispatch, getState, sendsayApi) => {
  const normalizedRequest = {
    action: 'issue.send.test',
    letter: {
      subject: email.subject,
      'from.name': email.fromName,
      'from.email': email.fromEmail,
      'to.name': email.toName,
      message: { text: email.message },
      attaches: email.attachments.map(attachment => ({
        name: attachment.name,
        encoding: 'base64',
        content: attachment.data
      }))
    },
    sendwhen: 'test',
    mca: [
      email.toEmail
    ]
  }
  console.log(normalizedRequest)
  return sendsayApi.request(normalizedRequest).then(
    (trackId) => dispatch(sentSuccess(email, trackId)),
    (error) => dispatch(sentError(email, error))
  )
}
