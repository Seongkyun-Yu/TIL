import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counterReducer, { counterSaga } from './counter';
import { phoneReducer, phoneSaga } from './phone';

const rootReducer = combineReducers({
  Counter: counterReducer,
  Phone: phoneReducer,
});

export function* rootSaga() {
  yield all([counterSaga(), phoneSaga()]);
}

export default rootReducer;
