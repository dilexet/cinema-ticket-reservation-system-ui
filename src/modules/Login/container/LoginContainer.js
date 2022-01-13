import React, {useState} from 'react';
import Login from "../component/Login";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/UseActions";
import loginSchema from "../constants/LoginSchema";

const LoginContainer = () => {

    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const {LoginAction} = useActions();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (values) => {
        if (await loginSchema.isValid(values)) {
            await LoginAction(values, rememberMe)
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