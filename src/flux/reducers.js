import {
  FILE_ATTACH,
  FILE_DETACH,
  SEND_EMAIL,
  RESET_ATTACHMENTS,
  SENT_SUCCESS,
  SENT_ERROR
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
        attachments: [...state.attachments, ...action.attachments]
      }
    case FILE_DETACH:
      return {
        ...state,
        attachments: [
          ...state.attachments.slice(0,
            state.attachments.indexOf(action.attachment)
          ),
          ...state.attachments.slice(
            state.attachments.indexOf(action.attachment) + 1
          )
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

  const getEmailByTrackId = (trackId) => {
    return state.filter(email => email.trackId === trackId)[0]
  }

  switch (action.type) {
    case SEND_EMAIL:
      return [
        ...state,
        {
          date: normalizedDate,
          theme: action.email.subject,
          status: 'В очереди',
          trackId: action.trackId
        }
      ]
    case SENT_SUCCESS:
      return [
        ...state.slice(0,
          state.indexOf(getEmailByTrackId(action.trackId))),
        {
          ...state[state.indexOf(getEmailByTrackId(action.trackId))],
          status: 'Отправлено'
        },
        ...state.slice(
          state.indexOf(getEmailByTrackId(action.trackId)) + 1
        )
      ]
    case SENT_ERROR:
      return [
        ...state.slice(0,
          state.indexOf(getEmailByTrackId(action.trackId))),
        {
          ...state[state.indexOf(getEmailByTrackId(action.trackId))],
          status: 'Ошибка'
        },
        ...state.slice(
          state.indexOf(getEmailByTrackId(action.trackId)) + 1
        )
      ]
    default:
      return state
  }
}
