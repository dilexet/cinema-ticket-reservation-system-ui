import axios from "axios";
import {refreshTokenAsyncAction} from "../../RefreshToken/actions-creator/RefreshTokenActions";
import {AuthorizeURL, BaseApiURL, ImageUploadURL} from "../constants/BaseURLs";
import {getLocalAccessToken} from "./TokenServices";

const axiosInstance = axios.create({
    baseURL: BaseApiURL,
    timeout: 3000,
})

axiosInstance.interceptors.request.use(
    async (config) => {
        if (!config.url.includes(AuthorizeURL)) {
            const res = getLocalAccessToken();
            if (res) {
                config.headers = {
                    ...config.headers,
                    'Authorization': `Bearer ${res.jwt}`,
                    'Accept': '*/*',
                    'Content-Type': 'application/json-patch+json'
                }
                if (config.url.includes('/' + ImageUploadURL)) {
                    config.headers = {
                        ...config.headers,
                        'Authorization': `Bearer ${res.jwt}`,
                        'Accept': '*/*',
                        'Content-Type': 'multipart/form-data'
                    }
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
                    axios.defaults.headers.common['Authorization'] = `Bearer ${tokens.jwt}`;
                    return axiosInstance(originalRequest);
                }
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;