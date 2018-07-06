export default function (state = [], action) {
    switch (action.type) {
        case "SEND_REQUEST":
            return [
                ...state,
                action.films
            ];
        default:
            return state;
    }
}