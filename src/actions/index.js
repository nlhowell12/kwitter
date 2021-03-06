export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LIKE = 'LIKE';
export const UNLIKE = 'UNLIKE';
export const POST_MESSAGE = 'POST_MESSAGE';
export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';
export const GET_MESSAGE_BY_ID = 'GET_MESSAGE_BY_ID';
export const DEL_MESSAGE_BY_ID = 'DEL_MESSAGE_BY_ID';
export const GET_USER = 'GET_USER';
export const DEL_USER = 'DEL_USER';

export const register = (username, password, displayName) => {
    return {
        type: REGISTER,
        user: {
            username,
            displayName
        }
    }
}

export const login = (username, token, userId) => {
    return {
        type: LOGIN,
        user: {
            username, 
            token,
            userId
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const like = (like, messageId) => {
    return {
        type: LIKE,
        like,
        messageId
    }
}

export const unlike = (likeId, messageId) => {
    return {
        type: UNLIKE,
        like: {
            likeId,
            messageId
        }
    }
}

export const postMessage = (message) => {
    return {
        type: POST_MESSAGE,
        message: message.messages
    }
}

export const getAllMessages = (messages) => {
    return {
        type: GET_ALL_MESSAGES,
        messages
    }
}

export const getMessageByID = (id) => {
    return {
        type: GET_MESSAGE_BY_ID,
        id
    }
}

export const delMessageByID = (id) => {
    return {
        type: DEL_MESSAGE_BY_ID,
        id
    }
}

export const getUser = (id) => {
    return {
        type: GET_USER,
        id
    }
}

export const delUser = (id) => {
    return {
        type: DEL_USER,
        id
    }
}

