import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div.attrs(props => ({
    backgroundColor: props.backgroundColor || "#FED403",
}))`
    width: 100%;
    position: fixed;
    top: 0;
    height: 4rem;
    background-color: ${props => props.backgroundColor};
    z-index: 150;
`;

const NavBar = (props) => (
    <StyledNav backgroundColor={props.backgroundColor}>

    </StyledNav>
)

export default NavBar;