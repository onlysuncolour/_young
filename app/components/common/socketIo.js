import io from 'socket.io-client'
// require('socket.io-client')

let socket;

let SOCKETIO = {
  connect() {
    socket = io.connect('http://localhost:8083')
    this.setSocket();
  },
  setSocket() {
    socket.on('open', (resp) => {
      console.log('socket connected!');
      console.log(resp);
    })
  }
}


module.exports = {SOCKETIO}
