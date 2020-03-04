import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
    width: 4rem;
`;

const Logo = (props) => (
    <StyledLogo src={props.src} />
);

export default Logo;