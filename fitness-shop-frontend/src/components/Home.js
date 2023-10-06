// MainContent.js
import React from 'react';
import '../styles/Home.css';

function MainContent() {
  return (
    <div className="Home-container">
      <h1>Welcome to Gym Bro's</h1>
      <p>
        Join us and begin your journey towards a healthier lifestyle. Oh yeah.
      </p>
      <button
        className="explore-btn"
        onClick={() => {
          console.log('Explore button clicked!');
        }}
      >
        Explore
      </button>
    </div>
  );
}

export default MainContent;
