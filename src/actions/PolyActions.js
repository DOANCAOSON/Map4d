
export const polyActions = (poly) => async dispatch => {
    dispatch({ type: "POLY_REQUEST" });
    try {
        dispatch({
            type: "POLY_SUCCESS", payload: poly
        });

    } catch (error) {
        dispatch({ type: "POLY_FAILED", payload: error });

    }
};
