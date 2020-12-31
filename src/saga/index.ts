import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import test from './test';

// default URL 설정

export default function* rootSaga() {
    yield all([fork(test)]);
}
