import React, { Component } from 'react';
import Game from './Games.js'

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekData: this.props.weekData
    }
  }

  render() {
    console.log(this.state.weekData)
    let weekObjects = []

    for (var i = 0; i < 5; i++) {
      weekObjects.push(
        <Game
          data={this.state.weekData}
          key={i}
        />
      )
    }

    return (
      <div className="week_container">
        {weekObjects}
      </div>
    );
  }
}

export default Week;
