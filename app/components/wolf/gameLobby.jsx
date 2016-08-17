import React from 'react';

import RoomList from '../data/roomList.json'
import Versions from '../data/versions.json'

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
    this.viList = [];
    this.viList.push(
      <li style={{display: "inline"}} key="999">
        <a href="javascript:" onClick={this.changeVersion.bind(this, undefined)}> 全部</a>
      </li>
    )
    for (var i = 0; i < this.datas.versions.length; i++) {
      this.viList.push(
        <li style={{display: "inline"}} key={this.datas.versions[i].id}>
          <a href="javascript:" onClick={this.changeVersion.bind(this, this.datas.versions[i].id)}> {this.datas.versions[i].name}</a>
        </li>
      );
    }
    this.showRooms();
  }
  showRooms(versionId) {
    this.getRoomList();
    this.roList = [];
    for (var i = 0; i < this.datas.roomList.length; i++) {
      if(versionId == undefined || this.datas.roomList[i].versionId == versionId) {
        this.roList.push(<li key={this.datas.roomList[i].id}>
          <a href="javascript:" onClick={this.goRoom.bind(this, this.datas.roomList[i].id)}> {this.datas.roomList[i].name} </a>
        </li>)
      }
    }
    this.setState( {status:'2'})
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
