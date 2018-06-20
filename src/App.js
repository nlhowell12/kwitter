import React, { Component } from 'react';
import kiwi from './kiwi.jpg';
import './App.css';
import Homepage from './components/Homepage.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
      </div>
    );
  }
}

export default App;
