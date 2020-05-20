import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import { Link, useLocation } from 'react-router-dom';

import Poster from '../Atoms/Poster';
import SpanText from '../Atoms/SpanText';
import './style/MovieLists.css';

const MovieList = ({ type, history }) => {
  const context = useContext(MovieContext);
  const { state } = context;
  const movies = state[type];

  const location = useLocation().pathname;
  // let path = `/${location}`;
  console.log(location);

  return (
    <ul style={{ background: 'green', display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(movies).length !== 0
        ? movies.results.map((movie, i) => {
            return (
              <Link
                // to={location === '/' ? `/${i}` : `${location}` + `/${i}`}
                // to={`/${type}/${i}`}
                to={{
                  pathname: '/Detail',
                  state: movie,
                }}
                style={{ textDecoration: 'none', color: 'black' }}
                movie={movie}
              >
                <li className="movieInfo" key={i}>
                  <SpanText className="voteCount" text={movie.vote_count} />
                  <SpanText className="movieTitle" text={movie.title} />
                  <Poster url={movie.poster_path} title={movie.title} />
                </li>
              </Link>
            );
          })
        : null}
    </ul>
  );
};

export default MovieList;
