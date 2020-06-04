import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { popularReducer, popularSaga } from './popularReducer';

const rootReducer = combineReducers({
  Popular: popularReducer,
});

function* rootSaga() {
  yield all([popularSaga()]);
}

export { rootReducer, rootSaga };
