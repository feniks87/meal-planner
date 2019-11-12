import { SUCCESS_MESSAGE, ERROR_MESSAGE, CLEAR_MESSAGE } from './actionTypes';

export function successMessage (message) {
    return {type: SUCCESS_MESSAGE, message}
};

export function errorMessage (message) {
    return {type: ERROR_MESSAGE, message}
};

export function clearMessage () {
    return {type: CLEAR_MESSAGE}
};