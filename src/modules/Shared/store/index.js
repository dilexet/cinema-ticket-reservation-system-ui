import {logger} from "redux-logger/src";
import {rootReducer} from "../reducers/index";
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})