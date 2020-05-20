const initMovie = {
  popMovies: {},
  recentMovies: {},
  searchMovies: {},
  searchInput: '',
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'POPULAR_MOV':
      // console.log('인기순위 새로받는 리듀서 호출', state.popMovies.equals({}));
      // if (JSON.stringify(state.popMovies) === JSON.stringify(action.movies))
      // return {
      //   ...state,
      //   loading: false,
      // };
      if (action.page !== 1)
        return {
          ...state,
          page: action.page,
          results: [...state.results, ...action.movies.results],
        };
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
    case 'INPUT_CHANGE':
      return {
        ...state,
        searchInput: action.value,
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
