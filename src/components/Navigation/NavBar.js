import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import Logo from '../../assets/logo.png';

const StyledNav = styled.nav.attrs(props => ({
    backgroundColor: props.backgroundColor || 'var(--color-primary)',
    navPosition: props.navPosition || 'fixed',
}))`
    grid-column: 3 / -5;
    grid-row: 1;
    width: 100%;
    position: ${props => props.navPosition};
    top: 0;
    height: 4rem;
    background-color: ${props => props.backgroundColor};
    z-index: 150;
    display: flex;
    padding: 2rem 0;

`;

const StyledLogo = styled.img`
    width: 4rem;
`;

const NavBar = (props) => (
    <StyledNav backgroundColor={props.backgroundColor} navPosition={props.navPosition}>
        <StyledLogo src={Logo} />
        <NavItems />
    </StyledNav>
)

export default NavBar;