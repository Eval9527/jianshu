import * as constants from './constants'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case constants.SEARCH_FOCUS:
      newState.focused = true
      break
    case constants.SEARCH_BLUR:
      newState.focused = false
      break
    default:
      break
  }

  return newState
}
