const SUCCESS = 'search/SUCCESS';
const ERROR = 'search/ERROR';
const LOADING = 'search/LOADING';

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
        history: [...state.history, action.input],
        loading: true,
      };
    default:
      return state;
  }
};

export { searchReducer };
