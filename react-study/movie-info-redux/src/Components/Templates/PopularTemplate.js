import React, { useContext } from 'react';
import MovieLists from '../Organisms/MovieLists';
import Loading from '../Atoms/Loading';
// import { MovieContext } from '../../Context/MovieContext';
import { useSelector } from 'react-redux';

const PopularTemplate = () => {
  // const context = useContext(MovieContext);
  // const { state } = context;
  const { loadingState } = useSelector((state) => state.Popular);
  return (
    <div>
      {loadingState ? <Loading /> : null}
      <MovieLists type="Popular" />
    </div>
  );
};

export default PopularTemplate;
