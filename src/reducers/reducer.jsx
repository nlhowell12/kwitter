import { createStore } from 'redux';
import {REGISTER, LOGIN, LOGOUT, LIKE, UNLIKE, POST_MESSAGE, GET_ALL_MESSAGES, GET_MESSAGE_BY_ID, DEL_MESSAGE_BY_ID, GET_USER, DEL_USER} from '../actions';
import * as R from 'ramda';

const initialState = {
    user: {
        username: "",
        token: "",
        userId: 1
    },
    messages: [
        {
            id: 3,
            text: "This is a test",
            username: "Nick",
            userId: 2,
            createdAt: "2018-06-18T17:51:00.280Z",
            updatedAt: "2018-06-18T17:51:00.280Z",
            likes: [
                {
                    "id": 3,
                    "userId": 2,
                    "messageId": 3,
                    "createdAt": "2018-06-18T17:53:23.067Z",
                    "updatedAt": "2018-06-18T17:53:23.067Z"
                },
                {
                    "id": 6,
                    "userId": 2,
                    "messageId": 3,
                    "createdAt": "2018-06-19T14:19:25.104Z",
                    "updatedAt": "2018-06-19T14:19:25.104Z"
                }
            ]
    },
        {
            text: "This is  a test2",
            username: 'Ben'
        }
    ]
};

const kwitterReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER:
            return {}
        case LOGIN:
            const userLens = R.lensProp('user');
            return R.set(userLens, {
                username: action.user.username,
                token: action.user.token
            }, state)
        case LOGOUT:
            return {}
        case LIKE:
        const messageLens = R.find(R.propEq('id', action.like.messageId))
        const likeArrayLens = R.lensPath([messageLens, 'likes'])
            return R.append(action.like, likeArrayLens)
        case UNLIKE: 
            return {}
        case POST_MESSAGE:
            return {}
        case GET_ALL_MESSAGES:
            return R.set('messages',  )
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