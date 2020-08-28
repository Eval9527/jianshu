const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'search_focus':
      newState.focused = true
      break
    case 'search_blur':
      newState.focused = false
      break
    default:
      break
  }

  return newState
}
