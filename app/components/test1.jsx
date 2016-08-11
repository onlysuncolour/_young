import React from 'react';
import {Link} from 'react-router'

class App extends React.Component{
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
        {this.props.children}
        <About />
      </div>
    )
  }
};

class About extends React.Component{
  constructor() {
    console.log('123')
    super();
  }
  render() {
    return (
      <div className="container">
        <span> Hello About! </span>
      </div>
    )
  }
};

class Test extends React.Component{
  constructor() {
    console.log('123456')
    super();
  }
  render() {
    return (
      <div className="about">
        <span> Hello test! </span>
      </div>
    )
  }
};

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  // componentDidMount() {
  //   this.setState({
  //     // route components are rendered with useful information, like URL params
  //     user: findUserById(this.props.params.userId)
  //   })
  // },

  render() {
    return (
      <div>
        <h2> 1234567 </h2>
        // {/* etc. */}
      </div>
    )
  }
})

module.exports = {App,About,Test,Users,User}
