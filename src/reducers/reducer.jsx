import { createStore, applyMiddleware } from 'redux';
import {REGISTER, LOGIN, LOGOUT, LIKE, UNLIKE, POST_MESSAGE, GET_ALL_MESSAGES, GET_MESSAGE_BY_ID, DEL_MESSAGE_BY_ID, GET_USER, DEL_USER} from '../actions';
import * as R from 'ramda';
import thunk from 'redux-thunk'

const initialState = {
    user: {},
    messages: []
};

const kwitterReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case REGISTER:
            return {}
        case LOGIN:
            return {}
        case LOGOUT:
            return {}
        case LIKE:
            return {}
        case UNLIKE: 
            return {}
        case POST_MESSAGE:
            return {}
        case GET_ALL_MESSAGES:
            return {}
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

const store = createStore(kwitterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
export default store