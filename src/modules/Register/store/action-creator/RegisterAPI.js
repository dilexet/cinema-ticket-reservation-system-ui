import {RegisterURL} from "../../constants/RegisterURL";
import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const registerAPI = (url = RegisterURL) => {
    return {
        register: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}