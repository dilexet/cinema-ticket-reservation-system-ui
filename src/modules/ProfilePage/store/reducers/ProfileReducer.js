import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: {
        code: null,
        success: false,
        userProfile: {
            name: null,
            surname: null,
            tickets: []
        }
    },
    loading: false,
    error: null,
}

const userProfileSlice = createSlice({
    name: "user-profile",
    initialState: initialState,
    reducers: {
        update_user_profile_loading(state) {
            state.loading = true;
            state.error = null;
        },
        update_user_profile_success(state, action) {
            state.loading = false;
            state.data = {
                code: action.payload.code,
                success: action.payload.success,
                userProfile: {
                    ...state.data.userProfile,
                    name: action.payload.userProfile.name,
                    surname: action.payload.userProfile.surname,
                }
            };
            state.error = null;
        },
        update_user_profile_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        get_user_profile_by_id_loading(state) {
            state.loading = false;
            state.data = null;
            state.error = null;
        },
        get_user_profile_by_id_success(state, action) {
            state.loading = false;
            state.data = {
                code: action.payload.code,
                success: action.payload.success,
                userProfile: {
                    name: action.payload?.userProfile?.name ?? '',
                    surname: action.payload?.userProfile?.surname ?? '',
                    tickets: action.payload?.userProfile?.tickets ?? [],
                }
            };
            state.error = null;
        },
        get_user_profile_by_id_error(state, action) {
            state.loading = false;
            state.data = {
                code: null,
                success: false,
                userProfile: {
                    name: null,
                    surname: null,
                    tickets: []
                }
            };
            state.error = action.payload;
        },
    }
})


export default userProfileSlice.reducer;
export const {
    update_user_profile_loading,
    update_user_profile_success,
    update_user_profile_error,
    get_user_profile_by_id_loading,
    get_user_profile_by_id_success,
    get_user_profile_by_id_error
} = userProfileSlice.actions;