import {
    get_session_by_id_loading,
    get_session_by_id_success,
    get_session_by_id_error,
    book_tickets_loading,
    book_tickets_success,
    book_tickets_error,
    block_seat,
    cancel_block_seat
} from "../reducers/BookingReducer";
import {bookingAPI} from "./BookingAPI";

export const getSessionById = (id) => {
    return async (dispatch) => {
        dispatch(get_session_by_id_loading())

        try {
            const response = await bookingAPI().get_session_by_id(id)
            dispatch(get_session_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_session_by_id_error(error.response.data))
            }
        }
    }
}

export const bookTickets = (id, data) => {
    return async (dispatch) => {
        dispatch(book_tickets_loading())

        try {
            const response = await bookingAPI().book_tickets(id, data)
            dispatch(book_tickets_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(book_tickets_error(error.response.data))
            }
        }
    }
}


export const blockTicket = (seatId) => {
    return async (dispatch) => {
        dispatch(block_seat(seatId))
    }
}

export const cancelBlockTicket = (seatId) => {
    return async (dispatch) => {
        dispatch(cancel_block_seat(seatId))
    }
}