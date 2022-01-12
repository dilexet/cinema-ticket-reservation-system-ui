import React, {useState} from 'react';
import Register from "../component/Register";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/UseActions";
import registerSchema from "../constants/RegisterSchema";

const RegisterContainer = () => {

    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const {RegisterAction} = useActions();

    const registerState = useSelector((state) => state.register);

    const handleSubmit = async (values) => {
        if (await registerSchema.isValid(values)) {
            await RegisterAction(values, rememberMe)
            setRedirect(true)
        }
    }

    return (
        <Register handleSubmitForm={handleSubmit} registerState={registerState}
                  redirect={redirect} rememberMe={rememberMe}
                  setRememberMe={setRememberMe}/>
    );
}

export default RegisterContainer;