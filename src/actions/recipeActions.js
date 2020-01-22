import * as actionTypes from './actionTypes';
import axios from '../helpers/axios-instance';
import { successMessage, errorMessage } from '../actions/alertActions';

export const createRecipeSuccess = (recipe) => {
    return { type: actionTypes.CREATE_RECIPE_SUCCESS, recipe }
};

export const createRecipeFail = (error) => {
    return { type: actionTypes.CREATE_RECIPE_FAIL, error }
};

export const createRecipe = (recipe) => {
    return dispatch => {
        axios.post('/recipes.json', recipe)
            .then(response => {
                recipe = {...recipe, id: response.data.name};
                dispatch(createRecipeSuccess(recipe));
                dispatch(successMessage('New recipe has been successfully added to My recipes'));
            })
            .catch(error => {
                dispatch(createRecipeFail(error.message));
                dispatch(errorMessage(error.message))
            })
    }
}

export const fetchRecipesSuccess = (recipes) => {
    return { type: actionTypes.FETCH_RECIPE_SUCCESS, recipes }
};

export const fetchRecipesFail = (error) => {
    return { type: actionTypes.FETCH_RECIPE_FAIL, error }
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