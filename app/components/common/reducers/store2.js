const store2 = (state = 'HELLOWORLD', action) => {
  switch (action.type) {
    case 'HELLO_3':
      return action.filter
    default:
      return state
  }
}

export default store2
