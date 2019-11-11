import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeItem from './RecipeItem';
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
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
    padding: 3rem;
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

const RecipeList = () => {
    const recipes = useSelector(state => state);

    return (
        <div>
            <Wrapper>
                <Heading>Recipes</Heading>
                <StyledList>
                    {recipes.map(item =>
                        <RecipeItem
                            name={item.name}
                            ings={item.ings}
                            directions={item.directions}/>
                    )}
                </StyledList>
                <Rectangle />
            </Wrapper>
        </div>
    );
}


export default RecipeList;