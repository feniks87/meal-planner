import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MenuItem from './MenuItem';
import MenuModal from './MenuModal';
import { useState, useEffect } from 'react';
import axios from '../../helpers/axios-instance';

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

const WeeklyMenu = () => {
    const [isOpen, setOpenModal] = useState(false);
    const [menu, setMenu] = useState([])


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
            console.log(fetchedMenu);
        })
        .catch(error => {
            error.toString();
        });
    }, []);



    const closeModalHandler = () => {
        setOpenModal(!isOpen);

    };

    const openModalHandler = () => {
        setOpenModal(!isOpen);
    };

    const submitRecipeHandler = () => {

    };

    return (
        <Wrapper>
            <Header />
            <StyledMenuBox>
                {menu.map(menuItem =>
                    <MenuItem
                        weekDay={menuItem.day}
                        recipeItem={menuItem.recipe}
                        click={openModalHandler}
                    />
                )}

            </StyledMenuBox>
            <MenuModal
                show={isOpen ? "show" : ""}
                submitHandler={submitRecipeHandler}
                closeHandler={closeModalHandler}
            />
            <Rectangle />
        </Wrapper>
    )


}

export default WeeklyMenu;
