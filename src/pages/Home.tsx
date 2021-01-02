import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import styled from 'styled-components';

const Home = () => {
    useEffect(() => {}, []);

    return (
        <Layout title={'search'}>
            <Container>
                <Search />
            </Container>
        </Layout>
    );
};

const Container = styled.div`
    width: 500px;
    height: 100%;

    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 90%;
    }
`;

export default Home;
