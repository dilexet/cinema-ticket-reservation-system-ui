import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as RegisterActionCreators from '../store/action-creator/RegisterActions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(RegisterActionCreators, dispatch);
}