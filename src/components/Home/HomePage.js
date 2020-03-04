import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem min-content;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 5rem;
    background-size: cover;

`;

const Content = styled.div`
    height: 50rem;
    grid-row: 2;
    grid-column: 3 / 9;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    background-color: var(--color-tertiary);
    margin-bottom: 5rem;
`;

const HomePage = () => {
    return (
        <Wrapper>
            <Header />
            <Content />
        </Wrapper>
    )
};

export default HomePage;