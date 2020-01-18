import {
  FILE_ATTACH,
  FILE_DETACH,
  SENT_SUCCESS,
  SENT_ERROR,
  RESET_ATTACHMENTS
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
    case RESET_ATTACHMENTS:
      return initialStateCurrent
    default:
      return state
  }
}

export function sent (state = [], action) {
  const date = new Date()
  const normalizedDate = `${date.getDate()} ${getMonthName(date.getMonth())}`

  switch (action.type) {
    case SENT_SUCCESS:
      return [
        ...state,
        {
          date: normalizedDate,
          theme: action.email.subject,
          status: 'Ошибка',
          trackId: action.trackId['track.id']
        }
      ]
    default:
      return state
  }
}
