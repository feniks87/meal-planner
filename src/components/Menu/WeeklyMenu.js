import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import MenuModal from './MenuModal';
import RecipeModal from '../Recipes/RecipeModal';
import { useState, useEffect } from 'react';
import axios from '../../helpers/axios-instance';
import Rectangle from '../UI/Rectangle';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 10rem min-content;
    grid-template-columns: repeat(13, 1fr);
    margin: 10rem 0;

    
    @media (max-width: 550px) {
        margin: 0;
    }
`;

const Heading = styled.h2`
    grid-column: 5 / 11;
    grid-row: 2 / 3;
    margin-left: 8rem;
    align-self: center;
    color: var(--color-grey);
    z-index: 100;

    @media (max-width: 550px) {
        grid-column: 1 / -1;
        justify-self: center;
        margin-left: 0;
    }
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
    min-height: 70rem;

    @media (max-width: 550px) {
        grid-column: 2 / -2;
        margin-bottom: 5rem;
    }
`;

const WeeklyMenu = () => {
    const [isOpenMenuModal, setOpenMenuModal] = useState(false);
    const [isOpenRecipeModal, setOpenRecipeModal] = useState(false);
    const [menu, setMenu] = useState([]);
    const [weekDay, setWeekDay] = useState("");
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState({});
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

    const closeModalMenuHandler = () => {
        setOpenMenuModal(!isOpenMenuModal);
    };

    const openMenuModalHandler = (weekDay) => {
        setOpenMenuModal(!isOpenMenuModal);
        setWeekDay(weekDay);
        const currentDayMenu = menu.find(item => item.day === weekDay);
        const currentRecipes = currentDayMenu.recipes;
        setSelectedRecipes(currentRecipes);
    };

    const openRecipeModalHandler = (recipe) => {
        setOpenRecipeModal(!isOpenRecipeModal);
        setSelectedRecipe(recipe);
    }

    const closeModalRecipeHandler = () => {
        setOpenRecipeModal(!isOpenRecipeModal);
    };

    const submitRecipeHandler = (recipes) => {
        setOpenMenuModal(!isOpenMenuModal);
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
                        key={menuItem.day}
                        weekDay={menuItem.day}
                        recipeItems={menuItem.recipes}
                        buttonClick={openMenuModalHandler}
                        itemClick={openRecipeModalHandler}
                         />
                )}
            </StyledMenuBox>
            <Rectangle 
                gridColumn="5 / 11"
                gridRow="1 / 4"
                marginBottom="2rem" />
            <MenuModal
                show={isOpenMenuModal ? "show" : ""}
                submitHandler={submitRecipeHandler}
                closeHandler={closeModalMenuHandler}
                currentRecipes={selectedRecipes}/>
            <RecipeModal
                show={isOpenRecipeModal ? "show" : ""}
                recipe={selectedRecipe}
                closeHandler={closeModalRecipeHandler}/>
        </Wrapper>
    )
};

export default WeeklyMenu;
