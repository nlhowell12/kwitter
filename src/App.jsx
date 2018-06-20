import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import Homepage from './components/Homepage.jsx';
import Userfeed from './components/Userfeed.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
            <Switch>
            <Route exact path='/' render={() => <Homepage></Homepage>}/>
            <Route path='/userFeed' render={() => <Userfeed></Userfeed>}/>
            </Switch>
          <p>{"This is just a placeholder, we'll get something up here as we progress"}</p>
        </React.Fragment>
      </div>
    );
  }
}

export default App;


