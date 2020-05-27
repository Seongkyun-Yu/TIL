/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PopularTemplate from '../Templates/PopularTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { success, loading } from '../../Modules/Popular';
import { movieApi } from '../../Api/movieApi';

const Popular = () => {
  // const context = useContext(MovieContext);
  // const { state, getPopMovie } = context;
  const { movies } = useSelector((state) => state.Popular);

  const dispatch = useDispatch();

  const setLoading = () => dispatch(loading());

  const getPopMovie = async (page = 1) => {
    setLoading();
    const movies = await movieApi.getPopular(page);
    dispatch(success(movies, page));
  };

  const [isEnd, setScrollState] = useState(false);

  if (isEnd) {
    getPopMovie(movies.page + 1);
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
      if (!Object.keys(movies).length) {
        setScrollState(false);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(movies).length === 0) getPopMovie();
    document.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <PopularTemplate />;
};

export default React.memo(Popular);
