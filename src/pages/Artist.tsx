import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { api } from '../api';
import { result } from '../model/searchResult';
import { pathParser } from '../util/pathParser';
import styled from 'styled-components';
import { doc } from 'prettier';

const Artist = (props) => {
    // path parsing
    const artist = pathParser(props.location.pathname, '/artist/');
    const [result, setResult] = useState<result[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<number>(1);

    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset +
                    document.documentElement.clientHeight +
                    100 >=
                document.documentElement.scrollHeight
            ) {
                console.log(nextPage, loading);
                if (nextPage && !loading) {
                    fetchAPI();
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [result, nextPage, loading]);

    const fetchAPI = useCallback(async () => {
        setLoading(true);
        const response = await api.getArtistInfo(artist, nextPage.toString());
        setNextPage(response.data.next_page);
        const mergedArray = result.concat(response.data.songs);
        setResult(mergedArray);
        setLoading(false);
    }, [nextPage]);

    return (
        <Layout title={'artist'}>
            <Container>
                {result.length > 0 &&
                    result.map((data) => <Card key={data.id} data={data} />)}
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
