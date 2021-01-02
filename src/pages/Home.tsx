import React from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';
const MocData = [
    {
        title: 'sample',
        artist: 'sample',
        rank: '1',
        LastWeek: '1',
    },
    {
        title: 'sample',
        artist: 'sample',
        rank: '2',
        LastWeek: '2',
    },
];

const Home = () => {
    return (
        <Layout title={'Today'}>
            <Chart charts={MocData} />
        </Layout>
    );
};

export default Home;
