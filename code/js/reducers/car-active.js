export default function (state = {}, action) {
    switch (action.type) {
        case "CAR_SELECTED":
            return action.payload;
        case "SEND_REQUEST":
            return action.films;
        default:
            return state;
    }
}