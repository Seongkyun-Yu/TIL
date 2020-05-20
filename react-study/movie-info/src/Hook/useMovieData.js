import { useReducer } from 'react';
import { initMovie, reducer } from '../Reducer/movieReducer';
import { movieApi } from '../Api/movieApi';

const useMovieData = () => {
  const [state, dispatch] = useReducer(reducer, initMovie);

  const setLoading = () => dispatch({ type: 'LOADING' });

  const getPopMovie = async (page = 1) => {
    setLoading();
    const movies = await movieApi.getPopular(page);

    dispatch({ type: 'POPULAR_MOV', movies, page });
  };

  const getRecMovie = async (page) => {
    setLoading();
    const movies = await movieApi.getUpcoming(page);
    dispatch({ type: 'RECENT_MOV', movies });
  };

  const searchMovie = async (search) => {
    setLoading();
    const movies = await movieApi.searchMovies(search);
    dispatch({ type: 'SEARCH_MOV', movies: movies.data });
  };

  const searchInputChange = (e) => {
    dispatch({ type: 'INPUT_CHANGE', value: e.target.value });
  };

  const clearInput = () => {
    dispatch({ type: 'CLEAR_INPUT' });
  };

  const onScroll = () => {
    // console.log(window);
    // console.log(window.innerHeight, window.scrollY);
    // document.body.scrollHeight ==
    //     document.body.scrollTop +
    //     window.innerHeight
    console.log(
      document.documentElement.scrollHeight,
      Math.ceil(document.documentElement.scrollTop),
      document.documentElement.clientHeight,
      window.clientHeight,
    );
    if (
      document.documentElement.scrollHeight ===
      Math.ceil(document.documentElement.scrollTop) +
        document.documentElement.clientHeight +
        3
      // Object.keys(state.popMovies).length !== 0
    ) {
      console.log(state);

      // getPopMovie(state.popMovies)
    }
  };

  return [
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    searchInputChange,
    clearInput,
  ];
};

export default useMovieData;
