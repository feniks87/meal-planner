import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 46rem 10rem min-content min-content 7rem;
    grid-template-columns: repeat(10, 1fr);
`;

const HomePage = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    )
};

export default HomePage;