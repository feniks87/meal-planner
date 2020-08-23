import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from '../../actions/recipeActions';
import RecipeItem from '../Recipes/RecipeItem';
import { ReactComponent as CloseButton } from '../../assets/svg/close.svg'

const StyledModal = styled.div`
    backdrop-filter: blur(5px);
    background-color: var(--color-grey-light);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: ${props => props.show ? "block" : "none"};
`;

const Overlay = styled.div`
    z-index: 0;
    height: 100vh;
    width: 100%;
`;

const StyledModalBox = styled.div`
    position: absolute;
    width: 60vw;
    min-height: 73vh;
    max-height: 73vh;
    position: fixed;
    background-color: white;
    border-radius: 1px;
    box-shadow: 0 0 1rem rgba(black, 0.5);
    box-sizing: border-box;
    left: 20%;
    top: 20%;
    opacity: 1;
    z-index: 10000;

    @media (max-width: 550px) {
        width: 80%;
        left: 10%;
        top: 20%;
        max-height: 70%;
        overflow: auto;
    }
`;

const HeadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--color-primary);
    width: 60vw;
    position: fixed;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    
    @media (max-width: 550px) {
        flex-direction: column;
        width: 80%;
    }
`;

const ModalName = styled.h2`
    margin: 0;
    padding: 1rem;
`;

const SearchInputBox = styled.input`
    outline: none;
    font-size: 1.7rem;
    border: 1px solid var(--color-primary-light);
    color: #91928d;
    border-radius: 1px;
    margin: 1.5rem;
    margin-right: 5rem;
    padding: 1rem;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }

    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 10px rgba(0, 0, 0, .075), 0 0 10px rgba(247, 220, 89, 1);
    }

    @media (max-width: 550px) {
        margin-top: 0;
        margin-right: 1.5rem;
        box-sizing: border-box;
    }
`;

const StyledIconButton = styled(CloseButton)`
    fill: var(--color-grey);
    cursor: pointer;
    transition: all 0.3s;
    height: 1.7rem;
    position: absolute;
    top: 1.5rem;;
    right: 1rem;
`;

const ModalContent = styled.div`
    margin-top: 6rem;
    padding: 1rem;
    overflow: auto;
    max-height: 35rem;
    @media (max-width: 550px) {
        margin-top: 11rem;
        max-height: 40rem;
    }
`;

const ModalMenu = (props) => {
    const [searchName, setSearchName] = useState("");
    const recipes = useSelector(state => state.recipeReducer.recipes);
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        setSelectedRecipes(props.currentRecipes === undefined ? [] : props.currentRecipes);
    }, [props.currentRecipes]);

    const inputHanler = event => {
        setSearchName(event.target.value);
    };


    const selectHandler = recipe => {
        const newRecipes = !selectedRecipes.some(item => item.name === recipe.name)
            ? [...selectedRecipes, recipe]
            : selectedRecipes.filter(item => item.name !== recipe.name);
        setSelectedRecipes(newRecipes);
        props.submitHandler(newRecipes);
        };

    const filteredRecipes = (recipeList) => recipeList.filter(recipe => !searchName || searchName.length === 0 || recipe.name.toLowerCase().includes(searchName.toLowerCase()));

    const sortedRecipes = filteredRecipes(recipes).sort((a, b) => {
        if (selectedRecipes.some(recipe => a.name === recipe.name)) {
            return -1;
        }
        return 1;
    })

    return (
        <StyledModal show={props.show}>
            <Overlay onClick={() => {
                        props.closeHandler();
                        setSearchName("");
                        }
                    }/>
            <StyledModalBox>
                <HeadingBox>
                    <ModalName>Select a recipe</ModalName>
                    <SearchInputBox type="text" name="name" value={searchName} onChange={inputHanler} placeholder="Search..."/>
                    <StyledIconButton onClick={() => {
                        props.closeHandler();
                        setSearchName("");
                        }
                    }/>
                </HeadingBox>
                <ModalContent>
                    {sortedRecipes.map(item =>
                        <RecipeItem
                            key={item.id}
                            selected={selectedRecipes.some(recipe => item.name === recipe.name) ? "2px solid var(--color-primary-light)" : null }
                            recipe={item}
                            onClickHandler={selectHandler}/>
                        )}
                </ModalContent>
            </StyledModalBox>
        </StyledModal>
    )
};

export default ModalMenu;