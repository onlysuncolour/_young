import React from 'react';
import {GameLobby} from "./gameLobby"
import {PlayerInfo} from "./playerInfo"

class Main extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container" style={{width: "100%"}}>
        <PlayerInfo />
        <GameLobby />
      </div>
    )
  }
};

module.exports={Main}
