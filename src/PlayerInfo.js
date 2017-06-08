import React, { Component } from 'react';

const PlayerInfo = props => {
  let playerData = props.playerData
  let playerName = ""
  let playerImage = ""
  let playerPosition = ""
  let playerHeight = ""
  let playerWeight = ""
  let playerCollege = ""

  if (playerData["first_name"] !== undefined) {
    playerName = playerData["first_name"] + " " + playerData["last_name"]
    playerImage = playerData["image"]
    playerPosition = playerData["position"]
    playerHeight = playerData["height"] + '"' + " / " + playerData["weight"] + " lbs"
    playerCollege = playerData["college"]
  }

  return (
    <div className="player_container">
      <img src={playerImage} className="player_image"/>
      <h3>{playerPosition}</h3>
      <h3>{playerName}</h3>
      <h4>{playerHeight}</h4>
      <h4>{playerCollege}</h4>
    </div>
  );
}

export default PlayerInfo;
