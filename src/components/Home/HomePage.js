import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Header from '../Header';
import RecipeItemBox from './RecipeItemBox';
import { fetchRecipes } from '../../actions/recipeActions';
import { NavLink } from 'react-router-dom';
import RecipeModal from '../Recipes/RecipeModal';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem min-content;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 3rem;

    @media (max-width: 550px) {
        grid-template-rows: repeat(2, min-content);
    }
`;

const Content = styled.div`    
    min-height: 65rem;
    grid-row: 3;
    grid-column: 3 / 9;
    box-shadow: 0 0 2rem rgba(0,0,0,.1);
    background-color: #F9F9F9;
    margin-bottom: 5rem;
    padding: 3rem;
    
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: 1fr;
    row-gap: 1rem;

    @media (max-width: 1000px) {
        grid-column: 2 / 10;
    }

    @media (max-width: 550px) {
        grid-row: 2;
        padding-top: 0;
    }
`;

const Heading = styled.h2`
    grid-row: 1;
    justify-self: center;

    @media (max-width: 550px) {

    }
`;

const Recipes = styled.div`
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 5rem;
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
    const [isOpenRecipeModal, setOpenRecipeModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [randomRecipes, setRandomRecipes] = useState([]);

    const getRandomRecipes = (recipes) => {
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

    useEffect(() => {
        let recipes = getRandomRecipes(allRecipes);
        setRandomRecipes(recipes);
    }, [allRecipes]);


    const closeModalRecipeHandler = () => {
        setOpenRecipeModal(!isOpenRecipeModal);
    };

    const openRecipeModalHandler = (recipe) => {
        setOpenRecipeModal(!isOpenRecipeModal);
        setSelectedRecipe(recipe);
    }

    return (
        <Wrapper>
            <Header />
            <Content>
                <Heading>Recipe Ideas</Heading>
                <Recipes>
                    {randomRecipes.map(recipe =>
                        <RecipeItemBox
                            recipe={recipe}
                            recipeName={recipe.name}
                            image={recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                            click={openRecipeModalHandler}/>
                    )}
                </Recipes>
                <RecipeLink to="/recipe-list">Check all recipes</RecipeLink>
            </Content>
            <RecipeModal
                show={isOpenRecipeModal ? "show" : ""}
                recipe={selectedRecipe}
                closeHandler={closeModalRecipeHandler}/>

        </Wrapper>
    )
};

export default HomePage;