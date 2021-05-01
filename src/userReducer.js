export default function userReducer(state = {
    username: null,
    token: null
    }, action) {

        switch(action.type) {
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.payload
                }
            case 'SET_USERNAME':
                return {
                    ...state,
                    username: action.payload
                }
            default: 
                return state;
        }


}