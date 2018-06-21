import React, { Component } from 'react';
import Message from './Message.jsx'
import { connect } from 'react-redux';
import { getAllMessages } from '../actions'
import { withRouter } from 'react-router-dom'
import { postMessage } from '../actions'
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
        fetch('https://kwitter-api.herokuapp.com/messages', method)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(postMessage(data))
                this.setState({newMessage: ""})
            })
    }
    render() {
        const { messages, user } = this.props;
        const { newMessage } = this.state;
        return (
            <div id='userFeed'>
                <div id='profileInfo'>
                    <a href="">{user.username}</a>
                </div>
                <div id='messageFeed'>
                <input type="text" id='newMessage' placeholder={"Start a new kwit here"} value={newMessage} onChange={this.onChange('newMessage')} onKeyPress={evt => evt.key === "Enter" ? this.postNewMessage() : null}/>
                    {messages.map((message, id) => <Message key={id} text={message.text} username={message.username} messageId={message.id} userId={message.userId}></Message>)}
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