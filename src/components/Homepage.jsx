import React, { Component } from 'react';
import kiwi from '../kiwi.jpg';
import '../App.css';

class Homepage extends Component {
    render() {
      return (
        <div className="Homepage">
          <header className="HP-header">
            <img src={kiwi} className="App-logo" alt="kiwi" height="200px" width= "200px" />
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
  
  export default Homepage;