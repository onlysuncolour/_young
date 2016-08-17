import React from 'react';

class PlayerInfo extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{display: "inline-block",width:"20%", height: "100%"}}>
        <div>
          <span> Hello About! </span>
        </div>
      </div>
    )
  }
};

module.exports = {PlayerInfo}
