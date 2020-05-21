import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import './style/SearchInput.css';

const SearchInput = () => {
  const context = useContext(MovieContext);
  const { state, searchInputChange, searchMovie } = context;

  return (
    <input
      className="searchInput"
      onChange={searchInputChange}
      onKeyUp={(e) => {
        if (e.keyCode !== 13) return;
        searchMovie(state.searchInput);
      }}
    />
  );
};

export default SearchInput;
