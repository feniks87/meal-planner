import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import LogoImg from '../assets/logo-yellow.png'

const StyledFooter = styled.footer`
    grid-row: 3;
    grid-column: 1 / -1;
    background-color: var(--color-grey);
    color: var(--color-primary);

    display: grid;
    grid-template-rows: min-content, min-content;
    grid-template-columns: 1fr;
    justify-content: center;
`;

const StyledLogo = styled.div`
    grid-row: 1;
    justify-self: center;
    margin-top: 1.5rem;
`;

const Copyright = styled.div`
    grid-row: 2;
    justify-self: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

`;

const Footer = () => (
    <StyledFooter>
        <StyledLogo>
            <Logo src={LogoImg}/>
        </StyledLogo>
        < Copyright>&copy; 2019 Meal planner</Copyright>
    </StyledFooter>
);

export default Footer;
