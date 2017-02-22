import {GET} from './http'
const AuthService = {
  authInfo: {
    loginStatus: false,
    userInfo: {}
  },
  checkAuth: function() {
    return new Promise((resolve, reject) => {
      let params = {
        username: this.authInfo.userInfo.username,
        id: this.authInfo.userInfo.id
      }
      debugger
      GET('login/checkAuth', params).then(resp => {
        if (resp.success) {
          resolve(true);
        } else {
          reject(false);
        }
      }, err => {
        reject(false);
      })
    })
  }
}

module.exports = {AuthService}
