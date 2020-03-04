import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import MenuModal from './MenuModal';
import { useState, useEffect } from 'react';
import axios from '../../helpers/axios-instance';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 10rem min-content 7rem;
    grid-template-columns: repeat(13, 1fr);
    margin: 10rem 0;
`;

const Heading = styled.h2`
    grid-column: 5 / 11;
    grid-row: 2 / 3;
    margin-left: 8rem;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;
`;

const StyledMenuBox = styled.div`
    grid-column: 4 / -4;
    grid-row: 3;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    margin: -1.5rem 0;
`;

const Rectangle = styled.div`
    grid-column: 5 / 11;
    grid-row: 1 / 4;
    background-color: var(--color-primary);
    z-index: 20;
    margin-bottom: 2rem;
`;

const WeeklyMenu = () => {
    const [isOpen, setOpenModal] = useState(false);
    const [menu, setMenu] = useState([]);
    const [weekDay, setWeekDay] = useState("");
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    useEffect(() => {
        axios.get('/menu.json')
            .then(menuItems => {
            const fetchedMenu = [];
            for (let key in menuItems.data) {
                fetchedMenu.push({
                    ...menuItems.data[key]
                });
            }
            setMenu(fetchedMenu);
        })
        .catch(error => {error.toString()});
    }, []);

    const closeModalHandler = () => {
        setOpenModal(!isOpen);
    };

    const openModalHandler = (weekDay) => {
        setOpenModal(!isOpen);
        setWeekDay(weekDay);

        const currentDayMenu = menu.find(item => item.day === weekDay);
        const currentRecipes = currentDayMenu.recipes;
        setSelectedRecipes(currentRecipes);
    };

    const submitRecipeHandler = (recipes) => {
        setOpenModal(!isOpen);
        const newMenu = menu.map(item =>
            item.day === weekDay ? {...item, recipes: recipes} : item
            );
        setMenu(newMenu);
        axios.put('/menu.json', newMenu)
            .then(response => console.log(response))
            .catch(error => error.toString())
    };

    return (
        <Wrapper>
            <Heading>Menu</Heading>
            <StyledMenuBox>
                {menu.map(menuItem =>
                    <MenuItem
                        weekDay={menuItem.day}
                        recipeItems={menuItem.recipes}
                        click={openModalHandler}
                         />
                )}
            </StyledMenuBox>
            <Rectangle />
            <MenuModal
                show={isOpen ? "show" : ""}
                submitHandler={submitRecipeHandler}
                closeHandler={closeModalHandler}
                currentRecipes={selectedRecipes}/>

        </Wrapper>
    )
};

export default WeeklyMenu;
