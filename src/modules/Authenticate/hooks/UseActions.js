import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as AuthenticateActionCreators from '../store/action/AuthenticateAction'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AuthenticateActionCreators, dispatch);
}