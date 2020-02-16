import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../assets/header.jpg';
import NavBar from '../components/Navigation/NavBar';

const StyledHeader = styled.header`
    grid-column: 1 / -1;
    height: 46rem;
    background-color: var(--color-tertiary);
    background-size: cover;
    background-position: top;
    border-bottom: 4px solid var(--color-primary);
    display: grid;
    justify-content: center;
    grid-template-rows: 4rem repeat(7, 1fr);
    grid-template-columns: repeat(15, 1fr);
`;

const Quote = styled.div`
    grid-column: 5 / 10;
    grid-row: 5/ 7;
    font-size: 2.5rem;
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
    grid-row: 1 / -1;

    background-color: var(--color-primary);
    z-index: 20;
`;

const Header = () => (
    <StyledHeader>
        <NavBar />
        <Text>
            <TextItem>Plan,</TextItem>
            <TextItem>Shop,</TextItem>
            <TextItem>Cook.</TextItem>
        </Text>
        <Quote>
            <QuoteText>People want honest, flavourful food, not some show-off meal that takes days to prepare.</QuoteText>
            <QuoteAuthor>Ted Allen</QuoteAuthor>
        </Quote>
        <Image />
        <Rectangle />
    </StyledHeader>
)

export default Header;