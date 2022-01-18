import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "../reducers/index";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})