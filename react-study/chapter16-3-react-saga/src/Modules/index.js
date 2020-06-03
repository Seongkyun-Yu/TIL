import { combineReducers } from 'redux';
import { PhoneReducer } from './Phone';

import { all } from 'redux-saga/effects';
import { CounterReducer, CounterSaga } from './Counter';

const rootReducer = combineReducers({
  Phone: PhoneReducer,
  Counter: CounterReducer,
});

export function* rootSaga() {
  yield all([CounterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
