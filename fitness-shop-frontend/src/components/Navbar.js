// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // ensure you have react-icons installed
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { cart } = useCart();

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          Gym Bro's
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
          <li className="navbar-tab cart-tab">
            <Link to="/cart">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </li>
          <li className="navbar-tab">
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
