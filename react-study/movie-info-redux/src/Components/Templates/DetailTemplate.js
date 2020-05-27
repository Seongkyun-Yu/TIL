import React, { useContext } from 'react';
// import { MovieContext } from '../../Context/MovieContext';

import { useSelector, useDispatch } from 'react-redux';

import Poster from '../Atoms/Poster';
import MovieTitle from '../Atoms/MovieTitle';
import Description from '../Atoms/Description';
import SpanText from '../Atoms/SpanText';
import GoBackBtn from '../Atoms/GoBackBtn';

import './style/DetailTemplate.css';

const DetailTemplate = ({ history }) => {
  const { movies } = useSelector((state) => state.Detail);
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="detailContainer">
      <Poster url={movies.poster_path} title={movies.original_title} />
      <div className="descriptContainer">
        <MovieTitle>{movies.original_title}</MovieTitle>
        <Description>{movies.overview}</Description>
        <SpanText className="releaseDate">
          Release Date: {movies.release_date}
        </SpanText>
        {/* <button onClick={goBack}>뒤로 돌아가기</button> */}
        <GoBackBtn history={history} />
      </div>
    </div>
  );
};

export default DetailTemplate;
