import {ACTION_TYPES} from "../../constants/ActionTypes";
import {LoginAPI} from "./LoginAPI";

export const LoginAction = (data) => {
    return async (dispatch) => {
        dispatch({type: ACTION_TYPES.LOGIN})

        await LoginAPI().login(data)
            .then(response => {
                    localStorage.setItem("jwtToken", response.data?.jwtToken)
                    localStorage.setItem("refreshToken", response.data?.refreshToken)
                    dispatch({
                        type: ACTION_TYPES.LOGIN_SUCCESS,
                        payload: response.data
                    })
                }
            ).catch(error => {
                if (error.response) {
                    dispatch({
                        type: ACTION_TYPES.LOGIN_ERROR,
                        payload: error.response.data
                    })
                }
            });
    }
}