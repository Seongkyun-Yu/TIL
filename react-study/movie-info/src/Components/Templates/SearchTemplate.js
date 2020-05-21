import React from 'react';
import MovieLists from '../Organisms/MovieLists';
import SearchInput from '../Atoms/SearchInput';

const SearchTemplate = () => {
  return (
    <div className="searchContainer">
      <SearchInput />
      <MovieLists type="searchMovies" />
    </div>
  );
};

export default SearchTemplate;
