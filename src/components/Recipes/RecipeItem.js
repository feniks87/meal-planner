import React from 'react';
import styled from 'styled-components';

const StyledRecipeBox = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: .5rem;
    column-gap: .8rem;
    margin-top: 1.5rem;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    cursor: pointer;
    transition: all .2s;
    border: ${props => props.selected || null};

    :hover {
        box-shadow: 0 0 2rem rgba(0,0,0,.3);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr 10rem;
        padding: 1.5rem;
    }
`;

const StyledImage = styled.img`
    grid-column: 1;
    grid-row: 1 / 4;
    width: 10rem;
    height: 10rem;

    @media (max-width: 550px) {
        grid-row: 1 / 2;
        grid-column: 2;
    }
`;

const StyledRecipeName = styled.div`
    grid-column: 2;
    grid-row: 1;
    margin-top: -.5rem;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all .2s;

    :hover {
        color: var(--color-primary-dark);
    }

    @media (max-width: 550px) {
        align-self: center;
        grid-column: 1;
        font-size: 2.3rem;
    }
`;

const StyledRecipeIngs = styled.div`
    grid-column: 2;
    grid-row: 2;
    font-size: 1.6rem;

    @media (max-width: 550px) {
        grid-column: 1 / -1;
        text-align: justify;
    }
`;

const StyledRecipeDirections = styled.div`
    grid-column: 2;
    grid-row: 3;
    font-size: 1.6rem;
`;

const RecipeItem = (props) => (
    <StyledRecipeBox id={props.recipe.id} selected={props.selected}
                    onClick={() => props.onClickHandler(props.recipe)}>
        <StyledImage src={props.recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'} />
        <StyledRecipeName >{props.recipe.name}</StyledRecipeName>
        <StyledRecipeIngs>{props.recipe.ings}</StyledRecipeIngs>
        <StyledRecipeDirections>{props.directions}</StyledRecipeDirections>
    </StyledRecipeBox>
)

export default RecipeItem;