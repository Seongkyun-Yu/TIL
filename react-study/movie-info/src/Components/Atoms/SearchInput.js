import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import './style/SearchInput.css';

const SearchInput = () => {
  const context = useContext(MovieContext);
  const { searchMovie } = context;

  return (
    <input
      className="searchInput"
      onChange={(e) => {
        searchMovie(e.target.value);
      }}
    />
  );
};

export default SearchInput;
