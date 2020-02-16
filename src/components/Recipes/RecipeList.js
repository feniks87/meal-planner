import React from 'react';
import styled from 'styled-components';
import RecipeItem from './RecipeItem';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchRecipes} from '../../actions/recipeActions';
import Modal from '../Modal';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
    margin: 10rem 0;
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    align-self: center;
    color: var(--color-grey);
    margin-left: 8rem;
    z-index: 100;
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
`;

const SearchBox = styled.div`

`;

const SearchInput = styled.input`
    outline: none;
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: 1px solid var(--color-primary-light);
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
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 1 / -1;
    background-color: var(--color-primary);
    z-index: 20;
`;

const ModalRecipeIngs = styled.div`
    padding: 1rem;
`;

const ModalRecipeDirections = styled.div`
    padding: 1rem;
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

    const modalRecipeContent =  <div>
                                    <ModalRecipeIngs>{selectedRecipe.ings}</ModalRecipeIngs>
                                    <ModalRecipeDirections>{selectedRecipe.directions}</ModalRecipeDirections>
                                </div>

    return (
        <div>
            <Wrapper >
                <Heading>Recipes</Heading>
                <StyledList>
                    <SearchBox>
                        <SearchInput type="text" name="name" value={searchName} onChange={inputHanler} placeholder="Search..."/>
                    </SearchBox>
                    {filteredRecepies(recipes).map(item =>
                        <RecipeItem
                            onClickHandler={openModalHandler}
                            recipe={item}
                        />
                    )}
                    <Modal
                        show={isOpen ? "show" : ""}
                        name={selectedRecipe.name}
                        content={modalRecipeContent}
                        closeHandler={closeModalHandler}/>
                </StyledList>
                <Rectangle/>
            </Wrapper>
        </div>
    );
};

export default RecipeList;