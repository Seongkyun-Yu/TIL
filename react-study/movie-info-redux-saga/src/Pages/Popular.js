import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPopularMovie } from '../Modules/popularReducer';

const Popular = () => {
  const state = useSelector((state) => state.Popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getPopularMovie(2));
  }, [dispatch]);

  return (
    <div>
      <h1>이곳은 Popular페이지</h1>
      {JSON.stringify(state.movies)}
    </div>
  );
};

export default Popular;
