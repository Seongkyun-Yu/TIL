import React from 'react';
import { movieApi } from '../Api/movieApi';
import { useSelector, useDispatch } from 'react-redux';
import { success, error, loading } from '../Modules/Popular';
import MovieList from '../Components/Organisms/MovieLists';

const MovieListContainer = () => {
  const { movies } = useSelector((state) => state.Popular);

  // const dispatch = useDispatch();

  // const getPopMovie = async () => {
  //   const movies = await movieApi.getPopular();
  //   dispatch(success(movies));
  // };

  return <MovieList movies={movies} />;
};

export default MovieListContainer;
