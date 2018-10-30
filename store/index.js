import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer, { initialData } from "../reducers";

function configureStore(initialState = initialData) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore;