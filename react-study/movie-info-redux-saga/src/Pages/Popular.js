import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularMovie } from '../Modules/popularReducer';
import PopularTemplate from '../Components/Templates/PopularTemplate';

const Popular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovie());
  }, [dispatch]);

  return <PopularTemplate />;
};

export default Popular;
