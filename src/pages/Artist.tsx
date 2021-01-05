import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { api } from '../api';
import { result } from '../model/searchResult';
import { pathParser } from '../util/pathParser';
import styled from 'styled-components';

const Artist = (props) => {
    // path parsing
    const artist = pathParser(props.location.pathname, '/artist/');
    const [result, setResult] = useState<result[]>([]);
    const [page, setPage] = useState<number>(1);

    // page가 변경될 때 fetch를 다시 한다.
    useEffect(() => {
        fetchAPI();
    }, [page]);

    // API fetch 보내고, 받아온 값 저장하는 함수
    const fetchAPI = useCallback(async () => {
        const response = await api.getArtistInfo(artist, page.toString());
        setResult(response.data.songs);
    }, [page, result]);

    // target 으로 page Number를 받아와서 page number를 변경한다.
    const paginate = useCallback((target: number) => {
        setPage(target);
    }, []);

    return (
        <Layout title={'artist'}>
            <Container>
                {result.length > 0 &&
                    result.map((data) => <Card key={data.id} data={data} />)}
                <Pagination nowPage={page} paginate={paginate} />
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

export default Artist;
