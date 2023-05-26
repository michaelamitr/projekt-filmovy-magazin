import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import './style.css';
import { Home } from './pages/Home/home';
import { Articles } from './pages/Articles/articles';
import { Movies } from './pages/Movies/movies';
import { Reviews } from './pages/Reviews/reviews';
import { MovieDetail } from './pages/MoviesDetail/movieDetail';
import { ErrorPage } from '../../detsky-koutek/src/pages/ErrorPage/errorpage';
import { Menu } from './components/Menu/menu';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: '/movies/:id',
            element: <MovieDetail />,
          },
        ],
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
