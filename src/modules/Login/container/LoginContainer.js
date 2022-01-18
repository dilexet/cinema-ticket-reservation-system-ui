import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Login from "../component/Login";
import {useActions} from "../hooks/UseActions";
import loginSchema from "../constants/LoginSchema";

const LoginContainer = () => {

    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const {loginAsyncAction} = useActions();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (values) => {
        if (await loginSchema.isValid(values)) {
            await loginAsyncAction(values, rememberMe)
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