import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Register from "../component/Register";
import registerSchema from "../constants/RegisterSchema";
import {clearErrors, registerAsyncAction} from "../store/action-creator/RegisterActions";
import Loading from "../../Loading/component/Loading";

const RegisterContainer = () => {
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

    React.useEffect(() => {
        const clearLoginErrors = async () => {
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
            <Register handleSubmitForm={handleSubmit} registerState={registerState}
                      redirect={redirect} rememberMe={rememberMe}
                      setRememberMe={setRememberMe}/>
        );
    }
}

export default RegisterContainer;