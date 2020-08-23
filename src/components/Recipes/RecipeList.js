import React from 'react';
import styled from 'styled-components';
import RecipeItem from './RecipeItem';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchRecipes} from '../../actions/recipeActions';
import RecipeModal from './RecipeModal';
import Rectangle from '../UI/Rectangle';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
    margin: 10rem 0;

    @media (max-width: 550px) {
        margin: 0;
    }
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    align-self: center;
    color: var(--color-grey);
    margin-left: 8rem;
    z-index: 100;

    @media (max-width: 550px) {
        grid-column: 1 / -1;
        justify-self: center;
        margin-left: 0;
    }
`;

const StyledList = styled.div`
    grid-column: 3 / -4;
    grid-row: 2;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 5rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: white;
    min-height: 55vh;

    @media (max-width: 550px) {
        grid-column: 1 / -1;
        box-shadow: none;
        border: none;
        padding: 0 3rem;
        background-color: transparent;
    }
`;

const SearchInputBox = styled.input`
    box-sizing: border-box;
    outline: none;
    padding: .6rem;
    margin-top: .8rem;
    margin-bottom: .8rem;
    font-size: 1.7rem;
    border: 1.5px solid var(--color-primary-light);
    color: #91928d;
    border-radius: 1px;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }

    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(247, 220, 89, .6);
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`;

const RecipeList = () => {
    const [searchName, setSearchName] = useState("");
    const recipes = useSelector(state => state.recipeReducer.recipes);
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [isOpen, setOpenModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const inputHanler = (event) => {
        setSearchName(event.target.value);
    }

    const openModalHandler = (recipe) => {
        setOpenModal(!isOpen);
        setSelectedRecipe(recipe);
    }

    const closeModalHandler = () => {
        setOpenModal(!isOpen);
    }

    const filteredRecepies = (recipeList) => recipeList.filter(recipe => !searchName || searchName.length === 0 || recipe.name.toLowerCase().includes(searchName.toLowerCase()))

    return (
        <div>
            <Wrapper >
                <Heading>Recipes</Heading>
                <StyledList>
                    <SearchInputBox type="text" name="name" value={searchName} onChange={inputHanler} placeholder="Search..."/>
                    {filteredRecepies(recipes).map(item =>
                        <RecipeItem
                            key={item.id}
                            onClickHandler={openModalHandler}
                            recipe={item}
                        />
                    )}
                    <RecipeModal
                        show={isOpen ? "show" : ""}
                        recipe={selectedRecipe}
                        closeHandler={closeModalHandler}/>
                </StyledList>
                <Rectangle gridRow="1 / -1"/>
            </Wrapper>
        </div>
    );
};

export default RecipeList;