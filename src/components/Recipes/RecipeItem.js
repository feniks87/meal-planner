import React from 'react';
import styled from 'styled-components';

const StyledRecipe = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;
    column-gap: 2rem;
    margin-top: 5rem;
`;

const StyledImage = styled.img`
    grid-column: 1;
    grid-row: 1 / 4;
    width: 10rem;
    height: 10rem;
`;

const StyledRecipeName = styled.div`
    grid-column: 2;
    grid-row: 1;
    margin-top: -.5rem;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
`;

const StyledRecipeIngs = styled.div`
    grid-column: 2;
    grid-row: 2;
    font-size: 1.6rem;
`;

const StyledRecipeDirections = styled.div`
    grid-column: 2;
    grid-row: 3;
    font-size: 1.6rem;
`;

const RecipeItem = (props) => (
    <StyledRecipe id={props.recipe.id}>
        <StyledImage src={props.recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'} />
        <StyledRecipeName onClick={() => props.onClickHandler(props.recipe)}>{props.recipe.name}</StyledRecipeName>
        <StyledRecipeIngs>{props.recipe.ings}</StyledRecipeIngs>
        <StyledRecipeDirections>{props.directions}</StyledRecipeDirections>
    </StyledRecipe>
)

export default RecipeItem;