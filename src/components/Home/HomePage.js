import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Header from '../Header';
import RecipeItemBox from './RecipeItemBox';
import { fetchRecipes } from '../../actions/recipeActions';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem min-content;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 3rem;
    background-size: cover;

`;

const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: 1fr;
    min-height: 65rem;
    grid-row: 3;
    grid-column: 3 / 9;
    box-shadow: 0 0 2rem rgba(0,0,0,.1);
    background-color: #F9F9F9;
    margin-bottom: 5rem;
    padding: 3rem;
    row-gap: 1rem;
`;

const Heading = styled.h2`
    grid-row: 1;
    justify-self: center;
`;

const Recipes = styled.div`
    grid-row: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const RecipeLink = styled(NavLink)`
    grid-row: 3;
    justify-self: center;
    color: var(--color-grey);
    font-size: 2.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all .2s;
    font-size: 1.6rem;

    &:hover {
        color: var(--color-secondary);
    }
`;

const HomePage = () => {
    const allRecipes = useSelector(state => state.recipeReducer.recipes);
    const dispatch = useDispatch();

    const selectRecipesHandler = (recipes) => {
        if (recipes === undefined || recipes.length === 0) {
            return [];
        }

        let randomRecipeIndex;
        let copiedRecipes = [...recipes];
        let recipe;
        let newRecipes = [];
        for (let i = 0; i < 12; i++) {
            randomRecipeIndex = Math.round(Math.random() * (copiedRecipes.length-1));
            recipe = copiedRecipes[randomRecipeIndex];
            newRecipes.push(recipe);
            copiedRecipes.splice(randomRecipeIndex, 1);
        };
        return newRecipes;
    }

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <Wrapper>
            <Header />
            <Content>
                <Heading>Recipe Ideas</Heading>
                <Recipes>
                    {selectRecipesHandler(allRecipes).map(recipe =>
                        <RecipeItemBox
                            recipe={recipe}
                            recipeName={recipe.name}
                            image={recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'}/>
                    )}
                </Recipes>
                <RecipeLink to="/recipe-list">Check all recipes</RecipeLink>
            </Content>

        </Wrapper>
    )
};

export default HomePage;