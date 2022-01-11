import {combineReducers} from "redux";
import {LoginReducer} from "../../Login/store/reducers/LoginReducer";
import {RegisterReducer} from "../../Register/store/reducers/RegisterReducer";


export const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer
})