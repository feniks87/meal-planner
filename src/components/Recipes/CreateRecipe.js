import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    margin-left: 8rem;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;
`;

const StyledForm = styled.form`
    grid-column: 3 / -4;
    grid-row: 2;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
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

const CreateRecipe = (props) => {
    return (
    <Wrapper>
        <Heading>Create recipe</Heading>
        <StyledForm onSubmit={props.submitHandler}>
            <Input name={props.recipeName} value={props.inputName} onChange={props.inputHandler} placeholder="Recipe name"/>
            <TextArea name={props.ingName} value={props.inputIngs} onChange={props.inputHandler} placeholder="Ingredients"/>
            <TextArea name={props.directionsName} value={props.inputDirections} onChange={props.inputHandler} placeholder="Cooking directions"/>
            <Button type="submit">Add recipe</Button>
        </StyledForm>
        <Rectangle />
    </Wrapper>
    )
}

export default CreateRecipe;