import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../assets/header.jpg';
import BackgroundImg from '../assets/cover.jpg';
import NavBar from '../components/Navigation/NavBar';
import Rectangle from './UI/Rectangle';

const StyledHeader = styled.header`
    grid-column: 1 / -1;
    height: 46rem;
    display: grid;
    justify-content: center;
    grid-template-rows: 4rem repeat(7, 1fr);
    grid-template-columns: repeat(15, 1fr);
    border-bottom: 1px solid var(--color-primary-light);

    @media (max-width: 950px) {
        grid-template-rows: 4rem repeat(6, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-rows: 5rem repeat(2, 1fr) 2rem;
        height: 30rem;
        background-image: url(${HeaderImage});
        background-size: cover;
    }
`;

const BackgroundImage = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    background-image: url(${BackgroundImg});
    opacity: 0.6;
    background-size: cover;
    background-position: top;
    z-index: 1;
`;

const QuoteBox = styled.div`
    grid-column: 5 / 10;
    grid-row: 5/ 7;
    font-size: 2.5rem;
    z-index: 100;

    @media (max-width: 950px) {
        grid-row: 5 / 6;
        grid-column: 2 / 10;
    }

    @media (max-width: 550px) {
        grid-row: 3 / 4;
        grid-column: 2 / -2;
        font-size: 2.2rem;
    }
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

    @media (max-width: 950px) {
        grid-row: 3 / 4;
        grid-column: 2 / 10;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 550px) {
        grid-row: 2 / 3;
        grid-column: 2 / -2;
    }
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

    @media (max-width: 950px) {
        grid-row: 3 / 7;
        grid-column: 11 / -1;
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

const Header = () => (
    <StyledHeader>
        <BackgroundImage />
        <NavBar />
        <Text>
            <TextItem>Plan</TextItem>
            <TextItem>Cook</TextItem>
            <TextItem>Enjoy</TextItem>
        </Text>
        <QuoteBox>
            <QuoteText>People want honest, flavourful food, not some show-off meal that takes days to prepare.</QuoteText>
            <QuoteAuthor>Ted Allen</QuoteAuthor>
        </QuoteBox>
        <Image />
        <Rectangle 
            gridColumn="12 / 16" />
    </StyledHeader>
)

export default Header;