import React, { useEffect, useContext } from 'react';
import RecentTemplate from '../Templates/RecentTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Recent = () => {
  const context = useContext(MovieContext);
  const { state, getRecMovie } = context;
  const { loading } = state;

  useEffect(() => {
    if (Object.keys(state.recentMovies).length === 0) getRecMovie();
  }, []);

  return <>{loading ? <h1>로딩중</h1> : <RecentTemplate />}</>;
};

export default Recent;
