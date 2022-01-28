import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Register from "../component/Register";
import registerSchema from "../constants/RegisterSchema";
import {registerAsyncAction} from "../store/action-creator/RegisterActions";

const RegisterContainer = () => {

    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch();

    const registerState = useSelector((state) => state.register);

    const handleSubmit = async (values) => {
        if (await registerSchema.isValid(values)) {
            await dispatch(await registerAsyncAction(values, rememberMe))
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