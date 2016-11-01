import React, {PropTypes} from 'react';
import http from '../common/http'
import { connect } from 'react-redux'

class About extends React.Component{
  constructor() {
    // console.log('123')
    super();
  }
  componentDidMount() {
    // this.state = {a : 1}
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      {
        debugger;
      }
    );
  }
  render() {
    // debugger;
    return (
      <div className="container">
        <span> Hello About! </span>
        {this.props.children}

        <User />
      </div>
    )
  }
};

About.contextTypes = {
  store: React.PropTypes.object
}

class Test extends React.Component{
  constructor() {
    // console.log('123456')
    super();
  }
  componentDidMount() {
    // this.state = {a : 1}
    const {store} = this.context;
    store.subscribe(this.render)
  }
  test() {
    // http.GET('test').then((resp) => {
    //   console.log("test");
    // })
    debugger
  }
  render() {
    debugger;
    const {text, test1} = this.props
    return (
      <div className="about">
        <span> Hello test! </span>
        <button onClick={test1} style={{margin:"auto", display: "block"}}> test </button>
        <span> {text} </span>
      </div>
    )
  }
};


Test.propTypes = {
  text: PropTypes.string.isRequired,
  test1: PropTypes.func.isRequired
}

Test.contextTypes = {
  store: React.PropTypes.object
}



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
         {/* etc. */}
      </div>
    )
  }
})

const testAction = {type: 'test'}

const TestApp = connect(state=>({text: state.text}), dispatch => ({test1: () =>
  // debugger;
  dispatch(testAction)
}))(Test)


module.exports = {About,Test,Users,User, TestApp}
