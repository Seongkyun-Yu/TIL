import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

import Poster from '../Atoms/Poster';
import MovieTitle from '../Atoms/MovieTitle';
import Description from '../Atoms/Description';
import SpanText from '../Atoms/SpanText';
import GoBackBtn from '../Atoms/GoBackBtn';

import './style/DetailTemplate.css';

const DetailTemplate = ({ history }) => {
  const context = useContext(MovieContext);
  const { state } = context;
  const { detailMovies } = state;

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="detailContainer">
      <Poster
        url={detailMovies.poster_path}
        title={detailMovies.original_title}
      />
      <div className="descriptContainer">
        <MovieTitle>{detailMovies.original_title}</MovieTitle>
        <Description>{detailMovies.overview}</Description>
        <SpanText className="releaseDate">
          Release Date: {detailMovies.release_date}
        </SpanText>
        {/* <button onClick={goBack}>뒤로 돌아가기</button> */}
        <GoBackBtn history={history} />
      </div>
    </div>
  );
};

export default DetailTemplate;
