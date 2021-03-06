export const mapReducer = (state = { map: [] }, action) => {
    switch (action.type) {

        case 'MAP_REQUEST': return {
            loading: true,
            ...state
        }
        case 'MAP_SUCCESS': return {
            loading: false,
            map: action.payload
        }
        case 'MAP_FAILED': return {
            error: action.payload,
            loading: false,

        }
        default: return state
    }
}
