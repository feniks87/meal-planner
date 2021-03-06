import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddButton } from '../../assets/svg/plus.svg';

const MenuItemBox = styled.div`
    width: 30rem;
    min-height: 15rem;
    background-color: white;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    margin: 1.5rem;
    position: relative;

    @media (max-width: 550px) {
        width: 40rem;
        min-height: 16rem;
    }
`;

const WeekDay = styled.div`
    text-align: center;
    font-weight: 600;
    margin-bottom: 2.5rem;    

    @media (max-width: 550px) {
        font-size: 2.5rem;
        color: var(--color-primary);
        margin-top: -.5rem;
    }
`;

const RecipeItem = styled.div`
    text-align: center;
    cursor: pointer;

    @media (max-width: 550px) {
        font-size: 2rem;
    }
`;

const StyledAddButton = styled(AddButton)`
    fill: var(--color-primary-dark);
    cursor: pointer;
    transition: all 0.3s;
    height: 2rem;
    position: absolute;
    top: 1.5rem;;
    right: 1rem;

    :hover {
        transform: scale(1.1);
        fill: var(--color-primary);
    }
`;

const MenuItem = (props) => (
    <MenuItemBox>
        <WeekDay>{props.weekDay}</WeekDay>
        <StyledAddButton onClick={() => props.buttonClick(props.weekDay)}/>
        {props.recipeItems != null ? props.recipeItems.map(item =>
            <RecipeItem key={item.id} onClick={() => props.itemClick(item)}>{item.name}</RecipeItem>
        ) : null}
    </MenuItemBox>
);

export default MenuItem;