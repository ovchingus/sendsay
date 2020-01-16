import {
  FILE_ATTACH,
  RESET_ATTACHMENTS,
  FILE_DETACH
} from './actions'

export function attachments (state = [], action) {
  switch (action.type) {
    case FILE_ATTACH:
      return [...state, ...action.attachments]
    case FILE_DETACH:
      return [
        ...state.slice(0, state.indexOf(action.attachment)),
        ...state.slice(state.indexOf(action.attachment) + 1)
      ]
    case RESET_ATTACHMENTS:
      return []
    default:
      return state
  }
}
