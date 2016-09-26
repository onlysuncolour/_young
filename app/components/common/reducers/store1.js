const store = (state = {}, action) => {
  switch (action.type) {
    case 'HELLO_1':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'HELLO_2':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const store1 = (state = [], action) => {
  switch (action.type) {
    case 'HELLO_1':
      return [
        ...state,
        store(undefined, action)
      ]
    case 'HELLO_2':
      return state.map(t =>
        store(t, action)
      )
    default:
      return state
  }
}

module.exports = {store1}
