import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../assets/header.jpg';
import NavBar from '../components/Navigation/NavBar';

const StyledHeader = styled.header`
    grid-column: 1 / -1;
    height: 46rem;
    display: grid;
    justify-content: center;
    grid-template-rows: 4rem repeat(7, 1fr);
    grid-template-columns: repeat(15, 1fr);
    border-bottom: 1px solid var(--color-primary-light);
`;

const BackgroundImage = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    background-image: url(${HeaderImage});
    filter: blur(10px);
    background-size: cover;
    background-position: top;
    z-index: 1;
`;

const QuoteBox = styled.div`
    grid-column: 5 / 10;
    grid-row: 5/ 7;
    font-size: 2.5rem;
    z-index: 100;

`;

const QuoteText = styled.div`
    text-align: justify;
`;

const QuoteAuthor = styled.div`
    margin-top: 1rem;
    text-align: right;
`;

const Text = styled.div`
    grid-column: 3 / 4;
    grid-row: 4 / 8;
    z-index: 100;
    display: grid;

`;

const TextItem = styled.div`
    font-size: 3rem;
    font-weight: 700;
`;

const Image = styled.div`
    grid-column: 11 / -2;
    grid-row: 3 / 8;
    background-image: url(${HeaderImage});
    background-size: cover;
    z-index: 100;
    border: 4px solid var(--color-primary);
`;

const Rectangle = styled.div`
    grid-column: 12 / 16;
    grid-row: 2 / -1;

    background-color: var(--color-primary);
    z-index: 20;
`;

const Header = () => (
    <StyledHeader>
        <BackgroundImage />
        <NavBar />
        <Text>
            <TextItem>Plan,</TextItem>
            <TextItem>Shop,</TextItem>
            <TextItem>Cook.</TextItem>
        </Text>
        <QuoteBox>
            <QuoteText>People want honest, flavourful food, not some show-off meal that takes days to prepare.</QuoteText>
            <QuoteAuthor>Ted Allen</QuoteAuthor>
        </QuoteBox>
        <Image />
        <Rectangle />
    </StyledHeader>
)

export default Header;