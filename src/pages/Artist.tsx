import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useRequest from '../hooks/useRequest';
import { pathParser } from '../util/pathParser';
import styled from 'styled-components';

const Artist = (props) => {
    // path parsing
    const artist = pathParser(props.location.pathname, '/artist/');
    const [page, setPage] = useState<number>(1);
    const [data, loading, error, fetch] = useRequest('getArtistInfo', artist);

    // page가 변경될 때 fetch를 다시 한다.
    useEffect(() => {
        fetch(page.toString());
    }, [page]);

    // target 으로 page Number를 받아와서 page number를 변경한다.
    const paginate = useCallback(
        (target: number) => () => {
            setPage(target);
        },
        []
    );

    return (
        <Layout title={'artist'}>
            <Container>
                {loading && <Loading />}
                {error && <Error />}
                {!loading &&
                    data.length > 0 &&
                    data.map((element) => (
                        <Card key={element.id} data={element} />
                    ))}
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
