import React from 'react';
import movies from '../../movie-database';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const { id } = useParams();
  const movieData = movies.find((movie) => movie.title === id);

  return (
    <div className="movie">
      <img src={movieData.poster} alt={movieData.title}></img>
      <h2>{movieData.title}</h2>
      <p>{movieData.storyline}</p>
    </div>
  );
};
