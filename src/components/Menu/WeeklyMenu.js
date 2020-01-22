import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MenuItem from './MenuItem';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem 10rem min-content min-content 7rem;
    grid-template-columns: repeat(10, 1fr);
`;

const StyledMenuBox = styled.div`
    grid-column: 3 / -3;
    grid-row: 3;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    padding: 7rem;
`;

const Rectangle = styled.div`
    grid-column: 4 / 9;
    grid-row: 2 / -2;
    background-color: var(--color-primary);
    z-index: 20;
    margin: 10rem 0;
`;

const WeeklyMenu = () => (
    <Wrapper>
        <Header />
        <StyledMenuBox>
            <MenuItem
                weekDay="Monday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Tuesday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Wednesday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Thursday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Friday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Saturday"
                recipeItem="Teriyaki chicken"/>
            <MenuItem
                weekDay="Sunday"
                recipeItem="Teriyaki chicken"/>
        </StyledMenuBox>
        <Rectangle />
    </Wrapper>
)

export default WeeklyMenu;
