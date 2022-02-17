import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "../../Loading/component/Loading";
import Register from "../component/Register";
import registerSchema from "../constants/RegisterSchema";
import {clearErrors, registerAsyncAction} from "../store/action-creator/RegisterActions";

const RegisterContainer = () => {
    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerState = useSelector((state) => state.register);

    const handleSubmit = async (values) => {
        if (await registerSchema.isValid(values)) {
            await dispatch(await registerAsyncAction(values, rememberMe))
            setRedirect(true)
        }
    }

    const handleToLoginLinkClick = () => {
        navigate('/login')
    }

    React.useEffect(() => {
        if (!registerState?.loading && registerState?.data?.success && redirect) {
            navigate('/')
        }
    }, [navigate, redirect, registerState?.data?.success, registerState?.loading])

    React.useEffect(() => {
        const clearRegisterErrors = async () => {
            setIsLoading(false)
            await dispatch(clearErrors())
        }
        if (isLoading === true && registerState.error) {
            clearRegisterErrors();
        } else {
            setIsLoading(false)
        }
    }, [dispatch, isLoading, registerState.error])

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <Register handleSubmitForm={handleSubmit} registerState={registerState}
                      rememberMe={rememberMe}
                      setRememberMe={setRememberMe}
                      handleToLoginLinkClick={handleToLoginLinkClick}/>
        );
    }
}

export default RegisterContainer;