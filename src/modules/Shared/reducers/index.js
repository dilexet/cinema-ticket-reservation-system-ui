import {combineReducers} from "redux";
import {loginReducer} from "../../Login/store/reducers/loginReducer";


export const reducers = combineReducers({
    login: loginReducer

})