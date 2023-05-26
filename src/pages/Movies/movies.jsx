import React from 'react';
import './movies.css';
import { MovieList } from './components/MovieList/movieList';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';

export const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movies-container">
        <MovieList />
        <Outlet />
      </div>
    </div>
  );
};
