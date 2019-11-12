import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem 10rem 1fr 7rem;
    grid-template-columns: repeat(10, 1fr);
`;

// const Heading = styled.h2`
//     grid-column: 4 / 6;
//     grid-row: 2 / 3;
//     margin-left: 8rem;
//     align-self: center;
//     color: var(--color-grey);
//     z-index: 100;
// `;

const StyledBox = styled.form`
    grid-column: 3 / -4;
    grid-row: 3;
    box-shadow: 0 3px 10px #ccc;
    border: 1px solid #eee;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 100;
    background-color: var(--color-primary);
    height: 50rem;
`;

// const Rectangle = styled.div`
//     grid-column: 4 / 9;
//     grid-row: 2 / -1;
//     background-color: var(--color-primary);
//     z-index: 20;
// `;

const WeeklyMenu = () => (
    <Wrapper>
        <Header />
        {/* <Heading>My weekly menu</Heading> */}
        <StyledBox>

        </StyledBox>
        {/* <Rectangle /> */}
    </Wrapper>
)

export default WeeklyMenu;
