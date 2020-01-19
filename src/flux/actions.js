/**
 * Actions
 */
export const FILE_ATTACH = 'FILE_ATTACH'
export const RESET_ATTACHMENTS = 'RESET_ATTACHMENTS'
export const FILE_DETACH = 'FILE_DETACH'

export const SEND_EMAIL = 'SEND_EMAIL'
export const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR'
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

const _sendEmail = (email, trackId) => ({
  type: SEND_EMAIL,
  email,
  trackId
})

const _sendEmailError = (email, error) => ({
  type: SEND_EMAIL_ERROR,
  email,
  error
})

export const sentSuccess = (trackId) => ({
  type: SENT_SUCCESS,
  trackId
})

export const sentError = (trackId) => ({
  type: SENT_ERROR,
  trackId
})

/**
 * Thunks
 */
export const sendEmail = (email) => (dispatch) => {
  dispatch(resetAttachments())
  return dispatch(processEmail(email))
}

const processEmail = (email) => async (dispatch, getState, sendsayApi) => {
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

  try {
    const res = await sendsayApi.request(normalizedRequest)
    const trackId = res['track.id']
    await dispatch(_sendEmail(email, trackId))
    dispatch(addStatusResolver(trackId))
  } catch (error) {
    dispatch(_sendEmailError(email, error))
  }
}

const addStatusResolver = (trackId) => (dispatch, getState, sendsayApi) => {
  const getCurrentStatus = async () => {
    await setTimeout(async () => {
      const res = await sendsayApi.request({
        action: 'track.get',
        id: trackId
      })
      const status = parseInt(res.obj.status)
      if (status === -1) {
        dispatch(sentSuccess(trackId))
      } else if (status < -1) {
        dispatch(sentError(trackId))
      } else if (status > -1) {
        getCurrentStatus()
      }
    }, 1000)
  }
  return getCurrentStatus()
}
