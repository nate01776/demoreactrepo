import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:""
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:8012/games')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       } throw new Error('Network response was not OK!')})
  //     .then(json => {
  //       this.setState({
  //         returnVal: json["data"]
  //       })
  //     })
  // };


  render() {
    return (
      <div className="App">
        <div className='page_header'>
          <h1 className='page_title'>NFL APP</h1>
          <div className='button_row'>
            <div className='header_button'>
              <h2>GAMES</h2>
            </div>
            <div className='header_button'>
              <h2>TEAMS</h2>
            </div>
            <div className='header_button'>
              <h2>PLAYERS</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
