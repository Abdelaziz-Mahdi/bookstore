import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

export default function Nav() {
    const handleClick = (e) => {
        e.preventDefault()
      }
  return (
    <>
      {' '}
      <nav>
        <h1>
          <Link to='/'>Bookstore CMS</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: '#f5913e' } : {})}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: '#f5913e' } : {})}
              to='/categories'
              onClick={handleClick}
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
