import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch({
            type: 'COUNTER_REQUEST',
        });
    }, []);

    return (
        <div>
            <button onClick={onClick}>누르면 증가합니다.</button>
        </div>
    );
};

export default Home;
