import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/home">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};
