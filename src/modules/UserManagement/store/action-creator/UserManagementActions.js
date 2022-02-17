import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {RoleManagementURL, UserManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_users_loading,
    get_users_success,
    get_users_error,
    get_user_by_id_loading,
    get_user_by_id_success,
    get_user_by_id_error,
    create_user_success,
    update_user_success,
    remove_user_success,
    change_users_error,
    get_roles_loading,
    get_roles_success,
    get_roles_error
} from "../reducers/UserManagementReducer"

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(get_users_loading())

        try {
            const response = await defaultApi(UserManagementURL).get()
            dispatch(get_users_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_users_error(error.response.data))
            }
        }
    }
}

export const getRoles = () => {
    return async (dispatch) => {
        dispatch(get_roles_loading())

        try {
            const response = await defaultApi(RoleManagementURL).get()
            dispatch(get_roles_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_roles_error(error.response.data))
            }
        }
    }
}

export const createUser = (data) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(UserManagementURL).post(data)
            dispatch(create_user_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_users_error(error.response.data))
            }
        }
    }
}

export const updateUser = (data, id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(UserManagementURL).update(data, id);
            dispatch(update_user_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_users_error(error.response.data))
            }
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(UserManagementURL).delete(id);
            dispatch(remove_user_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_users_error(error.response.data))
            }
        }
    }
}

export const getUserById = (id) => {
    return async (dispatch) => {
        dispatch(get_user_by_id_loading())

        try {
            const response = await defaultApi(UserManagementURL).getById(id);
            dispatch(get_user_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_user_by_id_error(error.response.data))
            }
        }
    }
}