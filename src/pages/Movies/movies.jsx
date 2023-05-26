import React from 'react';
import './movies.css';
import { MovieList } from './components/MovieList/movieList';

export const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movies-container">
        <MovieList />
      </div>
    </div>
  );
};
