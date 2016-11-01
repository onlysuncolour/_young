import React from 'react';
import {Link} from 'react-router'
import {Header} from './header/header'

class Main extends React.Component{
  constructor() {
    super();

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
