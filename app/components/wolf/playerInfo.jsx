import React from 'react';

class PlayerInfo extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{display: "inline-block",width:"20%"}}>
        <span> Hello About! </span>
      </div>
    )
  }
};

module.exports = {PlayerInfo}
