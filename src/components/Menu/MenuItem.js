import React from 'react';
import styled from 'styled-components';

const MenuItemBox = styled.div`
    width: 30rem;
    height: 15rem;
    background-color: white;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    margin: 1.5rem;
`;

const WeekDay = styled.div`
    text-align: center;
    font-weight: 600;
    margin-bottom: 2.5rem;
`;

const RecipeItem = styled.div`
    text-align: center;
`;


const MenuItem = (props) => (
    <MenuItemBox>
        <WeekDay>{props.weekDay}</WeekDay>
        <RecipeItem>{props.recipeItem}</RecipeItem>
    </MenuItemBox>
);

export default MenuItem;

