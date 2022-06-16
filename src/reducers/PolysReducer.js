export const PolyReducer = (state = { poly: [] }, action) => {
    switch (action.type) {

        case 'POLY_REQUEST': return {
            loading: true,
            ...state
        }
        case 'POLY_SUCCESS': return {
            loading: false,
            poly: action.payload
        }
        case 'POLY_FAILED': return {
            error: action.payload,
            loading: false,

        }
        default: return state
    }
}
