import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {reducers} from "../reducers/index";

export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger))
)