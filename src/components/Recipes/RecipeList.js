import React, { useState } from 'react';
import styled from 'styled-components';
import CreateRecipe from './CreateRecipe';
import RecipeItem from './RecipeItem';
import uuid from 'uuid';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;
`;

const StyledList = styled.div`
    grid-column: 3 / -4;
    grid-row: 2;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 3rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: white;
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 1 / -1;
    background-color: var(--color-primary);
    z-index: 20;
`;

const initialRecipeList = [
    {
        id: uuid(),
        name: 'Pork schnitzel & apple parmesan salad',
        ings: 'potato, parsley, apple, parmesan cheese, panko breadcrumbs, pork schnitzel, mixed salad leaves, smokey aioli',
        directions: '1. Bake the fries 2. Prepare the crumb 3. Crumb the pork 4. Cook the pork 5. Make salad'
    },
    {
        id: uuid(),
        name: 'Pork schnitzel & apple parmesan salad',
        ings: 'potato, parsley, apple, parmesan cheese, panko breadcrumbs, pork schnitzel, mixed salad leaves, smokey aioli',
        directions: '1. Bake the fries 2. Prepare the crumb 3. Crumb the pork 4. Cook the pork 5. Make salad'
    },
    {
        id: uuid(),
        name: 'Pork schnitzel & apple parmesan salad',
        ings: 'potato, parsley, apple, parmesan cheese, panko breadcrumbs, pork schnitzel, mixed salad leaves, smokey aioli',
        directions: '1. Bake the fries 2. Prepare the crumb 3. Crumb the pork 4. Cook the pork 5. Make salad'
    },
    {
        id: uuid(),
        name: 'Pork schnitzel & apple parmesan salad',
        ings: 'potato, parsley, apple, parmesan cheese, panko breadcrumbs, pork schnitzel, mixed salad leaves, smokey aioli',
        directions: '1. Bake the fries 2. Prepare the crumb 3. Crumb the pork 4. Cook the pork 5. Make salad'
    }
];

const initialRecipe = {
    id: '',
    name: '',
    ings: '',
    directions: ''
}

const RecipeList = () => {
    const [recipes, setRecipeList] = useState(initialRecipeList);
    const [recipe, setRecipeItem] = useState(initialRecipe);

    const inputHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setRecipeItem(prevState => {
            return {
                ...prevState,
                [name]: value
        }});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (recipe) {
            setRecipeList(prevList =>
            [...prevList, {id: uuid(), name: recipe.name, ings: recipe.ings, directions: recipe.directions}]
        )};
        setRecipeItem(initialRecipe);
    };

    return (
        <div>
            <Wrapper>
                <Heading>Recipes</Heading>
                <StyledList>
                    {recipes.map(item =>
                        <RecipeItem
                            name={item.name}
                            ings={item.ings}
                            directions={item.directions}/>
                    )}
                </StyledList>
                <Rectangle />
            </Wrapper>

            <CreateRecipe
                submitHandler={submitHandler}
                recipeName='name'
                ingName='ings'
                directionsName='directions'
                inputName={recipe.name}
                inputIngs={recipe.ings}
                inputDirections={recipe.directions}
                inputHandler={inputHandler}
                />
        </div>
    );
}

export default RecipeList;