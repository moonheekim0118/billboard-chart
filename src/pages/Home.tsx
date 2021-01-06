import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Card from '../components/Card';
import Loading from '../components/Loading';
import useRequest from '../hooks/useRequest';
import { getItem } from '../util/sessionStorage';
import styled from 'styled-components';

const Home = () => {
    const [searchKeyword, setKeyword] = useState<string>('');
    const [data, loading, error, fetch] = useRequest('search');

    useEffect(() => {
        setKeyword(getItem('keyword'));
    }, []);

    return (
        <Layout title={'search'}>
            <Container>
                <Search keyword={searchKeyword} fetchAPI={fetch} />
                {loading && <Loading />}
                {!loading &&
                    data.length > 0 &&
                    data.map((element) => (
                        <Card
                            key={element.result.id}
                            data={element.result}
                            search={true}
                        />
                    ))}
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
