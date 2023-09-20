// src/components/Navbar.js
import React, { useState } from "react";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/" className="navbar-brand">Gym Products</a>
        
        {/* Hamburger Menu Button */}
        <button onClick={() => setIsMenuOpen(prevState => !prevState)} className="hamburger-menu">
          ☰
        </button>
        
        {isMenuOpen && (
          <ul className="navbar-tabs">
            <li className="navbar-tab"><a href="/">Home</a></li>
            <li className="navbar-tab"><a href="/shop">Shop</a></li>
            <li className="navbar-tab"><a href="/about">About</a></li>
            <li className="navbar-tab"><a href="/contact">Contact</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
