import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledItem = styled.li`
    box-sizing: border-box;
    display: block;
    padding: 0 2rem;
`;

const StyledLink = styled(NavLink)`
    color: var(--color-secondary);
    font-size: 2.1rem;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    transition: all .2s;

    &:hover {
        color: var(--color-grey);
    }
`;

const NavItem = (props) => (
    <StyledItem>
        <StyledLink to={props.link} activeStyle={{color: "var(--color-grey)"}}>{props.children}</StyledLink>
    </StyledItem>
);

NavItem.propTypes = {
    children: PropTypes.string.isRequired
};

export default NavItem;