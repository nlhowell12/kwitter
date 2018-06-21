import React, { Component } from 'react';
import { connect } from 'react-redux';
import { like } from '../actions'

class Message extends Component {
    state = {
        like: 0
    }
    likeMessage = () => {
        const { token, dispatch, messageId, userId } = this.props;
        let method = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                messageId
            }),
            mode: 'cors' 
        }
        fetch('https://kwitter-api.herokuapp.com/likes', method)
            .then(response => response.json())
            .then(data => {
                dispatch(like(data, messageId))})
    }
    render () {
        const { text, username } = this.props
        return (
            <div className='message'>
                <div id='messageUserInfo'>{username}</div>
                <button type='delete' className='deleteMessage'>X</button>
                <div>
                    <button className='likeButton' onClick ={evt => like === true ? this.unlikeMessage() : this.likeMessage()}>Like</button>
                    <div className="likesDisplay"></div>
                </div>
                <p className="messageText">
                {text}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
}
export default connect(mapStateToProps)(Message)