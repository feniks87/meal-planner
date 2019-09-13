import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledItems = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin: 0 auto;
`;

const NavItems = () => (
    <StyledItems>
        <NavItem>My menu</NavItem>
        <NavItem>My recipes</NavItem>
        <NavItem>Create recipe</NavItem>
    </StyledItems>
);

export default NavItems;