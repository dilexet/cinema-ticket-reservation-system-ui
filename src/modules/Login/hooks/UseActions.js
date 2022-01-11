import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as LoginActionCreators from '../store/action-creator/LoginActions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LoginActionCreators, dispatch);
}