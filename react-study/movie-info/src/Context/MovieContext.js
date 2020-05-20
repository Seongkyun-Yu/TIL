import React, { createContext } from 'react';
import useMovieData from '../Hook/useMovieData';

const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    searchInputChange,
    clearInput,
  ] = useMovieData();

  const data = {
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    searchInputChange,
    clearInput,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MovieContext, MovieContextProvider };
