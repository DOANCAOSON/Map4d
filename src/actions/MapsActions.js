import axios from "axios";
export const cartItemsActions = (dataCart) => async dispatch => {
    dispatch({ type: "CREATE_CARTS_ITEM_REQUEST" });
    try {
        const response = await axios.post("/carts/post", dataCart);
        console.log(response)
        dispatch({ type: "CREATE_CARTS_ITEM_SUCCESS", payload: response.data });
        // window.location.href = '/'

    } catch (error) {
        dispatch({ type: "CREATE_CARTS_ITEM_FAILED", payload: error });

    }
};
