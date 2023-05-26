import React from 'react';
import movies from '../../movie-database';
import { useParams } from 'react-router-dom';
import './moviedetail.css';

export const MovieDetail = () => {
  const { id } = useParams();
  const movieData = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="movie">
      <img src={movieData.poster} alt={movieData.title}></img>
      <div className="description">
        <h2>{movieData.title}</h2>
        <p>{movieData.storyline}</p>
      </div>
    </div>
  );
};
