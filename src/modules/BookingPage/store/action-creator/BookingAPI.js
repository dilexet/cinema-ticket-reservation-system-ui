import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {BookingURL} from "../../../Shared/constants/BaseURLs";

export const bookingAPI = (url = BookingURL) => {
    return {
        book_tickets: async (id, data) => await axiosInstance.put(url + id, data),
        get_session_by_id: async (id) => await axiosInstance.get(url + id),
    }
}