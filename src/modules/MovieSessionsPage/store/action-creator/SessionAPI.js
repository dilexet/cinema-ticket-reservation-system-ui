import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {MovieFilterURL} from "../../../Shared/constants/BaseURLs";

export const sessionAPI = (url = MovieFilterURL) => {
    return {
        get_sessions_for_movie: async (id) => await axiosInstance.get(url + id),
    }
}