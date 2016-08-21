import React from 'react';
import {Link} from 'react-router'

class Login extends React.Component{
  constructor() {
    super();
  }
  handleSubmit(event) {
    event.preventDefault();
    
  }
  render() {
    return (
      <div>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <label> username: </label>
          <input type="text" placeholder="USERNAME" ref="username" />
          <label> password: </label>
          <input type="password" placeholder="password here" ref="password" />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
};

module.exports = {Login}
