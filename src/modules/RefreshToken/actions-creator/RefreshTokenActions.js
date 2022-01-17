import {refreshTokenAPI} from "./RefreshTokenAPI";
import {getJwtPayload, getLocalAccessToken} from "../../Shared/utils/TokenServices";

export const refreshTokenAsyncAction = async () => {
    const tokens = getLocalAccessToken();
    const payloadJWT = getJwtPayload();
    const data = {userId: payloadJWT.UserId, token: tokens?.refreshToken}

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
        return true;
    } catch (error) {
        if (error.response) {
            return false;
        }
    }
}