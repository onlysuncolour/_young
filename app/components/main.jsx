import React from 'react';

class Main extends React.Component{
  constructor() {
    console.log('main')
    super();
  }
  render() {
    return (
      <div className="main">
        <span> Hello Main! </span>
      </div>
    )
  }
};

module.exports = {Main}
