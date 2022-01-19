import {combineReducers} from "@reduxjs/toolkit"
import loginSlice from "../../Login/store/reducers/LoginReducer";
import registerSlice from "../../Register/store/reducers/RegisterReducer";

export const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
})