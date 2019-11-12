import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../../actions/recipeActions';
import { successMessage, errorMessage } from '../../actions/alertActions';
import uuid from 'uuid';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
    margin: 10rem 0;
`;

const StyledAlertMessage = styled.div`
    background-color: ${props => props.success ? "var(--color-success)" : "var(--color-error)"};
    grid-row: 1;
    grid-column: 3 / -3;
    margin-bottom: 3rem;
    padding: 1.2rem;
    font-size: 1.7rem;
    justify-items: center;
    font-family: inherit;
    border-radius: 1px;
    text-align: center;
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 2 / 3;
    margin-left: 8rem;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;
`;

const StyledForm = styled.form`
    grid-column: 3 / -4;
    grid-row: 3;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: white;
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 2 / -1;
    background-color: var(--color-primary);
    z-index: 20;
`;

const Input = styled.input`
    outline: none;
    border: 1px solid var(--color-primary-light);
    background-color: white;
    padding: 1rem;
    margin: 3rem auto;
    display: block;
    width: 90%;
    box-sizing: border-box;
    transition: 0.2s;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }

    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(247, 220, 89, .6);
    }
`;

const TextArea = styled.textarea`
    outline: none;
    border: 1px solid var(--color-primary-light);
    background-color: white;
    padding: 1rem;
    display: block;
    width: 90%;
    max-width: 90%;
    min-height: 10rem;
    box-sizing: border-box;
    margin: 3rem auto;

    ::placeholder {
        color: #bbb;
        font-family: inherit;
    }
    :focus {
        border: 1px solid var(--color-primary-light);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(247, 220, 89, .6);
    }
`;

const Button = styled.button`
    background-color: var(--color-primary-light);
    border: none;
    display: block;
    color: var(--color-grey);
    outline: none;
    cursor: pointer;
    padding: 1.5rem;
    margin: 3rem auto;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
`;

const initialRecipe = {
    id: '',
    name: '',
    ings: '',
    directions: ''
}

const CreateRecipe = () => {
    const [recipe, setRecipeItem] = useState(initialRecipe);
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alertReducer);

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
        if (recipe && recipe.name && recipe.ings && recipe.directions) {
            dispatch(addRecipe({id: uuid(), name: recipe.name, ings: recipe.ings, directions: recipe.directions}));
            dispatch(successMessage('New recipe has been successfully added to My recipes'));
        } else {
            dispatch(errorMessage('Please fill all the fields'));
        };
        setRecipeItem(initialRecipe);
    };

    return (
        <Wrapper>
            {alert.message && (alert.type === "success" ?
                <StyledAlertMessage success>{alert.message}</StyledAlertMessage> : <StyledAlertMessage>{alert.message}</StyledAlertMessage>)
            }
            <Heading>Create recipe</Heading>

            <StyledForm onSubmit={submitHandler}>

                <Input name='name' value={recipe.name} onChange={inputHandler} placeholder="Recipe name"/>
                <TextArea name='ings' value={recipe.ings} onChange={inputHandler} placeholder="Ingredients"/>
                <TextArea name='directions' value={recipe.directions} onChange={inputHandler} placeholder="Cooking directions"/>
                <Button type="submit">Add recipe</Button>
            </StyledForm>
            <Rectangle />
        </Wrapper>
    )
}

export default CreateRecipe;