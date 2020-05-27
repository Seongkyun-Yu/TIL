const SUCCESS = 'SEARCH/SUCCESS';
const LOADING = 'SEARCH/LOADING';
const ERROR = 'SEARCH/ERROR';

export const success = (movie) => ({ type: SUCCESS, movie });
export const loading = () => ({ type: LOADING });
export const error = (errorMessage) => ({
  type: ERROR,
  errorMessage,
});

const initState = {
  movies: {},
  error: false,
  errorMessage: '',
  loading: false,
  history: [],
  inputState: '',
};

export default function Search(state = initState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        movie: action.movie,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: false,
        errorMessage: action.errorMessage,
        loading: false,
      };
    default:
      return state;
  }
}
