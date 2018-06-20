import React, { Component } from 'react';
import kiwi from './kiwi.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={kiwi} className="App-logo" alt="kiwi" />
          <h1 className="App-title">Welcome to Kwitter</h1>
        </header>
        <p className="heading">
          Click Login to start Kwitting or Sign Up to make an account!!!
        </p>
        <button class = "login">Login</button>
        <button class = "signup">Sign Up!!</button>
      </div>
    );
  }
}

export default App;
