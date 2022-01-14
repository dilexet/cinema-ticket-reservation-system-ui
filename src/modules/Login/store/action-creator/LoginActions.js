import {loginAPI} from "./LoginAPI";
import {login_loading, login_success, login_error} from "../reducers/LoginReducer"

export const loginAsyncAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch(login_loading())

        await loginAPI().login(data)
            .then(response => {
                    localStorage.setItem("rememberMe", rememberMe)
                    if (Boolean(JSON.parse(rememberMe)) === true) {
                        localStorage.setItem("jwtToken", response.data?.jwtToken)
                        localStorage.setItem("refreshToken", response.data?.refreshToken)
                    } else {
                        sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                        sessionStorage.setItem("refreshToken", response.data?.refreshToken)
                    }
                    dispatch(login_success(response.data))
                }
            ).catch(error => {
                if (error.response) {
                    dispatch(login_error(error.response.data))
                }
            });
    }
}