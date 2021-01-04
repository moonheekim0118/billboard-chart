import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { result } from '../../model/searchResult';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    data: result;
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
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Artist = styled(Link)`
    font-size: 1.1em;
    color: black;
    text-decoration: none;

    transition: color 0.3s ease;

    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: #eb4034;
    }
`;

export default Card;
