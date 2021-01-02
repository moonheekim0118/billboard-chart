import React from 'react';
import musicInfo from '../../model/musicInfo';
import Card from '../Card';
import styled from 'styled-components';

interface Props {
    charts: musicInfo[];
}

const Chart = (props: Props) => {
    return (
        <Container>
            {props.charts.map((value) => (
                <Card key={value.rank} music={value} />
            ))}
        </Container>
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

export default Chart;
