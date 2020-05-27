const SUCCESS = 'DETAIL/SUCCESS';
const LOADING = 'DETAIL/LOADING';
const CLEAR = 'DETAIL/CLEAR';
const ERROR = 'DETAIL/ERROR';

export const success = (movie) => ({ type: SUCCESS, movie });
export const loading = () => ({ type: LOADING });
export const clear = () => ({ type: CLEAR });
export const error = (errorMessage) => ({
  type: ERROR,
  errorMessage,
});

const initState = {
  movie: {},
  error: false,
  errorMessage: '',
  loading: false,
};

export default function Detail(state = initState, action) {
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
    case CLEAR:
      return {
        ...state,
        movie: {},
        loading: false,
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
