import { ADD_RECIPE } from './actionTypes';

export function addRecipe (recipe) {
    return { type: ADD_RECIPE, recipe }
};