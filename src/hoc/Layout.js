import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/Navigation/NavBar';
import BackgroundImage from '../assets/background.jpg';

const Wrapper = styled.div`
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: 7rem minmax(min-content, calc(100vh - 37rem)) min-content;
`;

const Content = styled.main`
    grid-row: 2;
    grid-column: 1 / -1;
    background-image: url(${BackgroundImage});
    background-size: cover;
`;

const Layout = (props) => (
    <Wrapper>
        <NavBar />
        <Content>
            {props.children}
        </Content>
        <Footer/>
    </Wrapper>
);

export default Layout;



