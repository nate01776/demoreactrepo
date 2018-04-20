import React from 'react';

const GameStat = props => {
  let classString = "stat_container"
  let playType = props.data["play_type"]
  let yards = props.data["yards"]
  let direction = props.data["direction"]
  let playerID = props.data["player_id"]
  let complete = props.data["complete"]
  let arrow = <i className='fa fa-arrow-left' aria-hidden='true'></i>

  if (direction === "right") {
    arrow = <i className='fa fa-arrow-right' aria-hidden='true'></i>
  } else if (direction === "middle") {
    arrow = <i className='fa fa-arrow-up' aria-hidden='true'></i>
  }

  if (playType === "pass" && complete) {
    classString = "stat_container green"
  } else if (playType === "pass" && complete !== true) {
    classString = "stat_container red"
  } else if (playType === "rec") {
    classString = "stat_container yellow"
  } else if (playType === "rush") {
    classString = "stat_container blue"
  }

  // <i className="fa fa-plus-square" aria-hidden="true" onClick={props.handleGetPlayerInfo} id={playerID}></i>

  return (
    <div className={classString}>
      <h3>{playType}</h3>
      <h4>{yards} yards</h4>
    </div>
  );
}

export default GameStat;
