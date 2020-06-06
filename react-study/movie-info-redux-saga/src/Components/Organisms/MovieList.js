import React from 'react';
import { useSelector } from 'react-redux';
import Poster from '../Atoms/Poster';
import './style/MovieList.scss';

const MovieList = ({ type }) => {
  const movies = useSelector((state) => state[type].movies);
  return (
    <ol className="movieList">
      {movies.map((movie) => {
        return (
          <li>
            <Poster url={movie.poster_path} title={movie.title} />
            <strong>{movie.title}</strong>
            <span>Popularity: {Math.round(movie.popularity)}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default MovieList;
