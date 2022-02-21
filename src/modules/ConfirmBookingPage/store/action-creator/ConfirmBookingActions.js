import {toastr} from "react-redux-toastr";
import {
    book_tickets_loading,
    book_tickets_success,
    book_tickets_error,
} from "../reducers/ConfirmBookingReducer";
import {confirmBookingAPI} from "./ConfirmBookingAPI";

export const bookingTickets = (id, data) => {
    return async (dispatch) => {
        dispatch(book_tickets_loading())

        try {
            const response = await confirmBookingAPI().book_tickets(id, data)
            toastr.success('Success', 'Payment was successful')
            dispatch(book_tickets_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(book_tickets_error(error.response.data))
            }
        }
    }
}