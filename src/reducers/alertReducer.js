import { SUCCESS_MESSAGE, ERROR_MESSAGE, CLEAR_MESSAGE } from '../actions/actionTypes';

export function alertReducer(state = {}, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return {
                type: "success",
                message: action.message
            };
        case ERROR_MESSAGE:
            return {
                type: "error",
                message: action.message
            };
        case CLEAR_MESSAGE:
            return {message: "", type: ""};
        default:
            return state;
    }
};

export default alertReducer;