import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Login from "../component/Login";
import loginSchema from "../constants/LoginSchema";
import {loginAsyncAction} from "../store/action-creator/LoginActions";

const LoginContainer = () => {

    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (values) => {
        if (await loginSchema.isValid(values)) {
            await dispatch(loginAsyncAction(values, rememberMe))
            setRedirect(true)
        }
    }

    return (
        <Login handleSubmitForm={handleSubmit} loginState={loginState}
               redirect={redirect} rememberMe={rememberMe}
               setRememberMe={setRememberMe}/>
    );
}

export default LoginContainer;