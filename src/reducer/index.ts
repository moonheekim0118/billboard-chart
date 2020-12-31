import { combineReducers } from 'redux';
import test from './test';

const rootReducer = (state, action) => {
    switch (action.type) {
        default: {
            const combineReducer = combineReducers({ test });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
