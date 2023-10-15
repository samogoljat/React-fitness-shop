// MainContent.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Home.css';

function MainContent() {
  return (
    <div className="Home-container">
      <h1>Welcome to Bro's Gym </h1>
      <p>
        Join us and begin your journey towards a healthier lifestyle. Oh yeah.
      </p>
      {/* Replace button with Link */}
      <Link to="/about" className="explore-btn">
        Explore
      </Link>
    </div>
  );
}

export default MainContent;
