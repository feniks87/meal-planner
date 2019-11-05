import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import CreateRecipe from '../components/Recipes/CreateRecipe';
import RecipeList from '../components/Recipes/RecipeList';
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

const Layout = () => (
    <Wrapper>
        {/* <Header/> */}
        <NavBar />
        <Content>
            <RecipeList />
        </Content>
        <Footer/>
    </Wrapper>
);

export default Layout;


