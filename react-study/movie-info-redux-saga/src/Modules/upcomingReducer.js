import { select, put, call, takeEvery } from 'redux-saga/effects';
import { movieApi } from '../Api/movieApi';

const GETMOVIE = 'upcoming/GETMOVIE';
const SUCCESS = 'upcoming/SUCCESS';
const ERROR = 'upcoming/ERROR';
const LOADING = 'upcoming/LOADING';

const getUpcomingMovie = (page = 1) => ({ type: GETMOVIE, page });
const success = (page, movies) => ({ type: SUCCESS, page, movies });
const error = (e) => ({ type: ERROR, e });
const loading = () => ({ type: LOADING });

function* getUpcomMovieSaga(action) {
  try {
    const state = yield select();
    const page = action.page || 1;

    if (!state.Upcoming.page) yield put(loading());

    const response = yield call(movieApi.getUpcoming, page);

    if (state.Upcoming.page < response.page)
      yield put(success(response.page, response.results));
  } catch (e) {
    yield put(error(e));
  }
}

function* upcomingSaga() {
  yield takeEvery(GETMOVIE, getUpcomMovieSaga);
}

const initialState = {
  movies: [],
  page: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

const upcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        page: action.page,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.e,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export { upcomingReducer, getUpcomingMovie, upcomingSaga };
