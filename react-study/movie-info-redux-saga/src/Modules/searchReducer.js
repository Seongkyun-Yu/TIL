import { movieApi } from '../Api/movieApi';
const SUCCESS = 'search/SUCCESS';
const ERROR = 'search/ERROR';
const LOADING = 'search/LOADING';

const searchMovie = (movieName) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const movies = await movieApi.searchMovies(movieName);
    dispatch({ type: SUCCESS, movies, movieName });
  } catch (e) {
    dispatch({ type: ERROR, e });
  }
};

const initialState = {
  movies: [],
  history: [],
  loading: false,
  error: false,
  errorMessage: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        movies: action.movies,
        history: [...state.history, action.movieName],
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.e,
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

export { searchReducer, searchMovie };
