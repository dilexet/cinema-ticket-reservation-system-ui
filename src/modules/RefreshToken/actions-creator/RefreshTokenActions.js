import {refreshTokenAPI} from "./RefreshTokenAPI";
import {getJwtPayload, getLocalAccessToken} from "../../Shared/utils/TokenServices";
import {store} from "../../Shared/store";
import {authenticate_loading, authenticate_success, authenticate_error} from "../../Authenticate/store/reducers/AuthenticateReducer"


export const refreshTokenAsyncAction = async () => {
    store.dispatch(authenticate_loading())
    const tokens = getLocalAccessToken();
    if (tokens?.jwt === null || tokens?.refreshToken == null) {
        store.dispatch(authenticate_error())
        return false;
    }
    const payloadJWT = getJwtPayload();
    const data = {userId: payloadJWT?.UserId, token: tokens?.refreshToken}

    try {
        const response = await refreshTokenAPI().refresh(data);
        const rememberMe = localStorage.getItem("rememberMe")
        if (Boolean(JSON.parse(rememberMe)) === true) {
            localStorage.setItem("jwtToken", response.data?.jwtToken)
            localStorage.setItem("refreshToken", response.data?.refreshToken)
        } else {
            sessionStorage.setItem("jwtToken", response.data?.jwtToken)
            sessionStorage.setItem("refreshToken", response.data?.refreshToken)
        }
        store.dispatch(authenticate_success())
        return true;
    } catch (error) {
        if (error.response) {
            store.dispatch(authenticate_error())
            return false;
        }
    }
}