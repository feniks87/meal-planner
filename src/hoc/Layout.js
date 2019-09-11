import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
    font-size: 2rem;
`;

const Content = styled.main`
    height: 40rem;
    background-color: lightgray;
`;

const Footer = styled.main`
    height: 5rem;
    background-color: darkgray;
`;

const Layout = (props) => (
    <Wrapper>
        <Header/>
        <Content>{props.children}</Content>
        <Footer/>
    </Wrapper>
);

export default Layout;



