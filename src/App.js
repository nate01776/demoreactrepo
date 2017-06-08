import React, { Component } from 'react';
import './App.css';
import Week from './Weeks.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekSelection: 0,
      weekData: "",
      gameData: ""
    }
    this.handleGetGames = this.handleGetGames.bind(this)
    this.handleUpdateWeek = this.handleUpdateWeek.bind(this)
  }


  handleGetGames(week) {
    fetch('http://192.168.1.7:8012/games?week=' + week)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          weekData: json
        })
    })
  }

  handleUpdateWeek(button) {
    this.setState({
      weekSelection: button.target.id
    })
    this.handleGetGames(button.target.id)
  }



  render() {
    let weekGames = []

    return (
      <div className="App">
        <div className='page_header'>
          <h1 className='page_title'>NFL STAT APP</h1>
        </div>
        <div>
          <button onClick={this.handleUpdateWeek} id="1">1</button>
          <button onClick={this.handleUpdateWeek} id="1">2</button>
        </div>
        <div className="weekData">
          <Week
            weekData={this.state.weekData}
          />
        </div>
      </div>
    );
  }
}

export default App;
