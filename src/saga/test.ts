import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';

function* counterAPI() {
    // API
}

function* counter() {
    try {
        //yield call(counterAPI);
        yield delay(1000);
        yield put({
            type: 'COUNTER_SUCCESS',
        });
    } catch (error) {
        yield put({
            type: 'COUNTER_FAIL',
        });
    }
}

function* watchCounter() {
    yield takeLatest('COUNTER_REQUEST', counter);
}

export default function* testSaga() {
    yield all([fork(watchCounter)]);
}
