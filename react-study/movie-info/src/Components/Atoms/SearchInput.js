import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

const SearchInput = () => {
  const context = useContext(MovieContext);
  const { state, searchInputChange, searchMovie } = context;

  return (
    <input
      onChange={searchInputChange}
      onKeyUp={(e) => {
        if (e.keyCode !== 13) return;
        searchMovie(state.searchInput);
      }}
    />
  );
};

export default SearchInput;
