import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <Link className='link' to="/">
            <h3>IITU</h3>
          </Link>
          <div className="nav">
            <Link className='link' to="/about">
              <div >About</div>
            </Link>
            <Link className='link' to="/contacts">
              <div>Contacts</div>
            </Link>
            <Link className='link' to="/login">
              <div>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
