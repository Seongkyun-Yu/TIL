const SUCCESS = 'POPULAR/SUCCESS';
const LOADING = 'POPULAR/LOADING';
const ERROR = 'POPULAR/ERROR';

export const success = (movies, page) => ({ type: SUCCESS, movies, page });
export const loading = () => ({ type: LOADING });
export const error = (errorMessage) => ({
  type: ERROR,
  errorMessage,
});

const initState = {
  movies: {},
  errorState: false,
  errorMessage: '',
  loadingState: false,
};

export default function Popular(state = initState, action) {
  switch (action.type) {
    case SUCCESS:
      if (action.page !== 1) {
        return {
          ...state,
          movies: {
            ...state.movies,
            page: action.page,
            results: [...state.movies.results, ...action.movies.results],
          },
          loadingState: false,
        };
      }
      return {
        ...state,
        movies: action.movies,
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
