import React, { Component } from 'react';
import Message from './Message.jsx'
import { connect } from 'react-redux';
import { getAllMessages } from '../actions'
import { withRouter } from 'react-router-dom'
import { postMessage, logout } from '../actions'

class Userfeed extends Component {
    state = {
        newMessage: ""
    }

    fetchMessages = () => {
        const { dispatch } = this.props;

        fetch('https://kwitter-api.herokuapp.com/messages')
        .then(response => response.json())
        .then(data => {
            dispatch(getAllMessages(data.messages))})
    }
    componentDidMount() {
        this.fetchMessages()
    }
    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
      }
    postNewMessage = () => {
        const { newMessage } = this.state
        const { token, dispatch } = this.props
        let method = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify ({
                text: newMessage
            }),
            mode: 'cors'
        }
        if(newMessage !== ""){
        fetch('https://kwitter-api.herokuapp.com/messages', method)
            .then(response => response.json())
            .then(data => {
                dispatch(postMessage(data))
                this.setState({newMessage: ""})
            })} else {
                alert("Please enter a new kwit before submitting.")
            }

    }
    logMeOut = () => {
        const { history, dispatch } = this.props
        dispatch(logout())
        history.push('/')
    }
    render() {
        const { messages, user } = this.props;
        const { newMessage } = this.state;
        return (
            <div>
                <a className="ui card">
                    <div className="content">
                    <div>{user.username || "User"}</div>
                    <div className="meta">{user.title || "Kwitaholic"}</div>
                    <div className="description">{user.bio || "I see a little sillouetto of a man..."}</div>
                    <button className="ui button" floated="right" onClick={evt => this.logMeOut()}>LogOut</button>
                    </div>
                </a>
            <div id='ui feed'>
                <div className="ui relaxed right floated list">
                <div className="ui focus fluid input">
                    <input id="newMessage" type="text" placeholder="Start a new kwit here"  value={newMessage} onChange={this.onChange('newMessage')} onKeyPress={evt => evt.key === "Enter" ? this.postNewMessage() : null}/>
                </div>
                    {messages.map((message, id) => <Message key={id} text={message.text} username={message.username} messageId={message.id} userId={message.userId} likes={message.likes}></Message>)}
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        messages: state.messages,
        token: state.user.token
    }
    
}

export default withRouter(connect(mapStateToProps)(Userfeed))