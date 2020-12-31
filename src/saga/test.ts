import { watch } from 'fs';
import { all, fork, takeLatest, put, call } from 'redux-saga/effects';

function* counter() {
    try {
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
