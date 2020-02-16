import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: var(--color-primary-light);
    border: none;
    display: block;
    color: var(--color-grey);
    outline: none;
    cursor: pointer;
    padding: 1.5rem;
    margin: 3rem auto;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .2s;

    :hover {
        background-color: var(--color-primary);
        font-weight: 600;
    }
`;

const Button = (props) => {
    return (
        <StyledButton type={props.type} onClick={props.onClick}>{props.children}</StyledButton>
    )
};

export default Button;