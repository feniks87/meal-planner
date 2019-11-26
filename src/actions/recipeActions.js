import { ADD_RECIPE_SUCCESS, ADD_RECIPE_FAIL, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from './actionTypes';
import axios from '../helpers/axios-instance';
import { successMessage, errorMessage } from '../actions/alertActions';

export const addRecipeSuccess = (recipe) => {
    return { type: ADD_RECIPE_SUCCESS, recipe }
};

export const addRecipeFail = (error) => {
    return { type: ADD_RECIPE_FAIL, error }
};

export const addRecipe = (recipe) => {
    return dispatch => {
        axios.post('/recipes.json', recipe)
            .then(recipe => {
                dispatch(addRecipeSuccess(recipe.data));
                dispatch(successMessage('New recipe has been successfully added to My recipes'));
            })
            .catch(error => {
                dispatch(addRecipeFail(error.message));
                dispatch(errorMessage(error.message))
            })
    }
}

export const fetchRecipesSuccess = (recipes) => {
    return { type: FETCH_RECIPE_SUCCESS, recipes }
};

export const fetchRecipesFail = (error) => {
    return { type: FETCH_RECIPE_FAIL, error }
};

export const fetchRecipes = () => {
    return dispatch => {
        axios.get('/recipes.json')
            .then(recipes => {
                const fetchedRecipes = [];
                for (let key in recipes.data) {
                    fetchedRecipes.push({
                        ...recipes.data[key],
                        id: key
                    });
                }
                dispatch(fetchRecipesSuccess(fetchedRecipes));
            })
            .catch(error => {
                dispatch(fetchRecipesFail(error.toString()));
            });
    };
}

