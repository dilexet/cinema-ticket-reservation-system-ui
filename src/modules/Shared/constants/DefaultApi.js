import axiosInstance from "../utils/AxiosCreater";

export const defaultApi = (url) => {
    return {
        post: async (data) => await axiosInstance.post(url, data),
        get: async () => await axiosInstance.get(url),
        update: async (data, id) => await axiosInstance.put(url + id, data),
        delete: async (id) => await axiosInstance.delete(url + id),
        getById: async (id) => await axiosInstance.get(url + id),
    }
}