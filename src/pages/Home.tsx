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
            <button onClick={onClick}>함 눌러보이소</button>
        </div>
    );
};

export default Home;
