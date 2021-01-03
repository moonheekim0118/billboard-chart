import React from 'react';
import styled from 'styled-components';
import { searchResult } from '../../model/searchResult';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    data: searchResult;
}

const Card = (props: Props) => {
    return (
        <Container>
            <MusicInfo>
                <Album
                    alt={'album art'}
                    height={'150px'}
                    width={'150px'}
                    src={props.data.result.song_art_image_thumbnail_url}
                />
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

const Album = styled(LazyLoadImage)`
    margin-right: 35px;
    object-fit: cover;
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
