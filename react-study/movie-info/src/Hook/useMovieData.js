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
    console.log('searchmovie');
    const movies = await movieApi.searchMovies(search);
    dispatch({ type: 'SEARCH_MOV', movies: movies.data });
  };

  const getDetailMovie = async (id) => {
    setLoading();
    const movies = await movieApi.getMovie(id);
    dispatch({ type: 'DETAIL_MOV', movies: movies.data });
  };

  const searchInputChange = (e) => {
    dispatch({ type: 'INPUT_CHANGE', value: e.target.value });
  };

  const clearDetailMovie = () => {
    dispatch({ type: 'CLEAR_DETAIL' });
  };

  const clearInput = () => {
    dispatch({ type: 'CLEAR_INPUT' });
  };

  return [
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    getDetailMovie,
    searchInputChange,
    clearDetailMovie,
    clearInput,
  ];
};

export default useMovieData;
