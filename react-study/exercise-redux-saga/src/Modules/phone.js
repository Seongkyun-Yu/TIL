import { put, delay, takeEvery } from 'redux-saga/effects';

const ADD_USER = 'phone/ADD_USER';
const DELETE_USER = 'phone/DELETE_USER';

const ADD_USER_ASYNC = 'phone/ADD_USER_ASYNC';
const DELETE_USER_ASYNC = 'phone/DELETE_USER_ASYNC';

export const addUser = (phone) => ({ type: ADD_USER, phone });
export const deleteUser = (id) => ({ type: DELETE_USER, id });

export const addUserAsync = (phone) => ({ type: ADD_USER_ASYNC, phone });
export const deleteUserAsync = (id) => ({
  type: DELETE_USER_ASYNC,
  id,
});

function* addUserAsyncSaga(action) {
  yield delay(1000);
  yield put(addUser(action.phone));
}

function* deleteUserAsyncSaga(action) {
  yield delay(1000);
  yield put(deleteUser(action.id));
}

function* phoneSaga() {
  yield takeEvery(ADD_USER_ASYNC, addUserAsyncSaga);
  yield takeEvery(DELETE_USER_ASYNC, deleteUserAsyncSaga);
}

const initialState = {
  Phones: [
    { id: 1, name: '유성균', number: '0101010' },
    { id: 2, name: '박기태', number: '1202020' },
    { id: 3, name: '송부용', number: '2161113' },
    { id: 4, name: '정호영', number: '5453434' },
  ],
  Phone: [],
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        Phones: [...state.Phones, action.phone],
      };
    case DELETE_USER:
      return {
        ...state,
        Phones: state.Phones.filter((phone) => phone.id !== action.id),
      };
    default:
      return state;
  }
};

export { phoneReducer, phoneSaga };
