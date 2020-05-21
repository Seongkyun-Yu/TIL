import React, { createContext } from 'react';
import useMovieData from '../Hook/useMovieData';

const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    getDetailMovie,
    searchInputChange,
    clearDetailMovie,
    clearInput,
  ] = useMovieData();

  const data = {
    state,
    getPopMovie,
    getRecMovie,
    searchMovie,
    getDetailMovie,
    searchInputChange,
    clearDetailMovie,
    clearInput,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MovieContext, MovieContextProvider };
