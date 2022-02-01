import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const movieManagementAPI = (url, params) => {
    return {
        get: async () => await axiosInstance.get(url, {params})
    }
}