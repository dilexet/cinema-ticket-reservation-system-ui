import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {HallManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_halls_loading,
    get_halls_success,
    get_halls_error,
    get_hall_by_id_loading,
    get_hall_by_id_success,
    get_hall_by_id_error,
    create_hall_success,
    update_hall_success,
    remove_hall_success,
    change_halls_error
} from "../reducers/HallManagementReducer"
import {hallManagementApi} from "./HallManagementApi";

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getHalls = () => {
    return async (dispatch) => {
        dispatch(get_halls_loading())

        try {
            const response = await defaultApi(HallManagementURL).get()
            dispatch(get_halls_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_halls_error(error.response.data))
            }
        }
    }
}

export const createHall = (data, cinemaId) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await hallManagementApi(HallManagementURL).post(data, cinemaId)
            dispatch(create_hall_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_halls_error(error.response.data))
            }
        }
    }
}

export const updateHall = (data, id, cinemaId) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await hallManagementApi(HallManagementURL).update(data, id, cinemaId);
            dispatch(update_hall_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_halls_error(error.response.data))
            }
        }
    }
}

export const deleteHall = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(HallManagementURL).delete(id);
            dispatch(remove_hall_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_halls_error(error.response.data))
            }
        }
    }
}

export const getHallById = (id) => {
    return async (dispatch) => {
        dispatch(get_hall_by_id_loading())

        try {
            const response = await defaultApi(HallManagementURL).getById(id);
            dispatch(get_hall_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_hall_by_id_error(error.response.data))
            }
        }
    }
}