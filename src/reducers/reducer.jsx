import { createStore } from 'redux';
import {REGISTER, LOGIN, LOGOUT, LIKE, UNLIKE, POST_MESSAGE, GET_ALL_MESSAGES, GET_MESSAGE_BY_ID, DEL_MESSAGE_BY_ID, GET_USER, DEL_USER} from '../actions';
import * as R from 'ramda';

const initialState = {
    user: {
        username: "",
        token: "",
        userId: 1,
        displayName: ""
    },
    messages: []
};

const kwitterReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER:
            return state;
        case LOGIN:
            const userLens = R.lensProp('user');
            return R.set(userLens, {
                username: action.user.username,
                token: action.user.token
            }, state)
        case LOGOUT:
            return {}
        case LIKE:
        // const messageLens = R.findIndex(R.propEq('id', action.messageId), state.messages)
        let newState = {
            ...state, 
            messages: 
                state.messages.map(message => action.messageId === message.id ? {...message, likes: [...message.likes, action.like.like]}: message)   
        }
            return newState
        case UNLIKE: 
            return {}
        case POST_MESSAGE:
            return {}
        case GET_ALL_MESSAGES:
            return R.set(R.lensPath(['messages']), action.messages, state)
        case GET_MESSAGE_BY_ID:
            return {}
        case DEL_MESSAGE_BY_ID:
            return {}
        case GET_USER:
            return {}
        case DEL_USER:
            return {}
        default:
            return state;
    }
}

const store = createStore(kwitterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store