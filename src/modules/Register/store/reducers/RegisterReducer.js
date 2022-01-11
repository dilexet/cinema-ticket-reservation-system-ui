import {ACTION_TYPES} from "../../constants/ActionTypes";

const initialState = {
    data: null,
    loading: false,
    error: [],
}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REGISTER:
            return {
                ...state,
                loading: true,
                error: null,
                data: null,
            }
        case ACTION_TYPES.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            }
        case ACTION_TYPES.REGISTER_ERROR:
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