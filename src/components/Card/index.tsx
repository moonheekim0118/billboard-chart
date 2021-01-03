import React from 'react';
import styled from 'styled-components';
import { searchResult } from '../../model/searchResult';

interface Props {
    data: searchResult;
}

const Card = (props: Props) => {
    return (
        <Container>
            <MusicInfo>
                <Album src={props.data.result.song_art_image_thumbnail_url} />
                <Info>
                    <Title>{props.data.result.title}</Title>
                    <Artist>{props.data.result.primary_artist.name}</Artist>
                </Info>
            </MusicInfo>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #fff;

    margin-top: 25px;
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    border-radius: 10px;

    cursor: pointer;
    transition: box-shadow 0.5s ease;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
    }
`;

const MusicInfo = styled.div`
    display: flex;
    width: 100%;
`;

const Album = styled.img`
    font-size: 1.2em;
    margin-right: 35px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-right: 1px solid #eaeae1;

    color: #34495e;
`;

const Info = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 1.3em;
`;

const Artist = styled.span`
    font-size: 1.1em;

    transition: color 0.3s ease;
    &:hover {
        color: #eb4034;
    }
`;

export default Card;
