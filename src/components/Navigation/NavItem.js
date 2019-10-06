import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
    box-sizing: border-box;
    display: block;
    padding: 0 2rem;
`;

const Link = styled.a`
    color: var(--color-secondary);
    font-size: 2.1rem;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    :hover {
        color: var(--color-grey);
    }
`;

const NavItem = (props) => (
    <StyledItem>
        <Link href="#">{props.children}</Link>
    </StyledItem>
);

NavItem.propTypes = {
    children: PropTypes.element.isRequired
};

export default NavItem;