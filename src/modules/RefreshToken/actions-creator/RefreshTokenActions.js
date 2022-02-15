import {refreshTokenAPI} from "./RefreshTokenAPI";
import {getJwtPayload, getLocalAccessToken} from "../../Shared/utils/TokenServices";
import {store} from "../../Shared/store";
import {authenticateAsyncAction} from "../../ErrorHandler/store/action/ErrorHandlerActions";


export const refreshTokenAsyncAction = async () => {
    const tokens = getLocalAccessToken();
    if (tokens?.jwt === null || tokens?.refreshToken == null) {
        await store.dispatch(await authenticateAsyncAction(false))
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
        await store.dispatch(await authenticateAsyncAction(true))
        return true;
    } catch (error) {
        if (error.response) {
            await store.dispatch(await authenticateAsyncAction(false))
            return false;
        }
    }
}