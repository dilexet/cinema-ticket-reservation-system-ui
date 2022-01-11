import {ACTION_TYPES} from "../../constants/ActionTypes";
import {RegisterAPI} from "./RegisterAPI";

export const RegisterAction = (data) => {
    return async (dispatch) => {
        dispatch({type: ACTION_TYPES.REGISTER})

        await RegisterAPI().register(data)
            .then(response => {
                    localStorage.setItem("jwtToken", response.data?.jwtToken)
                    localStorage.setItem("refreshToken", response.data?.refreshToken)
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