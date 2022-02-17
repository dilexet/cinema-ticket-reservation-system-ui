import {
    authenticate_loading,
    authenticate_success,
    authenticate_error
} from "../../../ErrorHandler/store/reducers/ErrorHandlerReducer"
import {removeTokens} from "../../../Shared/utils/TokenServices";
import {register_loading, register_success, register_error, clear_errors} from "../reducers/RegisterReducer"
import {registerAPI} from "./RegisterAPI";

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clear_errors())
    }
}

export const registerAsyncAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch(register_loading())
        dispatch(authenticate_loading())

        try {
            const response = await registerAPI().register(data)
            removeTokens()
            localStorage.setItem("rememberMe", rememberMe)
            if (Boolean(JSON.parse(rememberMe)) === true) {
                localStorage.setItem("jwtToken", response.data?.jwtToken)
                localStorage.setItem("refreshToken", response.data?.refreshToken)
            } else {
                sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                sessionStorage.setItem("refreshToken", response.data?.refreshToken)
            }
            dispatch(register_success(response.data))
            dispatch(authenticate_success())
        } catch (error) {
            if (error.response) {
                dispatch(register_error(error.response.data))
                dispatch(authenticate_error())
            }
        }
    }
}