export const FILE_ATTACH = 'FILE_ATTACH'
export const RESET_ATTACHMENTS = 'RESET_ATTACHMENTS'
export const FILE_DETACH = 'FILE_DETACH'

export const SEND_EMAIL = 'SEND_EMAIL'

export const fileAttach = (attachments) => ({
  type: FILE_ATTACH,
  attachments
})

export const resetAttachments = (attachments) => ({
  type: RESET_ATTACHMENTS
})

export const fileDetach = (attachment) => ({
  type: FILE_DETACH,
  attachment
})

export const sendEmail = (email) => ({
  type: SEND_EMAIL,
  email
})
