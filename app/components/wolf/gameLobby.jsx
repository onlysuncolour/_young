import React from 'react';

import RoomList from './roomList.json'
import Versions from './versions.json'

class GameLobby extends React.Component{
  constructor() {
    super();
    this.state = { status: '' };
    this.datas = {
      versions: [{id: 0, name: '标准'}],
      roomList: [{id: 0, name: '标准房01', versionId: 0}]
    };
    this.viList = [];
    this.roList = [];

  }
  componentDidMount() {
    console.log(123)
    this.getVersions();
    this.getRoomList();
  }
  getVersions() {
    this.datas.versions = Versions.versions;
    this.showVersions();
  }
  getRoomList() {
    this.datas.roomList = RoomList.roomList;
  }
  showVersions() {
    this.viList = []
    for (var i = 0; i < this.datas.versions.length; i++) {
      this.viList.push(
        <li style={{display: "inline"}} key={this.datas.versions[i].id}>
          <a onClick={this.changeVersion.bind(this, this.datas.versions[i].id)}> {this.datas.versions[i].name}</a>
        </li>
      );
    }
    this.render()
    this.showRooms();
  }
  showRooms(versionId) {
    this.getRoomList();
    this.roList = [];
    for (var i = 0; i < this.datas.roomList.length; i++) {
      if(versionId == undefined || this.datas.roomList[i].versionId == versionId) {
        this.roList.push(<li key={this.datas.roomList[i].id}>
          <a onClick={this.goRoom.bind(this, this.datas.roomList[i].id)}> {this.datas.roomList[i].name} </a>
        </li>)
      }
    }
    this.setState( {status:'2'})
    this.render()
    // return this.roList
  }
  changeVersion(id) {
    this.showRooms(id);
  }
  goRoom(roomId) {

  }
  render() {
    return (
      <div style={{display: "inline-block",width:"80%"}}>
        <div>
          { this.viList }
        </div>
        <div>
          { this.roList }
        </div>
      </div>
    )
  }
};

module.exports = {GameLobby}
