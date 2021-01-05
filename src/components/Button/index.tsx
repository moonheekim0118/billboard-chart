import React from 'react';
import styled from 'styled-components';

interface Props {
    onClick: (e: any) => void;
    title: string;
    disabled: boolean;
    type: string;
}

const Button = (props: Props) => {
    return (
        <Container
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.title}
        </Container>
    );
};

const Container = styled.button`
    background-color: #ecc422;
    color: #fff;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;

    cursor: pointer;
    transition: background-color 0.5s ease;

    &:disabled {
        background-color: #f3d972;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #d3ad12;
    }
`;

export default Button;
