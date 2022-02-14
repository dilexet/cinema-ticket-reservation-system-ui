import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {BookingURL} from "../../../Shared/constants/BaseURLs";

export const confirmBookingAPI = (url = BookingURL) => {
    return {
        book_tickets: async (id, data) => await axiosInstance.put(url + id, data),
    }
}