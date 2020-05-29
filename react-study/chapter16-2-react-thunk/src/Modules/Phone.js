import { getPhones, getPhoneById, addPhone, deletePhoneById } from '../api'; // api/posts 안의 함수 모두 불러오기
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

export const getPhonesAsync = createPromiseThunk(GET_PHONES, getPhones);

// export const getPhoneAsync = createPromiseThunk(GET_PHONE, getPhoneById);
export const getPhoneAsync = createPromiseThunkById(GET_PHONE, getPhoneById);

export const addPhoneAsync = createPromiseThunk(ADD_PHONE, addPhone);

export const deletePhoneAsync = createPromiseThunk(
  DELETE_PHONE,
  deletePhoneById,
);

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
