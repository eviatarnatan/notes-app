export default function noteReducer(state = {
    id: null,
    title: null,
    body: null,
    priority: null,
    color: null,
    readFlag: null,
    icon: null
}, action) {
    switch(action.type) {

        case "SET_ID":
            return {
                ...state,
                id: action.payload
            }
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
        case "SET_READ_FLAG": 
            return {
            ...state,
            readFlag: action.payload
            }
        case "SET_ICON":
            return {
            ...state,
            icon: action.payload
            }
        default:
            return state;
    }

    
}