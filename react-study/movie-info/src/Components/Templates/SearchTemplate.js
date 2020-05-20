import React, { useContext } from 'react';
import MovieLists from '../Organisms/MovieLists';
import SearchInput from '../Atoms/SearchInput';

const SearchTemplate = () => {
  return (
    <>
      <SearchInput />
      <MovieLists type="searchMovies" />
    </>
  );
};

export default SearchTemplate;
