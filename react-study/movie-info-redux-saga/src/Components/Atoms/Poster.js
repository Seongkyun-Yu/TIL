import React from 'react';
import './style/Poster.scss';

const Poster = ({ url, title }) => {
  return (
    <img
      className="poster"
      src={`https://image.tmdb.org/t/p/w500/${url}`}
      alt={title}
    />
  );
};

export default Poster;
