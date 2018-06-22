import React, { Component } from 'react';
import kiwi from '../kiwi.jpg';
import '../App.css';
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom';

class Homepage extends Component {
      state = {
        name: "",
        password: "",
        displayName: ""
      }
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
              console.log(data)
              dispatch(login(username, data.token, data.id))
              history.push('/userFeed');
            }else {
              alert("Login Unsuccessful")
            }})
      }
      signupFetch = (username, password, displayName) => {
        let signupMethod = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username,
            password,
            displayName
          }),
          mode: 'cors'
        }
        if(username !== "" && password !== "") {  
        fetch('https://kwitter-api.herokuapp.com/auth/register', signupMethod)
          .then(response => response.json())
          .then(data => {
            alert(`You have successfully registered: Username: ${data.username} Display Name: ${data.displayName}`)
            this.setState({username: '', password: '', displayName: ''})
          })
      }else {
        alert("Please enter both a username and a password.")
      }}
      onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
      }
    render() {
      const { name, password, displayName } = this.state;
      return (
        <div className="Homepage">
          <header className="HP-header">
            <img src={kiwi} className="App-logo" alt="kiwi" />
            <h1 className="App-title">Welcome to Kwitter</h1>
          </header>
          <p className="heading">
            Click Login to start Kwitting or Sign Up to make an account!!!
          </p>
          <div className="ui container" id="loginWrapper">
            <input type="text" placeholder="Username" onChange={this.onChange("name")}/>
            <input type="text" placeholder="Password" onChange={this.onChange("password")}/>
            <button className = "ui button" onClick={evt => this.loginFetch(name, password)}>Login</button>
          </div>
          <div className="ui container" id="signupWrapper">
            <input type="text" placeholder="Username" onChange={this.onChange("name")}/>
            <input type="text" placeholder="Password" onChange={this.onChange("password")}/>
            <input type="text" placeholder="Display Name" onChange={this.onChange("displayName")}/>
            <button className = "ui button" onClick={evt => this.signupFetch(name, password, displayName)}>Sign Up!!</button>
          </div>
          
        </div>
      );
    }
  }
  
  export default withRouter(connect()(Homepage));