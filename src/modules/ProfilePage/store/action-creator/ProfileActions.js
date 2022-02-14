import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {UserProfileURL} from "../../../Shared/constants/BaseURLs";
import {
    update_user_profile_loading,
    update_user_profile_success,
    update_user_profile_error,
    get_user_profile_by_id_loading,
    get_user_profile_by_id_success,
    get_user_profile_by_id_error
} from "../reducers/ProfileReducer";
import {profileAPI} from "./ProfileAPI";

export const getUserProfileById = (id, value) => {
    return async (dispatch) => {
        dispatch(get_user_profile_by_id_loading())

        try {
            const response = await profileAPI(UserProfileURL).getById(id, value)
            dispatch(get_user_profile_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_user_profile_by_id_error(error.response.data))
            }
        }
    }
}

export const updateUserProfile = (id, data) => {
    return async (dispatch) => {
        dispatch(update_user_profile_loading())

        try {
            const response = await defaultApi(UserProfileURL).update(data, id)
            dispatch(update_user_profile_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(update_user_profile_error(error.response.data))
            }
        }
    }
}