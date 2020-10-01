import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { FaRedo } from 'react-icons/fa';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Internet Connection Error</h4>
        <h4>Tap to retry</h4><br />
        <FaRedo size={60} />
      </div>
    );
  }
}

export default App;
