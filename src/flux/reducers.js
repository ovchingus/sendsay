import {
  FILE_ATTACH,
  RESET_ATTACHMENTS,
  FILE_DETACH
} from './actions'

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
    // case RESET_ATTACHMENTS:
    //   return []
    default:
      return state
  }
}
