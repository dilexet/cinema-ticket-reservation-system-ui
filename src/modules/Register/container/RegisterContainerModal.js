import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import registerSchema from "../constants/RegisterSchema";
import {clearErrors, registerAsyncAction} from "../store/action-creator/RegisterActions";
import {removeTokens} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import Register from "../component/Register";
import Modal from "../../App/component/Modal";

const RegisterContainerModal = ({
                                    confirmOrder, openRegisterModal,
                                    setOpenLoginModal, setOpenRegisterModal
                                }) => {
    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch();

    const registerState = useSelector((state) => state.register);

    const handleSubmit = async (values) => {
        if (await registerSchema.isValid(values)) {
            await dispatch(await registerAsyncAction(values, rememberMe))
            setRedirect(true)
        }
    }

    const handleToLoginLinkClick = () => {
        setOpenRegisterModal(false)
        setOpenLoginModal(true)
    }

    const handleCloseModal = () => {
        setOpenRegisterModal(false)
    }

    React.useEffect(() => {
        if (!registerState?.loading && registerState?.data?.success && redirect) {
            confirmOrder()
        }
    }, [confirmOrder, redirect, registerState?.data?.success, registerState?.loading])

    React.useEffect(() => {
        const clearLoginErrors = async () => {
            removeTokens()
            setIsLoading(false)
            await dispatch(clearErrors())
        }
        if (isLoading === true && registerState.error) {
            clearLoginErrors();
        } else {
            setIsLoading(false)
        }
    }, [dispatch, isLoading, registerState.error])

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <Modal openModal={openRegisterModal} handleCloseModal={handleCloseModal} component={Register}
                   handleSubmitForm={handleSubmit} registerState={registerState}
                   rememberMe={rememberMe}
                   setRememberMe={setRememberMe}
                   handleToLoginLinkClick={handleToLoginLinkClick}
            />
        );
    }
}

export default RegisterContainerModal;