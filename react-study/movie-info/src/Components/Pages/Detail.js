/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../Context/MovieContext';
import DetailTemplate from '../Templates/DetailTemplate';

const Detail = ({ history }) => {
  const context = useContext(MovieContext);
  const { getDetailMovie, clearDetailMovie } = context;
  const params = useParams();

  useEffect(() => {
    getDetailMovie(params.idx);

    return () => {
      clearDetailMovie();
    };
  }, []);

  return <DetailTemplate history={history} />;
};

export default Detail;
