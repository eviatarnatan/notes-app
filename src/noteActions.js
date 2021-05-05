export default function setTitle(title) {
    return {
        type: "SET_TITLE",
        payload: title
    }
}
export function setBody(body) {
    return {
        type: "SET_BODY",
        payload: body
    }
}
export function setPriority(priority) {
    return {
        type: "SET_PRIORITY",
        payload: priority
    }
}
export function setColor(color) {
    return {
        type: "SET_COLOR",
        payload: color
    }
}
export function setReadFlag(readFlag) {
    return {
        type: "SET_READ_FLAG",
        payload: readFlag
    }
}
export function setId(id) {
    return {
        type: "SET_ID",
        payload: id
    }
}
export function setIcon(icon) {
    return {
        type: "SET_ICON",
        payload: icon
    }
}