import React, { Component } from 'react';

const Game = props => {
  let homeTeam = props.data["home"]
  let awayTeam = props.data["away"]

  return (
    <div className="game_container" id={props.data["id"]} onClick={props.handleGetGame}>
      <h2 id={props.data["id"]}>{homeTeam} @ {awayTeam}</h2>
    </div>
  );
}

export default Game;
