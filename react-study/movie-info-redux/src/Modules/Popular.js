const SUCCESS = 'POPULAR/SUCCESS';
const LOADING = 'POPULAR/LOADING';
const ERROR = 'POPULAR/ERROR';

export const success = (movie) => ({ type: SUCCESS, movie });
export const loading = () => ({ type: LOADING });
export const error = (errorMessage) => ({
  type: ERROR,
  errorMessage,
});

const initState = {
  movie: {},
  errorState: false,
  errorMessage: '',
  loadingState: false,
};

export default function Popular(state = initState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        movie: action.movie,
        loadingState: false,
      };
    case LOADING:
      return {
        ...state,
        loadingState: true,
      };
    case ERROR:
      return {
        ...state,
        errorState: false,
        errorMessage: action.errorMessage,
        loadingState: false,
      };
    default:
      return state;
  }
}
