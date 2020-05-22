/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PopularTemplate from '../Templates/PopularTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Popular = () => {
  const context = useContext(MovieContext);
  const { state, getPopMovie } = context;

  const [isEnd, setScrollState] = useState();

  if (isEnd) {
    getPopMovie(state.popMovies.page + 1);
    setScrollState(false);
  }

  const onScroll = () => {
    if (
      document.documentElement.scrollHeight ===
      Math.ceil(document.documentElement.scrollTop) +
        document.documentElement.clientHeight
    ) {
      setScrollState(true);
    } else {
      if (!state) {
        setScrollState(false);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(state.popMovies).length === 0) getPopMovie();
    document.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <PopularTemplate />;
};

export default React.memo(Popular);
