import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {AdditionalServiceManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_additionalServices_loading,
    get_additionalServices_success,
    get_additionalServices_error,
    get_additionalService_by_id_loading,
    get_additionalService_by_id_success,
    get_additionalService_by_id_error,
    create_additionalService_success,
    update_additionalService_success,
    remove_additionalService_success,
    change_additionalServices_error,
    clearDataList,
} from "../reducers/AdditionalServiceManagementReducer"
import {additionalServiceApi} from "./AdditionalServiceApi";

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const clearData = () => {
    return (dispatch) => {
        dispatch(clearError())
        dispatch(clearDataList())
    }
}

export const getAdditionalServicesByCinemaId = (cinemaId) => {
    return async (dispatch) => {
        dispatch(get_additionalServices_loading())

        try {
            const response = await additionalServiceApi(AdditionalServiceManagementURL).get_services_by_cinema_id(cinemaId)
            dispatch(get_additionalServices_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_additionalServices_error(error.response.data))
            }
        }
    }
}

export const getAdditionalServices = () => {
    return async (dispatch) => {
        dispatch(get_additionalServices_loading())

        try {
            const response = await defaultApi(AdditionalServiceManagementURL).get()
            dispatch(get_additionalServices_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_additionalServices_error(error.response.data))
            }
        }
    }
}

export const createAdditionalService = (data, cinemaId) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await additionalServiceApi(AdditionalServiceManagementURL).post(data, cinemaId)
            dispatch(create_additionalService_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_additionalServices_error(error.response.data))
            }
        }
    }
}

export const updateAdditionalService = (data, id, cinemaId) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await additionalServiceApi(AdditionalServiceManagementURL).update(data, id, cinemaId);
            dispatch(update_additionalService_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_additionalServices_error(error.response.data))
            }
        }
    }
}

export const deleteAdditionalService = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(AdditionalServiceManagementURL).delete(id);
            dispatch(remove_additionalService_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_additionalServices_error(error.response.data))
            }
        }
    }
}

export const getAdditionalServiceById = (id) => {
    return async (dispatch) => {
        dispatch(get_additionalService_by_id_loading())

        try {
            const response = await defaultApi(AdditionalServiceManagementURL).getById(id);
            dispatch(get_additionalService_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_additionalService_by_id_error(error.response.data))
            }
        }
    }
}