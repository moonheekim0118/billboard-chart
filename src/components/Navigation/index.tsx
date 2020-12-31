import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <Container>
            <MenuWrapper>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/findChart">find chart</MenuItem>
            </MenuWrapper>
        </Container>
    );
};

const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 80px;

    background-color: rgba(144, 144, 144, 0.8);
`;

const MenuWrapper = styled.div`
    display: flex;
`;

const MenuItem = styled(Link)`
    color: #fff;
    font-size: 1.4em;
    text-decoration: none;
    font-weight: bold;
    height: 100%;
    padding: 20px 30px 30px 20px;

    transition: background-color 0.5s ease;

    &:hover {
        background-color: #fff;
        text-decoration: underline;
        color: #34495e;
    }
`;

export default Navigation;
