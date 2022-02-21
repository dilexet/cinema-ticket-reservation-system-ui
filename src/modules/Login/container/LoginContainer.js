import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Login from "../component/Login";
import loginSchema from "../constants/LoginSchema";
import {clearErrors, loginAsyncAction} from "../store/action-creator/LoginActions";
import Loading from "../../Loading/component/Loading";

const LoginContainer = () => {
    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (values) => {
        if (await loginSchema.isValid(values)) {
            await dispatch(loginAsyncAction(values, rememberMe))
            setRedirect(true)
        }
    }

    const handleToRegisterLinkClick = () => {
        navigate('/register')
    }

    React.useEffect(() => {
        if (!loginState?.loading && loginState?.data?.success && redirect) {
            navigate('/')
        }
    }, [loginState?.data?.success, loginState?.loading, navigate, redirect])

    React.useEffect(() => {
        const clearLoginErrors = async () => {
            setIsLoading(false)
            await dispatch(clearErrors())
        }
        if (isLoading === true && loginState.error) {
            clearLoginErrors();
        } else {
            setIsLoading(false)
        }
    }, [dispatch, isLoading, loginState.error])

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <Login handleSubmitForm={handleSubmit} loginState={loginState}
                   rememberMe={rememberMe}
                   setRememberMe={setRememberMe}
                   handleToRegisterLinkClick={handleToRegisterLinkClick}/>
        );
    }
}

export default LoginContainer;