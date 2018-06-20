import React, { Component } from 'react';
import Message from './Message.jsx'
import { connect } from 'react-redux';

class Userfeed extends Component {
    render() {
        const { messages } = this.props
        console.log(messages)
        return (
            <div id='userFeed'>
                <div id='profileInfo'></div>
                <div id='messageFeed'>
                <input type="text" id='newMessage' placeholder={"Start a new kwit here"}/>
                    {messages.map((message, id) => <Message key={id} text={message.text} username={message.username}></Message>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
    
}

export default connect(mapStateToProps)(Userfeed)