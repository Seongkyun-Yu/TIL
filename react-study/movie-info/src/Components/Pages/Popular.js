/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PopularTemplate from '../Templates/PopularTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Popular = () => {
  const context = useContext(MovieContext);
  const { state, getPopMovie } = context;

  const [isEnd, setScrollState] = useState(false);

  if (isEnd) getPopMovie(state.popMovies.page + 1);

  const onScroll = () => {
    if (
      document.documentElement.scrollHeight ===
      Math.ceil(document.documentElement.scrollTop) +
        document.documentElement.clientHeight
    ) {
      setScrollState(true);
    } else {
      setScrollState(false);
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
