import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import movies from '../../../../movie-database';

export const MovieList = () => {
  return (
    <nav className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.title}`} key={movie.title}>
          {movie.title}
        </Link>
      ))}
    </nav>
  );
};
