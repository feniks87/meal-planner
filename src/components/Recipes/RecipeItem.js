import React from 'react';
import styled from 'styled-components';

const StyledRecipeBox = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: .5rem;
    column-gap: .5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    cursor: pointer;
    transition: all .2s;

    :hover {
        box-shadow: 0 0 2rem rgba(0,0,0,.3);
    }
`;

const StyledImage = styled.img`
    grid-column: 1;
    grid-row: 1 / 4;
    width: 8rem;
    height: 8rem;
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
    <StyledRecipeBox id={props.recipe.id}
                    onClick={() => props.onClickHandler(props.recipe)}>
        <StyledImage src={props.recipe.imageURL || 'https://react.semantic-ui.com/images/wireframe/image.png'} />
        <StyledRecipeName >{props.recipe.name}</StyledRecipeName>
        <StyledRecipeIngs>{props.recipe.ings}</StyledRecipeIngs>
        <StyledRecipeDirections>{props.directions}</StyledRecipeDirections>
    </StyledRecipeBox>
)

export default RecipeItem;