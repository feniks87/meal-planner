import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { alertReducer } from './alertReducer';

export const rootReducer = combineReducers({
    recipeReducer,
    alertReducer
});