import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
`;

const Heading = styled.h2`
    grid-column: 4 / 6;
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
    color: var(--color-text);
    z-index: 100;
`;

const StyledForm = styled.form`
    grid-column: 3 / -4;
    grid-row: 3 / 10;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: white;
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 1 / 11;
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

    ::placeholder {
        color: #bbb;
        font-family: inherit;
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
`;

const Button = styled.button`
    background-color: var(--color-primary-light);
    border: none;
    display: block;
    color: var(--color-text);
    outline: none;
    cursor: pointer;
    padding: 1.5rem;
    margin: 3rem auto;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
`;

const CreateRecipe = () => (
    <Wrapper>
        <Heading>Create recipe</Heading>
        <StyledForm>
            <Input placeholder="Recipe name"/>
            <TextArea placeholder="Ingredients"/>
            <TextArea placeholder="Cooking directions"/>
            <Button>Add recipe</Button>
        </StyledForm>
        <Rectangle />
    </Wrapper>

);

export default CreateRecipe;