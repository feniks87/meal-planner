import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`
    grid-column: ${props => props.gridColumn || "4 / 9"};
    grid-row: ${props => props.gridRow || "2 / -1"};
    background-color: var(--color-primary);
    z-index: 20;
    margin-bottom: ${props => props.marginBottom || ""};

    @media (max-width: 550px) {
        display: none;
        grid-column: 2 / -2;
    }
`;

const Rectangle = (props) => {
    return (
        <StyledRectangle 
            gridColumn={props.gridColumn}
            gridRow={props.gridRow}
            marginBottom={props.marginBottom} />
    );
};


export default Rectangle;