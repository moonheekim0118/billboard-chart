import React, { useCallback, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Card from '../components/Card';
import { api } from '../api';
import { searchResult } from '../model/searchResult';
import { setItem, getItem } from '../util/sessionStorage';
import styled from 'styled-components';

const Home = () => {
    // search Result 저장
    const [searchData, setData] = useState<searchResult[]>([]);
    const [searchKeyword, setKeyword] = useState<string>('');

    useEffect(() => {
        setKeyword(getItem('keyword'));
        setData(getItem('searchResult'));
    }, []);

    // api request 함수
    const fetchAPI = useCallback(async (value: string) => {
        const result = await api.search(value);
        setData(result.data);
        setItem('searchResult', result.data);
    }, []);

    return (
        <Layout title={'search'}>
            <Container>
                <Search keyword={searchKeyword} fetchAPI={fetchAPI} />
                {searchData.length > 0 &&
                    searchData.map((data) => (
                        <Card key={data.result.id} data={data} />
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
