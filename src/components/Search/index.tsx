import React, { useCallback } from 'react';
import { setItem } from '../../util/localStorage';
import Button from '../Button';
import SearchHistory from '../SearchHistory';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';

// TODO : sessionStorage에서 keyword 가져와서 input initlaValue로 넣기

interface Props {
    fetchAPI: (value: string) => void;
    keyword: string;
}
const Search = (props: Props) => {
    const [value, onInput, validation] = useInput(props.keyword);
    const [showHistory, setShowHistory] = useToggle();

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setItem('searchHistory', value);
            await props.fetchAPI(value);
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
            <HistoryContainer>
                <SearchHistory />
            </HistoryContainer>
        </Form>
    );
};

const Form = styled.form`
    text-align: center;
    display: flex;
    position: relative;
    padding: 20px 0px;
    width: 100%;
`;

const HistoryContainer = styled.div.attrs({ tabindex: '0' })`
    display: none;
    position: absolute;
    bottom: -80px;
    width: 100%;

    &:hover {
        display: flex;
    }

    &:focus-within {
        display: flex;
    }
`;

const Input = styled.input.attrs({ type: 'text' })`
    width: 100%;
    padding: 10px 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 10px;

    &:focus {
        outline: none;
    }

    &:focus ~ ${HistoryContainer} {
        display: flex;
    }
`;

export default Search;
