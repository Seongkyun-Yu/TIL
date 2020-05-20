import React, { useContext, useEffect } from 'react';
import PopularTemplate from '../Templates/PopularTemplate';
import { MovieContext } from '../../Context/MovieContext';

const Popular = (e) => {
  const context = useContext(MovieContext);
  const { state, getPopMovie } = context;
  const { loading } = state;

  const onScroll = () => {
    // console.log(window);
    // console.log(window.innerHeight, window.scrollY);
    // document.body.scrollHeight ==
    //     document.body.scrollTop +
    //     window.innerHeight
    console.log(
      document.body.scrollHeight,
      document.body.scrollTop,
      window.clientHeight,
    );
    // console.log(
    //   document.body.scrollHeight,
    //   document.body.scrollTop,
    //   window.innerHeight,
    // );

    // console.log(
    //   window.scrollY,
    //   window.scrollHeight,
    //   document.body.scrollHeight,
    // );
    // console.log(document.body.clientHeight, document.body.scrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    if (Object.keys(state.popMovies).length === 0) getPopMovie();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>{loading ? <h1>로딩중</h1> : <PopularTemplate />}</>;
};

export default Popular;
