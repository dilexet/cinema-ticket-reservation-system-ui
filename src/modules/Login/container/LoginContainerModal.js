import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import loginSchema from "../constants/LoginSchema";
import {clearErrors, loginAsyncAction} from "../store/action-creator/LoginActions";
import Loading from "../../Loading/component/Loading";
import Login from "../component/Login";
import Modal from "../../App/component/Modal";

const LoginContainerModal = ({
                                 confirmOrder,
                                 openLoginModal,
                                 setOpenLoginModal,
                                 setOpenRegisterModal
                             }) => {
    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch();

    const loginState = useSelector((state) => state.login);

    const handleSubmit = async (values) => {
        if (await loginSchema.isValid(values)) {
            await dispatch(loginAsyncAction(values, rememberMe))
            setRedirect(true)
        }
    }

    const handleToRegisterLinkClick = () => {
        setOpenLoginModal(false)
        setOpenRegisterModal(true)
    }

    const handleCloseModal = () => {
        setOpenLoginModal(false)
    }

    React.useEffect(() => {
        if (!loginState?.loading && loginState?.data?.success && redirect) {
            confirmOrder()
        }
    }, [confirmOrder, loginState?.data?.success, loginState?.loading, redirect])

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
            <Modal openModal={openLoginModal} handleCloseModal={handleCloseModal} component={Login}
                   handleSubmitForm={handleSubmit} loginState={loginState}
                   rememberMe={rememberMe}
                   setRememberMe={setRememberMe}
                   handleToRegisterLinkClick={handleToRegisterLinkClick}
            />
        );
    }
}

export default LoginContainerModal;