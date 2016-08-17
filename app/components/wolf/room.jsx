import React from 'react';

import sitList from '../data/sitList.json'
import userList from '../data/userList.json'

class Room extends React.Component{
  constructor() {
    super();
    this.state = { status: 0 };
    this.sitsTop = [];
    this.sits = [];
    this.sitsBottom = [];
  }
  componentDidMount() {
    this.getSits();
    this.setSits();
    this.setState({state: ++this.state.status});
  }
  getSits() {
    this.sits = sitList.sits;
  }
  setSits() {
    for (var i = 0; i < 9; i++) {
      this.sitsTop.push(
        <Sit key={this.sits[i].no} sitInfo={this.sits[i]}> </Sit>
      )
    }
    for (var i = 17; i >=9; i--) {
      this.sitsBottom.push(
        <Sit key={this.sits[i].no} sitInfo={this.sits[i]}> </Sit>
      )
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.sitsTop}
          <Middle />
          {this.sitsBottom}
        </div>
      </div>
    )
  }
};

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <span> Header header header header header </span>
      </div>
    )
  }
};

class Sit extends React.Component {
  constructor() {
    super();
    this.player = {};
    this.photo = ""
    this.state = { status: 0 };
  }
  componentDidMount() {
    this.getPlayer();
    this.setState({state: ++this.state.status});
  }
  getPlayer () {
    if (!!this.props.sitInfo.playerId) {
      this.player = GetUserById(this.props.sitInfo.playerId)
      this.photo = "./app/components/data/img/" + this.player.photo;
    } else {
      this.player = {};
      this.photo = "./app/components/data/img/default.png";
    }
  }
  render() {
    return (
      <div style={{width: "10%", display: "inline-block"}}>
        <img src={this.photo} style={{width:"100%", zIndex: "-1"}}/>
        <div>
          <span> {this.props.sitInfo.no} </span>
        </div>
      </div>
    )
  }
}

class Middle extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <span> Middle Middle Middle Middle Middle </span>
      </div>
    )
  }
}

let GetUserById = function(id) {
  for (var i = 0; i < userList.users.length; i++) {
    if(userList.users[i].id === id) {
      return userList.users[i]
    }
  }
}

module.exports = {Room}
