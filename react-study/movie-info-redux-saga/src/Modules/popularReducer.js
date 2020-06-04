import { select, put, call, takeLatest } from 'redux-saga';
import { movieApi } from '../Api/movieApi';

const GETMOVIE = 'popular/GETMOVIE';
const SUCCESS = 'popular/SUCCESS';
const ERROR = 'popular/ERROR';
const LOADING = 'popular/LOADING';

const getPopularMovie = (page = 1) => ({ type: GETMOVIE, page });
const success = (page, movies) => ({ type: SUCCESS, page, movies });
const error = (e) => ({ type: ERROR, e });
const loading = () => ({ type: LOADING });

function* getPopMovieSaga(action) {
  try {
    const state = yield select();
    const page = action.page || 1;

    if (!state.Popular.page) yield put(loading());
    const response = yield call(movieApi.getPopular, page);

    if (response.status === 200) {
      if (state.Popular.page !== response.page)
        yield put(success(response.page, response.results));
    } else yield put(error('데이터 받기 실패'));
  } catch (e) {
    yield put(error(e));
  }
}

function* popMovieSaga() {
  yield takeLatest(GETMOVIE, getPopMovieSaga);
}

const initialState = {
  movies: [],
  page: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        movies: [...state, ...action.movies],
        page: action.page,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.e,
      };
    default:
      return state;
  }
};

export { popularReducer, getPopularMovie, popMovieSaga };
