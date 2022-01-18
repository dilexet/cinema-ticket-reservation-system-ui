import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {LoginURL} from "../../constants/LoginURL";

export const loginAPI = (url = LoginURL) => {
    return {
        login: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}