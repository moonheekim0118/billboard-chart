import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../saga';
import rootReducer from '../reducer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const MiddleWare =
        process.env.NODE_ENV === 'production'
            ? applyMiddleware(sagaMiddleware)
            : composeWithDevTools(applyMiddleware(sagaMiddleware));
    const store = createStore(rootReducer, MiddleWare);

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
