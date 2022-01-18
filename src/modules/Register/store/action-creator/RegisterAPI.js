import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {RegisterURL} from "../../constants/RegisterURL";

export const registerAPI = (url = RegisterURL) => {
    return {
        register: async (data) => await axiosInstance.post(url, data, {withCredentials: true})
    }
}