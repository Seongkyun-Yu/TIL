import React from 'react';
import './style/MovieTitle.css';

const MovieTitle = ({ children }) => {
  return <h2 className="movieTitle">{children}</h2>;
};

export default MovieTitle;
