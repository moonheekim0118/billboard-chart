import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false) => {
    const [value, setter] = useState<boolean>(initialValue);

    const handler = useCallback(() => {
        setter(!value);
    }, [value]);

    const setToFalse = useCallback(() => {
        setter(false);
    }, []);

    return [value, handler, setToFalse];
};

export default useToggle;
