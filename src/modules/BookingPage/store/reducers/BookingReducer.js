import {createSlice} from "@reduxjs/toolkit"
import {TicketState} from "../../../Shared/constants/TicketState";

const initialState = {
    sessionState: {
        code: null,
        success: false,
        session: null,
    },
    loading: false,
    error: null,
}

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {
        get_session_by_id_loading(state) {
            state.loading = false;
            state.sessionState = null;
            state.error = null;
        },
        get_session_by_id_success(state, action) {
            state.loading = false;
            state.sessionState = {
                code: action.payload.code,
                success: action.payload.success,
                session: action.payload.session,
            };
            state.error = null;
        },
        get_session_by_id_error(state, action) {
            state.loading = false;
            state.sessionState = {
                code: null,
                success: false,
                session: [],
            };
            state.error = action.payload;
        },
        block_seat(state, action) {
            state.sessionState = {
                ...state.sessionState,
                session: {
                    ...state.sessionState.session,
                    sessionSeats: state.sessionState.session.sessionSeats.map(x =>
                        x.seat.id !== action.payload ? x : {...x, ticketState: TicketState.Blocked})
                }
            }
        },
        cancel_block_seat(state, action) {
            state.sessionState = {
                ...state.sessionState,
                session: {
                    ...state.sessionState.session,
                    sessionSeats: state.sessionState.session.sessionSeats.map(x =>
                        x.seat.id !== action.payload ? x : {...x, ticketState: TicketState.Free})
                }
            }
        }
    }
})


export default bookingSlice.reducer;
export const {
    get_session_by_id_loading,
    get_session_by_id_success,
    get_session_by_id_error,
    block_seat,
    cancel_block_seat
} = bookingSlice.actions;