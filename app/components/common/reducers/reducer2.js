const reducer2 = (state = 'HELLOWORLD', action) => {
  switch (action.type) {
    case 'say-something':
      return action.filter
    default:
      return state
  }
}

export default reducer2
