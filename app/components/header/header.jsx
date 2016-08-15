import React from 'react';
import {Link} from 'react-router'

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <span> Hello World! </span>
        <li><Link to="/about"> about </Link></li>
        <li><Link to="/test"> test </Link></li>
        <li><Link to="/user"> user </Link></li>
        <li><Link to="/main"> Main </Link></li>
      </div>
    )
  }
};

module.exports = {Header}
