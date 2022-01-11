import React, {useState} from 'react';
import Login from "../component/Login";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/UseActions";
import {InitialFieldValues} from "../constants/InitialFieldValues";

const LoginContainer = () => {

    const [values, setValues] = useState(InitialFieldValues)
    const [redirect, setRedirect] = useState(false);

    const {LoginAction} = useActions();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (event) => {
        event.preventDefault()
        await LoginAction(values)
        setRedirect(true)
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        const fieldValue = {[name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
    }

    return (
        <Login handleSubmit={handleSubmit} handleInputChange={handleInputChange} values={values}
               loginState={loginState} redirect={redirect}/>
    );
}

export default LoginContainer;