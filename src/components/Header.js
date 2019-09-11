import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../assets/header.jpg';
import NavBar from '../components/Navigation/NavBar';

const StyledHeader = styled.header`
    height: 30rem;
    background-color: #ffff;
    background-size: cover;
    background-position: top;
    display: grid;
    justify-content: center;
    grid-template-rows: 4rem repeat(7, 1fr);
    grid-template-columns: repeat(15, 1fr);
`;


const Quote = styled.div`
    grid-column: 5 / 10;
    grid-row: 4 / 7;
    font-size: 1.5rem;
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
    grid-row: 3 / 7;

    display: grid;
`;

const TextItem = styled.div`
    font-size: 2.3rem;
    font-weight: 700;
`;

const Image = styled.div`
    grid-column: 11 / -2;
    grid-row: 2 / 8;
    background-image: url(${HeaderImage});
    background-size: cover;
    z-index: 100;
    border: 4px solid  #FED403;
`;

const Rectangle = styled.div`
    grid-column: 12 / 16;
    grid-row: 1 / -1;

    background-color: #FED403;
    z-index: 20;
`;

const Header = () => (
    <StyledHeader>
            <NavBar backgroundColor="transparent"/>
            <Text>
                <TextItem>Plan</TextItem>
                <TextItem>Shop</TextItem>
                <TextItem>Cook</TextItem>
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