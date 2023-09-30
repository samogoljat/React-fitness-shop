import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          Gym Land
        </Link>

        <button
          onClick={() => setMenuActive(!menuActive)}
          className={`hamburger-menu ${menuActive ? 'open' : ''}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <ul className={`navbar-tabs ${menuActive ? 'active' : ''}`}>
          <li className="navbar-tab">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-tab">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="navbar-tab">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-tab">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
