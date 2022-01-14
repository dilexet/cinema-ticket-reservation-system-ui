import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as RegisterActionCreators from '../store/action-creator/RegisterActions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(RegisterActionCreators, dispatch);
}