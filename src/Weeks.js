import React, { Component } from 'react';
import Game from './Games.js'

const Week = props =>{
  let weekData = props.weekData;
  let weekObjects = []

  for (var i = 0; i < weekData["results_count"]; i++) {
    weekObjects.push(
      <Game
        data={weekData["results"][i]}
      />
    )
  }

  return (
    <div>
      {weekObjects}
    </div>
  );
}

export default Week;
