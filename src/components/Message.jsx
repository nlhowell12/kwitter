import React, { Component } from 'react';
import { connect } from 'react-redux';
import { like, unlike, delMessageByID } from '../actions';
import * as R from 'ramda';
import { withRouter } from 'react-router-dom'

class Message extends Component {
    state = {
        like: false,
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
        fetch(`https://kwitter-api.herokuapp.com/likes/${id}`, method)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    deleteMessage = () => {
        const { token, dispatch, messageId } = this.props;
        let method = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        fetch(`https://kwitter-api.herokuapp.com/messages/${messageId}`, method)
            .then(dispatch(delMessageByID(messageId)))
    }
    render () {
        const { text, likes, userId, loggedInUser } = this.props
        return (
            <div className='ui segment'>
                {userId === loggedInUser ? <button type='delete' className="ui right floated button" onClick={evt => this.deleteMessage()}>Delete</button> : null}
                <div className="ui right labeled button" onClick={evt => this.deleteLike()}>
                    <button className='ui red button' tabIndex="0"><i aria-hidden={true} className="heart icon"></i>Like</button>
                    <a className="ui left pointing basic label">{likes.length}</a>
                </div>
                <p className="content">
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
        loggedInUser: state.user.userId
    }
}
export default withRouter(connect(mapStateToProps)(Message))