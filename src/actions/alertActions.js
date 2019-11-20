import { SUCCESS_MESSAGE, ERROR_MESSAGE, CLEAR_MESSAGE } from './actionTypes';

export const successMessage = (message) =>{
    return {type: SUCCESS_MESSAGE, message}
};

export const errorMessage = (message) => {
    return {type: ERROR_MESSAGE, message}
};

export const clearMessage = () => {
    return {type: CLEAR_MESSAGE}
};