import React, { Component } from 'react';
import { connect } from 'react-redux';
import { like, unlike } from '../actions';
import * as R from 'ramda';


class Message extends Component {
    state = {
        like: false
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
        this.setState = {like: !this.state.like}
        fetch('https://kwitter-api.herokuapp.com/likes', method)
            .then(response => response.json())
            .then(data => {
                dispatch(like(data, messageId))})
    }
    deleteLike = () => {
        const { token, dispatch, messageId, userId, messages } = this.props;
        let method = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        let messageLens = R.findIndex(R.propEq('id', messageId))(messages)
        let likeLens = R.findIndex(R.propEq('userId', userId))(messages[messageLens].likes)
        let likePath = R.lensPath([messageLens, 'likes', likeLens])
        let id = R.view(likePath, messages).id
        console.log(messageLens)
        console.log(likeLens)
        console.log(R.view(likePath, messages));
        console.log(id);
        fetch(`https://kwitter-api.herokuapp.com/likes/${id}`, method)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    render () {
        const { text, username } = this.props
        return (
            <div className='message'>
                <div id='messageUserInfo'>{username}</div>
                <button type='delete' className='deleteMessage'>X</button>
                <div>
                    <button className='likeButton' onClick ={evt => this.likeMessage()}>Like</button>
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
        token: state.user.token,
        messages: state.messages,
    }
}
export default connect(mapStateToProps)(Message)