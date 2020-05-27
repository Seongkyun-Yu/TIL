import React from 'react';
import MovieLists from '../Organisms/MovieLists';
import SearchInput from '../Atoms/SearchInput';

const SearchTemplate = () => {
  return (
    <div className="searchContainer">
      <SearchInput />
      <MovieLists type="Search" />
    </div>
  );
};

export default SearchTemplate;
