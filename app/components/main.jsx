import React from 'react';
import {Link} from 'react-router'
import {Header} from './header/header'
import { browserHistory } from 'react-router'

class Main extends React.Component{
  constructor() {
    super();

  }
  componentWillMount() {
    if(!this.checkAuth()) {
      browserHistory.push('/login');
    }
  }
  checkAuth () {
    return false
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
