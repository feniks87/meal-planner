import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import Logo from '../../assets/logo.png';

const StyledNav = styled.nav`
    grid-column: 1 / -1;
    grid-row: 1;
    width: 100%;
    position: fixed;
    top: 0;
    height: 4rem;
    background-color: #ffff;
    z-index: 150;
    display: flex;
    border-bottom: 2px solid var(--color-primary-light);
    padding: 1.5rem;
`;

const StyledLogo = styled.img`
    width: 4rem;
`;

const NavBar = () => (
    <StyledNav>
        <StyledLogo src={Logo} />
        <NavItems />
    </StyledNav>
);

export default NavBar;