import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* getResult(action) {
  try {
    yield delay(100);

    const data = yield call(API.getData, `http://tranquil-coast-67055.herokuapp.com/products?store=${action.payload.stores}&type=${action.payload.products}`);
    yield put({
      type: 'RESULT_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('RESULT_REQUEST_INITIATED', getResult);
}
