import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {BookingURL} from "../../../Shared/constants/BaseURLs";

export const bookingAPI = (url = BookingURL) => {
    return {
        get_session_by_id: async (id) => await axiosInstance.get(url + id),
    }
}