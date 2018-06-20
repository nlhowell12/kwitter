import React, { Component } from 'react';
import './App.css';
import Userfeed from './components/Userfeed.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Userfeed>

        </Userfeed>
        <p>{"This is just a placeholder, we'll get something up here as we progress"}</p>
      </div>
    );
  }
}

export default App;
