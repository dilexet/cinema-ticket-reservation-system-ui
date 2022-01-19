import {UserManagementURL} from "../../../Shared/constants/BaseURLs";
import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const userManagementAPI = (url = UserManagementURL) => {
    return {
        post: async (data) => await axiosInstance.post(url, data),
        get: async (filter) => await axiosInstance.get(url, filter),
        update: async (data, id) => await axiosInstance.put(url + id, data),
        delete: async (id) => await axiosInstance.delete(url + id),
        getById: async (id) => await axiosInstance.get(url + id),
    }
}