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
    this.progressInfo = "等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 等待游戏 "
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
          <Middle progressInfo={this.progressInfo} />
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
    this.photo = "";
    this.state = { status: 0 , sitStatus: 5};
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
    if (this.state.sitStatus == -1) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
        </div>
      )
    } if (this.state.sitStatus == 0) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 坐 </button>
        </div>
      )
    } if (this.state.sitStatus == 1) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 警长 </button>
        </div>
      )
    }  if (this.state.sitStatus == 2) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 投票 </button>
        </div>
      )
    } else if (this.state.sitStatus == 3) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 杀 </button>
        </div>
      )
    } else if (this.state.sitStatus == 4) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 验 </button>
        </div>
      )
    } else if (this.state.sitStatus == 5) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 救 </button>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 毒 </button>
        </div>
      )
    } else if (this.state.sitStatus == 6) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 守 </button>
        </div>
      )
    } else if (this.state.sitStatus == 7) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 枪毙 </button>
        </div>
      )
    } else if (this.state.sitStatus == 8) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 情侣 </button>
        </div>
      )
    } else if (this.state.sitStatus == 9) {
      this.doButton = (
        <div style={{padding: "20px"}}>
          <span style={{display: "block"}}> &nbsp;</span>
          <button onClick={this.sit} style={{margin:"auto", display: "block"}}> 我是白痴！ </button>
        </div>
      )
    }
  }
  sit() {

  }
  render() {
    return (
      <div style={{width: "10%", display: "inline-table", height: "300px", backgroundImage: "url("+this.photo+")", backgroundPosition: "center", backgroundSize: "100%", backgroundRepeat: "no-repeat", marginLeft: "20px", border: "1px solid"}}>
        {this.doButton}
      </div>
    )
  }
}

class Middle extends React.Component {
  constructor() {
    super();
    this;
  }
  render() {
    return (
      <div>
        <GameProgress progressInfo={this.props.progressInfo} />
        <GameProgress progressInfo={this.props.progressInfo} />
        <GameProgress progressInfo={this.props.progressInfo} />
      </div>
    )
  }
}

class GameProgress extends React.Component {
  constructor() {
    super();
    this.params = [];
    this.showProgressRender = [];
    this.state = { status: 0 };
  }
  componentDidMount() {
    if (this.props.progressInfo != this.params[this.params.length-1]) {
      this.params.push(this.props.progressInfo)
    }
    this.makeShowProgress()
    this.setState({state: ++this.state.status});
  }
  makeShowProgress() {
    for (let i = 0; i < this.params.length; i++) {
      let progressArr = this.params[i].split(' ');
      for (let j = 0; j < progressArr.length; j++) {
        this.showProgressRender.push( <p> {progressArr[j]} </p> )
      }
      this.showProgressRender.push( <p> &nbsp; </p> )
    }
  }
  render() {
    return (
      <div style={{width: "33%", display: "inline-block"}}>
        {this.showProgressRender}
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
