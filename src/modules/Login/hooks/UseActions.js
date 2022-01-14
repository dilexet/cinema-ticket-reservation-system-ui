import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as LoginActionCreators from '../store/action-creator/LoginActions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LoginActionCreators, dispatch);
}