import React, { useContext, useEffect } from 'react';
import PopularTemplate from '../Templates/PopularTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Popular = () => {
  const context = useContext(MovieContext);
  const { state, getPopMovie } = context;
  const { loading } = state;

  // console.log('컨텍스트', context.state);

  const onScroll = () => {
    console.log('ㅇㅇ', state);
    if (
      document.documentElement.scrollHeight ===
      Math.ceil(document.documentElement.scrollTop) +
        document.documentElement.clientHeight
    ) {
      console.log('컨텍스트', context.state);
      getPopMovie(state.popMovies.page + 1);
    }
  };

  useEffect(() => {
    if (Object.keys(state.popMovies).length === 0) getPopMovie();
    if (Object.keys(state.popMovies).length !== 0)
      document.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return <>{loading ? <h1>로딩중</h1> : <PopularTemplate />}</>;
};

export default Popular;
