import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <Container>
            {/* <MusicInfo>
                <Rank>{props.music.rank}</Rank>
                <Info>
                    <Title>{props.music.title}</Title>
                    <Artist>{props.music.artist}</Artist>
                </Info>
            </MusicInfo>
            <LastWeek>으잉</LastWeek> */}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 100%;
    height: 80px;
    background-color: #fff;

    margin-top: 25px;
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    border-radius: 10px;

    cursor: pointer;
    transition: box-shadow 0.5s ease;
    &:hover {
        box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
    }
`;

const MusicInfo = styled.div`
    display: flex;
`;

const Rank = styled.span`
    font-size: 1.2em;
    margin-right: 35px;
    border-right: 1px solid #eaeae1;
    padding: 25px 20px;

    color: #34495e;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
`;

const Title = styled.span`
    font-size: 1.2em;
`;

const Artist = styled.span`
    font-size: 1.1em;
`;

const LastWeek = styled.div`
    padding: 25px 20px;
`;
export default Card;
