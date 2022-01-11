import React, {useState} from 'react';
import Register from "../component/Register";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/UseActions";
import {InitialFieldValues} from "../constants/InitialFieldValues";
import emailRegex from "../constants/EmailRegex";

const RegisterContainer = () => {

    const [values, setValues] = useState(InitialFieldValues)
    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false);

    const {RegisterAction} = useActions();

    const registerState = useSelector((state) => state.register);

    const validate = (fieldValues = values) => {
        const tempErrors = {...errors}

        if ('Email' in fieldValues) {
            if (!fieldValues.Email) {
                tempErrors.Email = "This field is required";
            } else if (fieldValues.Email.length < 5 || fieldValues.Email.length > 20) {
                tempErrors.Email = "Email should be between 5 and 20 characters";
            } else if (!fieldValues.Email.match(emailRegex)) {
                tempErrors.Email = "The Email field is not a valid";
            } else {
                tempErrors.Email = ""
            }
        }

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

        if ('ConfirmPassword' in fieldValues) {
            if (!fieldValues.ConfirmPassword) {
                tempErrors.ConfirmPassword = "This field is required";
            } else if (fieldValues.ConfirmPassword !== fieldValues.Password) {
                tempErrors.ConfirmPassword = "The password and confirm password do not match";
            } else {
                tempErrors.ConfirmPassword = ""
            }
        }
        setErrors({...tempErrors})

        return Object.values(tempErrors).every(x => x === "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (validate(values)) {
            await RegisterAction(values)
            setRedirect(true)
        }
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
        <Register handleSubmit={handleSubmit} handleInputChange={handleInputChange} values={values}
                  registerState={registerState} redirect={redirect} errors={errors}/>
    );
}

export default RegisterContainer;