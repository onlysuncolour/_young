import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

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

const app = document.createElement('div');
document.body.appendChild(app);
// ReactDOM.render(<App />, app);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="user" component={User}>
        // <Route path="/user/:userId" component={User}/>
      </Route>
    </Route>
    <Route path="/test" component={Test}>
    </Route>
  </Router>
), app)
