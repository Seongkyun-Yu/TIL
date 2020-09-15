import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import { Link } from 'react-router-dom';

import Poster from '../Atoms/Poster';
import SpanText from '../Atoms/SpanText';
import './style/MovieLists.css';

const MovieList = ({ type }) => {
  const context = useContext(MovieContext);
  const { state } = context;
  const movies = state[type];

  return (
    <ul className="movieInfoContainer">
      {Object.keys(movies).length !== 0
        ? movies.results.map((movie, i) => {
            return (
              <Link
                to={`/${movie.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
                movie={movie}
                key={`movieLink-${movie.id}`}
              >
                <li className="movieInfo" key={`movieList-${movie.id}`}>
                  <Poster url={movie.poster_path} title={movie.title} />
                  <SpanText className="movieTitle">{movie.title}</SpanText>
                  <SpanText className="movieTitle">{movie.vote_count}</SpanText>
                </li>
              </Link>
            );
          })
        : null}
    </ul>
  );
};

export default React.memo(MovieList);
