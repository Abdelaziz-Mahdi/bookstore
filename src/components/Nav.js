import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <>
      {' '}
      <nav className="navbar navbar-expand-lg bc-white-two">
        <div className="container">
          <div className="navbar-brand">
            <Link className="c-azure Bookstore-CMS" to="/">Bookstore CMS</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
            </ul>
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/user-icon.svg`} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
