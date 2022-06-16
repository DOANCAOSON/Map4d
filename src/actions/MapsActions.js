
export const mapActions = (map) => async dispatch => {
    dispatch({ type: "MAP_REQUEST" });
    try {
        // console.log(map)
        // console.log(map)
        dispatch({
            type: "MAP_SUCCESS", payload: map
        });

    } catch (error) {
        dispatch({ type: "MAP_FAILED", payload: error });

    }
};
