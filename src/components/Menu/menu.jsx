import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
    </nav>
  );
};
