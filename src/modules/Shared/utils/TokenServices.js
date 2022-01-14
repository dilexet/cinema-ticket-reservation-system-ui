import jwt_decode from "jwt-decode";

export const tokenIsExpired = () => {
    const rememberMe = localStorage.getItem("rememberMe")
    if (Boolean(JSON.parse(rememberMe)) === true) {
        const jwt = localStorage.getItem("jwtToken")
        if (jwt == null) {
            return true
        }
        const {exp} = jwt_decode(jwt)
        const now = Date.now() / 1000 - 2
        return exp <= now;
    } else {
        const sessionJwt = sessionStorage.getItem("jwtToken")
        if (sessionJwt == null) {
            return true
        }
        const {exp} = jwt_decode(sessionJwt)
        const now = Date.now() / 1000 - 2
        return exp <= now;
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

export const removeTokens = () => {
    localStorage.removeItem("rememberMe")
    sessionStorage.removeItem("jwtToken")
    sessionStorage.removeItem("refreshToken")
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("refreshToken")
}