import React from 'react';
import Layout from '../components/Layout';
import { pathParser } from '../util/pathParser';

const Artist = (props) => {
    const artist = pathParser(props.location.pathname, '/artist/');
    return (
        <Layout title={'artist'}>
            <div>{artist}</div>
        </Layout>
    );
};

export default Artist;
