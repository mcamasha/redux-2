export const click = (films) => {
    return {
        type: "SEND_REQUEST",
        films: films
    };
};