import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';


const StyledItems = styled.ul`
    display: flex;
    margin: 0 auto;
    padding-left: 0;
    text-align: center;

    @media (max-width: 550px) {
        align-items: center;
    }
`;

const NavItems = () => (
    <StyledItems>
        <NavItem link="/menu">My menu</NavItem>
        <NavItem link="/recipe-list">My recipes</NavItem>
        <NavItem link="/create-recipe">Create recipe</NavItem>
    </StyledItems>
);

export default NavItems;