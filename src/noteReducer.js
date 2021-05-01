export default function noteReducer(state = {
    title: null,
    body: null,
    priority: null,
    color: null,
    isRead: null
}, action) {
    switch(action.type) {
        case "SET_TITLE": 
            return {
            ...state,
            title: action.payload
            }
        case "SET_BODY": 
            return {
            ...state,
            body: action.payload
            }
        case "SET_PRIORITY": 
            return {
            ...state,
            priority: action.payload
            }
        case "SET_COLOR": 
            return {
            ...state,
            color: action.payload
            }
        case "SET_IS_READ": 
            return {
            ...state,
            isRead: action.payload
            }
        default:
            return state;
    }

    
}