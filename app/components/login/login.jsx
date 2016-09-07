import React from 'react';
import {Link, browserHistory} from 'react-router'
import http from '../common/http'

class Login extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
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
      browserHistory.push('/wolf');
    }, (err) => {
      alert("账号或密码错误");
    })
    // http.POST()
    // debugger;
  }
  render() {
    // const self = this
    return (
      <div>
          <label> username: </label>
          <input type="text" placeholder="USERNAME" ref="username" />
          <label> password: </label>
          <input type="password" placeholder="password here" ref="password" />
          <input type="button" value="submit" onClick={this.handleSubmit} />

      </div>
    )
  }
};

module.exports = {Login}
