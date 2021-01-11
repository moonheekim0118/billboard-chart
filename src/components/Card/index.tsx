import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { searchResult } from '../../model/searchResult';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    data: searchResult;
    search?: boolean;
}

const Card = (props: Props) => {
    return (
        <Container>
            <MusicInfo>
                <Album
                    alt={'album art'}
                    height={'150px'}
                    width={'150px'}
                    src={props.data.song_art_image_thumbnail_url}
                />
                <Info>
                    <Title>{props.data.title}</Title>
                    {props.search && (
                        <Artist to={`/artist/${props.data.primary_artist.id}`}>
                            {props.data.primary_artist.name}
                        </Artist>
                    )}
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

    cursor: pointer;
    transition: box-shadow 0.5s ease;

    &:hover {
        box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
    }
`;

const MusicInfo = styled.div`
    display: flex;
    width: 100%;
`;

const Album = styled(LazyLoadImage)`
    margin-right: 20px;
    width: 30%;
    object-fit: cover;
`;

const Info = styled.div`
    display: flex;
    width: 70%;
    padding: 0 15px;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Artist = styled(Link)`
    font-size: 1.1em;
    color: black;
    text-decoration: none;

    transition: color 0.3s ease;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: #eb4034;
    }
`;

export default Card;
