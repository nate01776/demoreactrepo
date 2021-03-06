import React, { Component } from 'react';

const ShowGame = props => {
  let gameData = ""
  let gameStats = ""
  let homeTeam = ""
  let awayTeam = ""
  let homeScore = ""
  let awayScore = ""
  const homeTeamObject = ""

  if (props !== null) {
    fetch('http://10.0.30.175:4567/teams/1')
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        const homeTeamObject = json["results"]
      })
    console.log(homeTeamObject)
    gameData = props.gameData
    gameStats = props.gameStats
    homeTeam = gameData["home"]
    awayTeam = gameData["away"]
    homeScore = gameData["home_score"]
    awayScore = gameData["away_score"]
  }

  return (
    <div className="single_game_container">
      <h2>{awayTeam} @ {homeTeam}</h2>
      <h3>{awayScore} - {homeScore}</h3>
    </div>
  );
}

export default ShowGame;

