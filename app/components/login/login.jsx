import React from 'react';
import {Link, browserHistory} from 'react-router'
import http from '../common/http'

import {SOCKETIO} from '../common/socketIo'

class Login extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  sayHello () {
    console.log("hello world");
  }
  handleSubmit() {
    let user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    http.POST('login', user).then( (resp) => {
      SOCKETIO.connect();
      browserHistory.push('/');
    }, (err) => {
      alert("账号或密码错误");
    })
  }
  handleKeyDwon(event) {
    if (event.key == 'Enter') {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div id="login">
        <div className="login-form">
          <div className="login-form-item">
            <label> username: </label>
            <input type="text" placeholder="USERNAME" ref="username" onKeyDown={this.handleKeyDwon.bind(this)} />
          </div>
          <div className="login-form-item">
            <label> password: </label>
            <input type="password" placeholder="password here" ref="password" onKeyDown={this.handleKeyDwon.bind(this)} />
          </div>
          <input type="button" value="submit" onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
};

module.exports = {Login}
