import {
    authenticate_loading,
    authenticate_success,
    authenticate_error
} from "../../../Authenticate/store/reducers/AuthenticateReducer"
import {login_loading, login_success, login_error} from "../reducers/LoginReducer"
import {loginAPI} from "./LoginAPI";

export const loginAsyncAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch(login_loading())
        dispatch(authenticate_loading())

        try {
            const response = await loginAPI().login(data)
            localStorage.setItem("rememberMe", rememberMe)
            if (Boolean(JSON.parse(rememberMe)) === true) {
                localStorage.setItem("jwtToken", response.data?.jwtToken)
                localStorage.setItem("refreshToken", response.data?.refreshToken)
            } else {
                sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                sessionStorage.setItem("refreshToken", response.data?.refreshToken)
            }
            dispatch(login_success(response.data))
            dispatch(authenticate_success())
        } catch (error) {
            if (error.response) {
                dispatch(login_error(error.response.data))
                dispatch(authenticate_error())
            }
        }
    }
}