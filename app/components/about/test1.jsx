import React from 'react';

class About extends React.Component{
  constructor() {
    console.log('123')
    super();
  }
  render() {
    return (
      <div className="container">
        <span> Hello About! </span>
        {this.props.children}
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

module.exports = {About,Test,Users,User}
