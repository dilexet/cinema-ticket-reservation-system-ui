import {combineReducers} from "@reduxjs/toolkit"
import loginSlice from "../../Login/store/reducers/LoginReducer";
import registerSlice from "../../Register/store/reducers/RegisterReducer";
import userManagementSlice from "../../UserManagement/store/reducers/UserManagementReducer";


export const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    userManagement: userManagementSlice
})