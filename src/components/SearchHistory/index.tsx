import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { searchHistory } from '../../model/searchHistory';

interface Props {
    data: searchHistory[];
    onRemove: (id: number) => void;
}

const SearchHistory = (props: Props) => {
    return (
        <Container>
            {props.data.length > 0 &&
                props.data.map((element) => (
                    <History key={element.id}>
                        <Keyword>{element.value}</Keyword>
                        <Remove
                            icon={faTrash}
                            onClick={props.onRemove.bind(this, element.id)}
                        />
                    </History>
                ))}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
`;

const History = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;

    cursor: pointer;

    transition: background-color 0.3s ease;

    &:not(:last-child) {
        border-bottom: 1px solid #ccccb3;
    }

    &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    &:hover {
        background-color: #ccccb3;
    }
`;

const Keyword = styled.span`
    text-align: center;
`;

const Remove = styled(FontAwesomeIcon)`
    color: red;
`;

export default SearchHistory;
