import {ACTION_TYPES} from "../../constants/ActionTypes";

const initialState = {
    data: null,
    loading: false,
    error: [],
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                loading: true,
                error: null,
                data: null,
            }
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            }
        case ACTION_TYPES.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null,
            }
        default:
            return state;
    }
}