import React, {useState} from 'react';
import Login from "../component/Login";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/UseActions";
import {InitialFieldValues} from "../constants/InitialFieldValues";

const LoginContainer = () => {

    const [values, setValues] = useState(InitialFieldValues)
    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false);

    const {LoginAction} = useActions();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (validate(values)) {
            await LoginAction(values)
            setRedirect(true)
        }
    }

    const validate = (fieldValues = values) => {
        let tempErrors = {...errors}
        if ('Name' in fieldValues) {
            if (!fieldValues.Name) {
                tempErrors.Name = "This field is required";
            } else if (fieldValues.Name.length < 5 || fieldValues.Name.length > 16) {
                tempErrors.Name = "Username should be between 5 and 16 characters";
            } else {
                tempErrors.Name = ""
            }
        }
        if ('Password' in fieldValues) {
            if (!fieldValues.Password) {
                tempErrors.Password = "This field is required";
            } else if (fieldValues.Password.length < 4 || fieldValues.Password.length > 25) {
                tempErrors.Password = "Password should be between 4 and 25 characters";
            } else {
                tempErrors.Password = ""
            }
        }
        setErrors({...tempErrors})

        return Object.values(tempErrors).every(x => x === "");
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        const fieldValue = {[name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    return (
        <Login handleSubmit={handleSubmit} handleInputChange={handleInputChange} values={values}
               loginState={loginState} redirect={redirect} errors={errors}/>
    );
}

export default LoginContainer;