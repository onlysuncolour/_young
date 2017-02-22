import React from 'react';
import {Link} from 'react-router'
import {Header} from './header/header'
import { browserHistory } from 'react-router'
import {AuthService} from './common/authService'

class Main extends React.Component{
  constructor() {
    super();

  }
  componentWillMount() {
    if (location.pathname != '/login') {
      AuthService.checkAuth().then(resp=> {

      }, err=> {
        browserHistory.push('/login');
      })
    }
  }
  render() {
    return (
      <div>
        <Header>  </Header>
        {this.props.children}
      </div>
    )
  }
}

module.exports = {Main}
