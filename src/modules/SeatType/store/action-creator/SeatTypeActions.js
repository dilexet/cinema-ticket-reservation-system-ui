import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {SeatTypeURL} from "../../../Shared/constants/BaseURLs";
import {
    get_seatTypes_loading,
    get_seatTypes_success,
    get_seatTypes_error,
} from "../reducers/SeatTypeReducer"

export const getSeatTypes = () => {
    return async (dispatch) => {
        dispatch(get_seatTypes_loading())

        try {
            const response = await defaultApi(SeatTypeURL).get()
            dispatch(get_seatTypes_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_seatTypes_error(error.response.data))
            }
        }
    }
}