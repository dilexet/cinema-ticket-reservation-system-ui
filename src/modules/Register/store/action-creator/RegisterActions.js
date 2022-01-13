import {ACTION_TYPES} from "../../constants/ActionTypes";
import {RegisterAPI} from "./RegisterAPI";

export const RegisterAction = (data, rememberMe) => {
    return async (dispatch) => {
        dispatch({type: ACTION_TYPES.REGISTER})

        await RegisterAPI().register(data)
            .then(response => {
                    if (rememberMe) {
                        localStorage.setItem("jwtToken", response.data?.jwtToken)
                        localStorage.setItem("refreshToken", response.data?.refreshToken)
                    } else {
                        sessionStorage.setItem("jwtToken", response.data?.jwtToken)
                        sessionStorage.setItem("refreshToken", response.data?.refreshToken)
                    }
                    dispatch({
                        type: ACTION_TYPES.REGISTER_SUCCESS, payload: response.data
                    })
                }
            ).catch(error => {
                if (error.response) {
                    dispatch({
                        type: ACTION_TYPES.REGISTER_ERROR,
                        payload: error.response.data
                    })
                }
            });
    }
}