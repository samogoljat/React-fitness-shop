import React from "react";
import "../styles/Navbar.css";  // Adjust the path according to your project structure

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/" className="navbar-brand">Gym Products</a>
        <ul className="navbar-tabs">
          <li className="navbar-tab"><a href="/">Home</a></li>
          <li className="navbar-tab"><a href="/shop">Shop</a></li>
          <li className="navbar-tab"><a href="/about">About</a></li>
          <li className="navbar-tab"><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
