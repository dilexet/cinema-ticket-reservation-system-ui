import {RefreshTokenURL} from "../constants/RefreshTokenURL";
import axiosInstance from "../../Shared/utils/AxiosCreater";

export const refreshTokenAPI = (url = RefreshTokenURL) => {
    return {
        refresh: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}