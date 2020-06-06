import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { popularReducer, popularSaga } from './popularReducer';
import { upcomingReducer, upcomingSaga } from './upcomingReducer';

const rootReducer = combineReducers({
  Popular: popularReducer,
  Upcoming: upcomingReducer,
});

function* rootSaga() {
  yield all([popularSaga(), upcomingSaga()]);
}

export { rootReducer, rootSaga };
