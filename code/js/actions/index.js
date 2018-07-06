export const select = (car) => {
    return {
        type: "CAR_SELECTED",
        payload: car
    };
};