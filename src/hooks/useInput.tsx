import { useState, useCallback } from 'react';

const useInput = (initialValue: string = '') => {
    const [value, setter] = useState<string>(initialValue);
    // input 글자가 1자 이상되어야지 submit할 수 있도록
    const [validation, setValidation] = useState<boolean>(true);

    const handler = useCallback((e) => {
        setter(e.target.value);
        setValidation(e.target.value.length === 0);
    }, []);

    return [value, handler, validation] as const;
};

export default useInput;
