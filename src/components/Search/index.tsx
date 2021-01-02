import React, { useCallback } from 'react';
import Button from '../Button';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';

// TODO : sessionStorage에서 keyword 가져와서 input initlaValue로 넣기
const Search = () => {
    const [value, onInput, validation] = useInput();

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
        },
        [value]
    );

    return (
        <Form>
            <Input value={value} onChange={onInput} />
            <Button
                title={'submit'}
                onClick={onSubmit}
                type={'submit'}
                disabled={validation}
            />
        </Form>
    );
};

const Form = styled.form`
    text-align: center;
    padding: 20px 0px;
    display: flex;
`;

const Input = styled.input`
    width: 75%;
    padding: 10px 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 15px;

    &:focus {
        outline: none;
    }
`;

export default Search;
