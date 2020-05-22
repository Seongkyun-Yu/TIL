/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../Context/MovieContext';
import DetailTemplate from '../Templates/DetailTemplate';

const Detail = ({ location, history }) => {
  const context = useContext(MovieContext);
  const { getDetailMovie, clearDetailMovie } = context;
  const params = useParams();
  // getDetailMovie(params.idx);

  // console.log(params.idx);
  // console.log(detailMovies);

  // console.log(params.movie_type);
  // console.log(state[params.movie_type].results[params.movie_index]);

  // const movie = location.state;
  // console.log(movie);

  // const goBack = () => {
  //   history.goBack();
  // };

  useEffect(() => {
    getDetailMovie(params.idx);

    return () => {
      clearDetailMovie();
    };
  }, []);

  return <DetailTemplate history={history} />;

  // return (
  //   <>
  //     <Poster url={movie.poster_path} title={movie.title} />
  //     <h2>{movie.title}</h2>
  //     <p>{movie.overview}</p>
  //     <span>개봉일: {movie.release_date}</span>
  //     <button onClick={goBack}>뒤로 돌아가기</button>
  //   </>
  // );
};

export default Detail;
