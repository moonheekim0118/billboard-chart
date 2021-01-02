import React from 'react';
import styled from 'styled-components';

const Chart = () => {
    return <Container></Container>;
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

export default Chart;
