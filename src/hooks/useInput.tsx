import { useState, useEffect, useCallback } from 'react';
import { setItem } from '../util/sessionStorage';

const useInput = (initialValue: string = '') => {
    const [value, setter] = useState<string>(initialValue);
    // input 글자가 1자 이상되어야지 submit할 수 있도록
    const [validation, setValidation] = useState<boolean>(true);

    useEffect(() => {
        setValidation(value.length === 0);
    }, [value]);

    // initialValue 반영
    useEffect(() => {
        setter(initialValue);
    }, [initialValue]);

    const handler = useCallback((e) => {
        setter(e.target.value);
        // sessionStorage에 저장
        if (e.target.value.length > 0) {
            setItem('keyword', e.target.value);
        }
        setValidation(e.target.value.length === 0);
    }, []);

    return [value, handler, validation, setter] as const;
};

export default useInput;
