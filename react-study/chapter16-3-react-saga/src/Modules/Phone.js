// api/posts 안의 함수 모두 불러오기
import { getPhones, getPhoneById, addPhone, deletePhoneById } from '../api';
//saga effect 불러오기
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createPromiseThunk,
  createPromiseThunkById,
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
} from '../Lib/asyncUtils';

/* 액션 타입 */

// 전화번호 전부 조회하기
const GET_PHONES = 'GET_PHONES'; // 요청 시작
const GET_PHONES_SUCCESS = 'GET_PHONES_SUCCESS'; // 요청 성공
const GET_PHONES_ERROR = 'GET_PHONES_ERROR'; // 요청 실패

// 전화번호 하나 조회하기
const GET_PHONE = 'GET_PHONE';
const GET_PHONE_SUCCESS = 'GET_PHONE_SUCCESS';
const GET_PHONE_ERROR = 'GET_PHONE_ERROR';

//전화번호 추가하기
const ADD_PHONE = 'ADD_PHONE';
const ADD_PHONE_SUCCESS = 'ADD_PHONE_SUCCESS';
const ADD_PHONE_ERROR = 'ADD_PHONE_ERROR';

// 전화번호 삭제하기""
const DELETE_PHONE = 'DELETE_PHONE';
const DELETE_PHONE_SUCCESS = 'DELETE_PHONE_SUCCESS';
const DELETE_PHONE_ERROR = 'DELETE_PHONE_ERROR';

// thunk 를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없습니다.
// 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.

// export const getPhonesAsync = createPromiseThunk(GET_PHONES, getPhones);
// export const getPhoneAsync = createPromiseThunkById(GET_PHONE, getPhoneById);

export const getPhonesAction = () => ({ type: GET_PHONES });
// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getPhoneAction = (id) => ({
  type: GET_PHONE,
  payload: id,
  meta: id,
});

export const addPhoneAsync = createPromiseThunk(ADD_PHONE, addPhone);
export const deletePhoneAsync = createPromiseThunk(
  DELETE_PHONE,
  deletePhoneById,
);

function* getPhonesSaga() {
  try {
    // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    const phones = yield call(getPhones);
    yield put({
      type: GET_PHONES_SUCCESS,
      payload: phones,
    }); // 성공 액션 디스패치
  } catch (e) {
    yield put({
      type: GET_PHONES_ERROR,
      error: true,
      payload: e,
    }); // 실패 액션 디스패치
  }
}

// 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
function* getPhoneSaga(action) {
  const param = action.payload;
  const id = action.meta;
  try {
    // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
    const phone = yield call(getPhoneById, param);
    yield put({
      type: GET_PHONE_SUCCESS,
      payload: phone,
      meta: id,
    });
  } catch (e) {
    yield put({
      type: GET_PHONE_ERROR,
      error: true,
      payload: e,
      meta: id,
    });
  }
}

// 사가들을 합치기
export function* aboutPhoneSaga() {
  yield takeEvery(GET_PHONES, getPhonesSaga);
  yield takeEvery(GET_PHONE, getPhoneSaga);
}

const initialState = {
  phones: {
    loading: false,
    data: null,
    error: null,
  },
  phone: {},
};

export const PhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
    case GET_PHONES_SUCCESS:
    case GET_PHONES_ERROR:
      return handleAsyncActions(GET_PHONES, 'phones', true)(state, action);
    case GET_PHONE:
    case GET_PHONE_SUCCESS:
    case GET_PHONE_ERROR:
      return handleAsyncActionsById(GET_PHONE, 'phone', true)(state, action);
    case ADD_PHONE:
    case ADD_PHONE_SUCCESS:
    case ADD_PHONE_ERROR:
      return handleAsyncActions(ADD_PHONE, 'phones')(state, action);
    case DELETE_PHONE:
    case DELETE_PHONE_SUCCESS:
    case DELETE_PHONE_ERROR:
      return handleAsyncActions(DELETE_PHONE, 'phones')(state, action);
    default:
      return state;
  }
};

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};
