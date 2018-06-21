import React, { Component } from 'react';
import Message from './Message.jsx'
import { connect } from 'react-redux';
import { getAllMessages } from '../actions'
import { withRouter } from 'react-router-dom'

class Userfeed extends Component {
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
    render() {
        const { messages, user } = this.props
        
        return (
            <div id='userFeed'>
                <div id='profileInfo'>
                    <a href="">{user.username}</a>
                </div>
                <div id='messageFeed'>
                <input type="text" id='newMessage' placeholder={"Start a new kwit here"}/>
                    {messages.map((message, id) => <Message key={id} text={message.text} username={message.username} messageId={message.id} userId={message.userId}></Message>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        messages: state.messages
    }
    
}

export default withRouter(connect(mapStateToProps)(Userfeed))