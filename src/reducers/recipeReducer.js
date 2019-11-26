import { ADD_RECIPE_SUCCESS, ADD_RECIPE_FAIL, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from '../actions/actionTypes';

export function recipeReducer(state = {recipes: []}, action) {
    switch(action.type) {
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: [...state.recipes, {
                    id: action.recipe.id,
                    name: action.recipe.name,
                    ings: action.recipe.ings,
                    directions: action.recipe.directions
                }]
            }
        case ADD_RECIPE_FAIL:
            return {
                ...state,
                error: action.error
            }
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: action.recipes
            }
         case FETCH_RECIPE_FAIL:
             return {
                 ...state,
                 error: action.error
             }
        default:
            return state;
    }
};