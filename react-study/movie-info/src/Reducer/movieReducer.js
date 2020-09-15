const initMovie = {
  popMovies: {},
  recentMovies: {},
  searchMovies: {},
  detailMovies: {},
  searchInput: '',
  loading: false,
  isEndScroll: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'POPULAR_MOV':
      if (action.page !== 1) {
        return {
          ...state,
          popMovies: {
            ...state.popMovies,
            page: action.page,
            results: [...state.popMovies.results, ...action.movies.results],
          },
          loading: false,
        };
      }
      return {
        ...state,
        popMovies: action.movies,
        loading: false,
      };
    case 'RECENT_MOV':
      return {
        ...state,
        recentMovies: action.movies,
        loading: false,
      };
    case 'SEARCH_MOV':
      return {
        ...state,
        searchMovies: action.movies,
        loading: false,
      };
    case 'DETAIL_MOV':
      return {
        ...state,
        detailMovies: action.movies,
        loading: false,
      };
    case 'INPUT_CHANGE':
      return {
        ...state,
        searchInput: action.value,
      };

    case 'CLEAR_DETAIL':
      return {
        ...state,
        detailMovies: {},
      };

    case 'CLEAR_INPUT':
      return {
        ...state,
        searchInput: '',
        searchMovies: {},
      };

    default:
      throw new Error(`이상한 dispatch 사용함 ${action.type}`);
  }
};

export { initMovie, reducer };
