import React, { Component } from 'react';
import kiwi from '../kiwi.jpg';
import '../App.css';
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom';


class Homepage extends Component {
      loginFetch = (username, password) => {
        const { dispatch, history } = this.props;
        let loginMethod = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username,
            password
          }),
          mode: 'cors'
        }
        fetch('https://kwitter-api.herokuapp.com/auth/login', loginMethod)
          .then(response => response.json())
          .then(data => {
            if(data.success) {
              dispatch(login(username, data.token))
              history.push('/userFeed');
            }else {
              alert("Login Unsuccessful")
            }})
      }
    render() {
      return (
        <div className="Homepage">
          <header className="HP-header">
            <img src={kiwi} className="App-logo" alt="kiwi" />
            <h1 className="App-title">Welcome to Kwitter</h1>
          </header>
          <p className="heading">
            Click Login to start Kwitting or Sign Up to make an account!!!
          </p>
          <button className = "login" onClick={evt => this.loginFetch('test', 'test')}>Login</button>
          <button className = "signup" >Sign Up!!</button>
        </div>
      );
    }
  }
  
  export default withRouter(connect()(Homepage));