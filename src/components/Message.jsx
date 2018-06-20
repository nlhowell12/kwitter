import React, { Component } from 'react';

class Message extends Component {
    render () {
        const { text, username } = this.props
        return (
            <div className='message'>
                <div id='messageUserInfo'>{username}</div>
                <button type='delete' className='deleteMessage'>X</button>
                <div>
                    <button className='likeButton'>Like</button>
                    <div className="likesDisplay">Nick liked this</div>
                </div>
                <p className="messageText">
                {text}
                </p>
            </div>
        )
    }
}

export default Message