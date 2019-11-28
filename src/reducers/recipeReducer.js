import * as actionTypes from '../actions/actionTypes';

export function recipeReducer(state = {recipes: []}, action) {
    switch(action.type) {
        case actionTypes.ADD_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: [...state.recipes, {
                    id: action.recipe.id,
                    name: action.recipe.name,
                    ings: action.recipe.ings,
                    directions: action.recipe.directions,
                    imageURL: action.recipe.imageURL
                }]
            }
        case actionTypes.ADD_RECIPE_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: action.recipes
            }
         case actionTypes.FETCH_RECIPE_FAIL:
             return {
                 ...state,
                 error: action.error
             }
        default:
            return state;
    }
};