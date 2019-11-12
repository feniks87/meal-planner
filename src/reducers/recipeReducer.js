import { ADD_RECIPE } from '../actions/actionTypes';
import uuid from 'uuid';

const recipes = [
    {
    id: uuid(),
    name: 'Pork schnitzel & apple parmesan salad',
    ings: 'potato, parsley, apple, parmesan cheese, panko breadcrumbs, pork schnitzel, mixed salad leaves, smokey aioli',
    directions: '1. Bake the fries 2. Prepare the crumb 3. Crumb the pork 4. Cook the pork 5. Make salad'
    }
];

export function recipeReducer(state = recipes, action) {
    switch(action.type) {
        case ADD_RECIPE:
            return [
                ...state,
                {
                    id: action.recipe.id,
                    name: action.recipe.name,
                    ings: action.recipe.ings,
                    directions: action.recipe.directions
                }
            ]
        default:
            return state;
    }
};