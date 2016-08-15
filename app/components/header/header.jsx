import React from 'react';
import {IndexLink,Link} from 'react-router'

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container" style={{marginLeft: "20px"}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand"> _Young </IndexLink>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="/about"> about </Link></li>
              <li><Link to="/about/test"> about Test</Link></li>
              <li><Link to="/test"> test </Link></li>
              <li><Link to="/user"> user </Link></li>
              <li><Link to="/wolf"> 狼人杀 </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

module.exports = {Header}
