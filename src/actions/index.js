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
            password,
            displayName
        }
    }
}

export const login = (username, password) => {
    return {
        type: LOGIN,
        user: {
            username, 
            password
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const like = (userId, messageId) => {
    return {
        type: LIKE,
        like: {
            userId,
            messageId
        }
    }
}

export const unlike = (userId, messageId) => {
    return {
        type: UNLIKE,
        like: {
            userId,
            messageId
        }
    }
}

export const postMessage = (text) => {
    return {
        type: POST_MESSAGE,
        text
    }
}

export const getAllMessage = () => {
    return {
        type: GET_ALL_MESSAGES
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