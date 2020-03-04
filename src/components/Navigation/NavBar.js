import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import Logo from '../Logo';
import LogoImg from '../../assets/logo.png';
import { NavLink } from 'react-router-dom'

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
    border-bottom: 2px solid var(--color-primary);
    padding: 1.5rem;
    background-color: var(--color-primary-light);
`;

const NavBar = () => (
    <StyledNav>
        <NavLink to="/"><Logo src={LogoImg}/></NavLink>
        <NavItems />
    </StyledNav>
);

export default NavBar;