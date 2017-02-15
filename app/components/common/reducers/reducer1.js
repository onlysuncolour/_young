
const reducer1 = (state = {text: "hello"}, action) => {
  switch (action.type) {
    case 'say-hello':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'change-url':
      // if (state.id !== action.id) {
      return state
      // }
      // return Object.assign({}, state, {
      //   completed: !state.completed
      // })
    case 'test' :
      return {
        text: 'test'
      }

    default:
      return state
  }
}


module.exports = {reducer1}
