import React, { useContext } from 'react';
import MovieLists from '../Organisms/MovieLists';
import Loading from '../Atoms/Loading';
import { MovieContext } from '../../Context/MovieContext';

const PopularTemplate = () => {
  const context = useContext(MovieContext);
  const { state } = context;
  return (
    <div>
      {state.loading ? <Loading /> : null}
      <MovieLists type="popMovies" />
    </div>
  );
};

export default PopularTemplate;
