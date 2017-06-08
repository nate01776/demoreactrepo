import React, { Component } from 'react';
import './App.css';
import Week from './Weeks.js'
import ShowGame from './ShowGame.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekData: "",
      weekCount: 0,
      gameData: "",
      gameStats: "",
      playerData: ""
    }
    this.handleGetGames = this.handleGetGames.bind(this)
    this.handleGetGame = this.handleGetGame.bind(this)
    this.handleUpdateWeek = this.handleUpdateWeek.bind(this)
    this.handleGetPlayerInfo = this.handleGetPlayerInfo.bind(this)
  }

  // CALL TO GET wEEK DATA ON BUTTON CLICK
  handleGetGames(week) {
    fetch('http://localhost:8012/games?week=' + week)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          weekData: json["results"],
          weekCount: json["results_count"]
        })
    })
  }

  handleUpdateWeek(button) {
    this.setState({
      weekSelection: button.target.id
    })
    this.handleGetGames(button.target.id)
  }
  // CALL TO GET GAME DATA ON BUTTON CLICK
  handleGetGame(button) {
    let id = button.target.id
    fetch('http://localhost:8012/games/' + id)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          playerData: "",
          gameData: json["results"]["game_data"],
          gameStats: json["results"]["game_stats"]
        })
      })
  }
  // CALL TO GET PLAYER DATA ON BUTTON CLICK
  handleGetPlayerInfo(button) {
    let id = button.target.id
    fetch('http://localhost:8012/players?id=123')
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          playerData: json["results"]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className='page_header'>
          <h1 className='page_title'>NATHANS NFL STAT APP</h1>
        </div>
        <div className="button_container">
          <button onClick={this.handleUpdateWeek} id="1">1</button>
          <button onClick={this.handleUpdateWeek} id="2">2</button>
          <button onClick={this.handleUpdateWeek} id="3">3</button>
          <button onClick={this.handleUpdateWeek} id="4">4</button>
          <button onClick={this.handleUpdateWeek} id="5">5</button>
          <button onClick={this.handleUpdateWeek} id="6">6</button>
          <button onClick={this.handleUpdateWeek} id="7">7</button>
          <button onClick={this.handleUpdateWeek} id="8">8</button>
          <button onClick={this.handleUpdateWeek} id="9">9</button>
          <button onClick={this.handleUpdateWeek} id="10">10</button>
          <button onClick={this.handleUpdateWeek} id="11">11</button>
          <button onClick={this.handleUpdateWeek} id="12">12</button>
        </div>
        <div className="weekData">
          <Week
            weekData={this.state.weekData}
            weekCount={this.state.weekCount}
            handleGetGame={this.handleGetGame}
          />
        </div>
        <div className="gameData">
          <ShowGame
            gameData={this.state.gameData}
            gameStats={this.state.gameStats}
            playerData={this.state.playerData}
            handleGetPlayerInfo={this.handleGetPlayerInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;
