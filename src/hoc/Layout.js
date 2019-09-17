import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CreateRecipe from '../components/Recipes/CreateRecipe';
import NavBar from '../components/Navigation/NavBar';

const Wrapper = styled.div`
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: 7rem repeat(2, min-content);
    grid-row-gap: 10rem;
`;

const Content = styled.main`
    grid-row: 2;
    grid-column: 1 / -1;
`;

const Footer = styled.main`
    grid-row: 3;
    grid-column: 1 / -1;
    height: 5rem;
    background-color: darkgray;
`;

const Layout = () => (
    <Wrapper>
        {/* <Header/> */}
        <NavBar />
        <Content>
            <CreateRecipe />
        </Content>
        <Footer/>
    </Wrapper>
);

export default Layout;



