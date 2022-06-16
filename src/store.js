import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { mapReducer } from "./reducers/MapsReducer";
import { PolyReducer } from "./reducers/PolysReducer";

const finalReducer = combineReducers({
    mapReducer: mapReducer,
    PolyReducer: PolyReducer
});

const initialState = {
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
