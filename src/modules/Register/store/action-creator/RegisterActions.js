import {registerAPI} from "./RegisterAPI";
import {register_loading, register_success, register_error} from "../reducers/RegisterReducer"


export const RegisterAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch(register_loading)

        await registerAPI().register(data)
            .then(response => {
                    if (rememberMe) {
                        localStorage.setItem("jwtToken", response.data?.jwtToken)
                        localStorage.setItem("refreshToken", response.data?.refreshToken)
                    } else {
                        sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                        sessionStorage.setItem("refreshToken", response.data?.refreshToken)
                    }
                    dispatch(register_success(response.data))
                }
            ).catch(error => {
                if (error.response) {
                    dispatch(register_error(error.response.data))
                }
            });
    }
}