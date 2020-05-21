/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import RecentTemplate from '../Templates/RecentTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Recent = () => {
  const context = useContext(MovieContext);
  const { state, getRecMovie } = context;

  useEffect(() => {
    if (Object.keys(state.recentMovies).length === 0) getRecMovie();
  }, []);

  return <RecentTemplate />;
};

export default Recent;
