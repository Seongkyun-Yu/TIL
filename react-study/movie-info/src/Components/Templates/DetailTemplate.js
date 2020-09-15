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
  console.log(detailMovies);

  return (
    <>
      {Object.keys(detailMovies).length && (
        <div className="detailContainer">
          <Poster
            url={detailMovies.poster_path}
            title={detailMovies.original_title}
          />
          <div className="descriptContainer">
            <MovieTitle>{detailMovies.title}</MovieTitle>
            <Description>{detailMovies.overview}</Description>
            <SpanText className="releaseDate">
              Release Date: {detailMovies.release_date}
            </SpanText>
            <GoBackBtn history={history} />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTemplate;
