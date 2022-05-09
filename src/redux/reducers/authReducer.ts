import {
    TOGGLE_LOGIN,
} from '../actions/types';

const initialState = {
    isLoggedIn: false,
};

export default (
    state = initialState,
    action: { type: any; error: any; payload: any }
) => {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return {
                ...state,
            };
    }
};
