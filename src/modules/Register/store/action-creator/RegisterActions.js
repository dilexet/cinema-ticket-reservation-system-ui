import {registerAPI} from "./RegisterAPI";
import {register_loading, register_success, register_error} from "../reducers/RegisterReducer"


export const registerAsyncAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch(register_loading)

        try {
            const response = await registerAPI().register(data)
            localStorage.setItem("rememberMe", rememberMe)
            if (Boolean(JSON.parse(rememberMe)) === true) {
                localStorage.setItem("jwtToken", response.data?.jwtToken)
                localStorage.setItem("refreshToken", response.data?.refreshToken)
            } else {
                sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                sessionStorage.setItem("refreshToken", response.data?.refreshToken)
            }
            dispatch(register_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(register_error(error.response.data))
            }
        }
    }
}