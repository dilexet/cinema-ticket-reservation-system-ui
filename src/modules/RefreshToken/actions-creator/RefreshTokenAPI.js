import axiosInstance from "../../Shared/utils/AxiosCreater";
import {RefreshTokenURL} from "../constants/RefreshTokenURL";

export const refreshTokenAPI = (url = RefreshTokenURL) => {
    return {
        refresh: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}