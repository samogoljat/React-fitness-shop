import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function MainContent() {
  return (
    <div className="Home-container">
      <div className="Home-content">
        <h1>Welcome to Bro's Gym</h1>
        <p>
          Join us and begin your journey towards a healthier lifestyle. Oh yeah.
        </p>
        <Link to="/about" className="explore-btn">
          Explore
        </Link>
      </div>
      <div className="Home-image-overlay"></div>
    </div>
  );
}

export default MainContent;

