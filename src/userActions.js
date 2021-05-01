export default function setToken(newToken) {
    return {
        type: 'SET_TOKEN',
        payload: newToken
    }

    }
    export function setUsername(username) {
        return{
            type: 'SET_USERNAME',
            payload: username
        }
    }