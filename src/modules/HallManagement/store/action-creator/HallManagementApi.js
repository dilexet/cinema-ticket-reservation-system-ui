import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const hallManagementApi = (url) => {
    return {
        post: async (data, cinemaId) => await axiosInstance.post(url + cinemaId, data),
        update: async (data, id, cinemaId) => await axiosInstance.put(url + `${id}/${cinemaId}`, data),
        get_hall_by_cinema_id: async (id) => await axiosInstance.get(url + `${id}/cinema`)
    }
}