import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { coinReducer, coinSaga } from "./coinReducer";

const rootReducer = combineReducers({
  Coin: coinReducer,
});

function* rootSaga() {
  yield all([coinSaga()]);
}

export { rootReducer, rootSaga };
