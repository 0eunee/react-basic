import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function configureStore(reducer, initialState = {}) {
    const enhancer = compose(
        applyMiddleware(thunk/* , middleware 추가*/)
    );

    return createStore(reducer, initialState, enhancer);
}