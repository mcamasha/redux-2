export const showFilms = (films) => {
    return {
        type: "SEND_REQUEST",
        payload: films
    };
};