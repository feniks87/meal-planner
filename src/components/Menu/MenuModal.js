import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
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

const StyledModalBox = styled.div`
    position: absolute;
    width: 60vw;
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
`;

const HeadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--color-primary);
    width: 60vw;
    position: fixed;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
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
    max-height: 35rem;
    overflow: auto;
`;

const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
`;

const ModalMenu = (props) => {
    const [searchName, setSearchName] = useState("");
    const recipes = useSelector(state => state.recipeReducer.recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const inputHanler = (event) => {
        setSearchName(event.target.value);
    };

    const filteredRecepies = (recipeList) => recipeList.filter(recipe => !searchName || searchName.length === 0 || recipe.name.toLowerCase().includes(searchName.toLowerCase()));

    return (
        <StyledModal show={props.show}>
            <StyledModalBox>
                <HeadingBox>
                    <ModalName>Select a recipe</ModalName>
                    <SearchInputBox type="text" name="name" value={searchName} onChange={inputHanler} placeholder="Search..."/>
                    <StyledIconButton onClick={props.closeHandler}/>
                </HeadingBox>
                <ModalContent>
                    {filteredRecepies(recipes).map(item =>
                        <RecipeItem
                            recipe={item}
                            onClickHandler={props.onClickHandler}/>
                        )}
                </ModalContent>
                <ModalActions>
                    <Button onClick={props.submitHandler}>select</Button>
                    <Button onClick={props.closeHandler}>Close</Button>
                </ModalActions>
            </StyledModalBox>
        </StyledModal>
    )
}

export default ModalMenu;