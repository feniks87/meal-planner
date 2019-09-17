import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledItems = styled.ul`
    display: flex;
    margin: 0 auto;
    padding-left: 0;
`;

const NavItems = () => (
    <StyledItems>
        <NavItem>My menu</NavItem>
        <NavItem>My recipes</NavItem>
        <NavItem>Create recipe</NavItem>
    </StyledItems>
);

export default NavItems;