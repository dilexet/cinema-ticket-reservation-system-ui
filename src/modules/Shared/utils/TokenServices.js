import jwt_decode from "jwt-decode";
import {refreshTokenAsyncAction} from "../../RefreshToken/actions-creator/RefreshTokenActions";
import {AdminRole, ManagerRole, UserRole} from "../constants/RoleNames";

export const isTokenExpired = () => {

    const decoded_token = getJwtPayload();

    if (decoded_token == null) {
        return null;
    }

    const now = Date.now() / 1000 - 2;

    return decoded_token.exp <= now;
}

export const isAuthorize = async () => {
    const result = isTokenExpired();

    if (result === true) {
        return await refreshTokenAsyncAction();
    } else {
        return result === false;
    }
}

export const getJwtPayload = () => {
    const rememberMe = localStorage.getItem("rememberMe")
    if (Boolean(JSON.parse(rememberMe)) === true) {
        const jwt = localStorage.getItem("jwtToken")

        if (jwt == null) {
            return null
        }
        return jwt_decode(jwt);
    } else {
        const sessionJwt = sessionStorage.getItem("jwtToken")
        if (sessionJwt == null) {
            return null
        }
        return jwt_decode(sessionJwt);
    }
}

export const getLocalAccessToken = () => {
    const rememberMe = localStorage.getItem("rememberMe")
    if (Boolean(JSON.parse(rememberMe)) === true) {
        const jwt = localStorage.getItem("jwtToken")
        const refreshToken = localStorage.getItem("refreshToken")
        if (jwt != null && refreshToken != null) {
            return {jwt: jwt, refreshToken: refreshToken}
        }
    } else {
        const sessionJwt = sessionStorage.getItem("jwtToken")
        const sessionRefreshToken = sessionStorage.getItem("refreshToken")
        if (sessionJwt != null && sessionRefreshToken != null) {
            return {jwt: sessionJwt, refreshToken: sessionRefreshToken}
        }
    }
    return null;
}

export const getRole = () => {
    const payload = getJwtPayload();
    if (payload === null) {
        return null;
    }
    return payload.Role;
}

export const isAdmin = () => {
    const role = getRole();
    if (role === null) {
        return false;
    }
    return role === AdminRole
}

export const isManager = () => {
    const role = getRole();
    if (role === null) {
        return false;
    }
    return role === ManagerRole
}

export const isUser = () => {
    const role = getRole();
    if (role === null) {
        return false;
    }
    return role === UserRole
}

export const getName = () => {
    const payload = getJwtPayload();
    if (payload === null) {
        return 'Unknown';
    }
    const name = payload.Name;
    if (!name) {
        return 'Unknown'
    }
    return name;
}

export const removeTokens = () => {
    localStorage.removeItem("rememberMe")
    sessionStorage.removeItem("jwtToken")
    sessionStorage.removeItem("refreshToken")
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("refreshToken")
}