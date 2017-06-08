import React, { Component } from 'react';
import GameStat from './GameStat.js'
import PlayerInfo from './PlayerInfo.js'

const ShowGame = props => {
  let gameData = ""
  let gameStats = ""
  let homeTeam = ""
  let awayTeam = ""
  let homeScore = ""
  let awayScore = ""
  let gameStatsArray = []
  let customGameClass = "single_game_container"

  if (props.gameData["home"] !== undefined) {
    gameData = props.gameData
    gameStats = props.gameStats
    homeTeam = gameData["home"]
    awayTeam = gameData["away"] + " @ " + gameData["home"]
    awayScore = gameData["away_score"] + " - " + gameData["home_score"]

    for (var i = 0; i < gameStats.length; i++) {
      gameStatsArray.push(
        <GameStat
          data={gameStats[i]}
          key={i}
          handleGetPlayerInfo={props.handleGetPlayerInfo}
        />
      )
    }
  }

  return (
    <div className={customGameClass}>
      <h2>{awayTeam}</h2>
      <h3>{awayScore}</h3>
      <div className="player_info_container">
        <PlayerInfo
          playerData={props.playerData}
        />
      </div>
      <div className="game_stats_container">
        {gameStatsArray}
      </div>
    </div>
  );
}

export default ShowGame;
