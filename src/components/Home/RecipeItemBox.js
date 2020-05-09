import React from 'react';
import styled from 'styled-components';

const StyledItemBox = styled.div`
    width: 100%;
    min-height: 14rem;
    box-shadow: 0 0 1rem rgba(0,0,0,.2);
    padding: 2rem;
    box-sizing: border-box;
    border-bottom: 7px solid var(--color-primary-light);
    background-image: url(${props => props.image});
    background-size: cover;
    border-radius: 2px;
    transition: all .2s;
    cursor: pointer;

    :hover {
        transform: scale(1.05);
    }

    @media (max-width: 435px) {
        height: 20rem;
    } 
`;

const RecipeName = styled.div`
    background-color: var(--color-primary-light);
    padding: .5rem;
    color: var(--color-grey);
    line-height: 1;
    text-align: center;
    margin-top: -3rem;
    margin-right: -3rem;

    @media (max-width: 500px) {
        padding: 1rem;
        margin-top: -3.5rem;
        margin-right: -3.5rem;
        font-size: 2.2rem;
    }
`;

const RecipeItemBox = (props) => {
    return (
    <StyledItemBox image={props.image} recipe={props.recipe} onClick={() => props.click(props.recipe)}>
        <RecipeName>{props.recipeName}</RecipeName>
    </StyledItemBox>
    )

}

export default RecipeItemBox;