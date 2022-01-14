import {LoginURL} from "../../constants/LoginURL";
import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const loginAPI = (url = LoginURL) => {
    return {
        login: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}