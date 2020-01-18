import {
  FILE_ATTACH,
  FILE_DETACH,
  SEND_EMAIL
} from './actions'

import { getMonthName } from 'utils'

const initialStateCurrent = {
  attachments: []
}

export function current (state = initialStateCurrent, action) {
  switch (action.type) {
    case FILE_ATTACH:
      return {
        ...state,
        attachments: [
          ...state.attachments,
          ...action.attachments
        ]
      }
    case FILE_DETACH:
      return {
        ...state,
        attachments: [
          ...state.attachments.slice(0, state.attachments.indexOf(action.attachment)),
          ...state.attachments.slice(state.attachments.indexOf(action.attachment) + 1)
        ]
      }
    case SEND_EMAIL:
      return {
        ...state,
        ...action.email
      }
    default:
      return state
  }
}

export function sent (state = [], action) {
  // const normalizedValues = {
  //   letter: {
  //     subject: action.subject,
  //     'from.name': action.fromName,
  //     'from.email': action.fromEmail,
  //     'to.name': action.toName,
  //     message: {
  //       text: action.message
  //     },
  //     attaches: action.attachments
  //   },
  //   mca: [
  //     action.toEmail
  //   ]
  // }

  const date = new Date()
  const normalizedDate = `${date.getDate()} ${getMonthName(date.getMonth())}`

  switch (action.type) {
    case SEND_EMAIL:
      return [
        ...state,
        {
          date: normalizedDate,
          theme: action.email.subject,
          status: 'Ошибка'
        }
      ]
    default:
      return state
  }
}
