import axiosInstance from "../../../Shared/utils/AxiosCreater";

export const profileAPI = (url) => {
    return {
        getById: async (id, value) => await axiosInstance.get(url + id, {headers: {'ShowPastTicket': value}}),
    }
}