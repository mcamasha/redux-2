export default function (state = {}, action) {
    switch (action.type) {
        case "SEND_REQUEST":
            return action.films;
        default:
            return state;
    }
}