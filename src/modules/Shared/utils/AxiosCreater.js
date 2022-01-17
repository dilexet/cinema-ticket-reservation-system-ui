import axios from "axios";
import {AuthorizeURL, BaseURL} from "../constants/BaseURLs";
import {getLocalAccessToken} from "./TokenServices";
import {refreshTokenAsyncAction} from "../../RefreshToken/actions-creator/RefreshTokenActions";

const axiosInstance = axios.create({
    baseURL: BaseURL,
    timeout: 3000,
})

axiosInstance.interceptors.request.use(
    async (config) => {
        console.log("call")
        if (!config.url.includes(AuthorizeURL)) {
            const res = getLocalAccessToken();
            if (res) {
                config.headers = {
                    'Authorization': `Bearer ` + res.jwt,
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (!originalRequest.url.includes(AuthorizeURL) && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const res = await refreshTokenAsyncAction();
            if (res === true) {
                const tokens = getLocalAccessToken();
                if (tokens) {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokens.jwt;
                    return axiosInstance(originalRequest);
                }
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;