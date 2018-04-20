import React from 'react';
import Game from './Games.js'

const Week = props => {
  let weekObjects = []
  let weekData = props.weekData
  let weekCount = props.weekCount

  for (var i = 0; i < weekCount; i++) {
    weekObjects.push(
      <Game
        data={weekData[i]}
        key={i}
        handleGetGame={props.handleGetGame}
      />
    )
  }

  return (
    <div className="week_container">
      {weekObjects}
    </div>
  );
}

export default Week;
