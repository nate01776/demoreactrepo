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
      gameStats: ""
    }
    this.handleGetGames = this.handleGetGames.bind(this)
    this.handleGetGame = this.handleGetGame.bind(this)
    this.handleUpdateWeek = this.handleUpdateWeek.bind(this)
  }


  handleGetGames(week) {
    fetch('http://10.0.30.175:4567/games?week=' + week)
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

  handleGetGame(button) {
    let id = button.target.id
    fetch('http://10.0.30.175:4567/games/' + id)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          gameData: json["results"]["game_data"],
          gameStats: json["results"]["game_stats"]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className='page_header'>
          <h1 className='page_title'>NFL STAT APP</h1>
        </div>
        <div className="main-page">
          <div className="weeks-column">
            <h3>WEEK</h3>
            <button onClick={this.handleUpdateWeek} id="1">1</button>
            <button onClick={this.handleUpdateWeek} id="2">2</button>
            <button onClick={this.handleUpdateWeek} id="3">3</button>
            <button onClick={this.handleUpdateWeek} id="4">4</button>
          </div>
          <div className="games-column">
            <h3>GAMES</h3>
            <Week
              weekData={this.state.weekData}
              weekCount={this.state.weekCount}
              handleGetGame={this.handleGetGame}
            />
          </div>
          <div className="results-column">
            <h3>RESULTS</h3>
            <div className="gameData">
              <ShowGame
                gameData={this.state.gameData}
                gameStats={this.state.gameStats}
              />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
