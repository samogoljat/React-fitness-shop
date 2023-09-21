import React from 'react';
import '../styles/About.css';

function About() {
  return (
      <div className="About-container">
          <h2 className="About-heading">About Us</h2>
          <p className="About-text">
              Established in <span className="About-highlight">1990</span>, Our Gym has been at the forefront of the fitness revolution. With our state-of-the-art equipment and training programs, we've transformed thousands of lives.
          </p>
          <p className="About-text">
              Our history is built on a passion for excellence. From humble beginnings, we've grown to be one of the most renowned fitness institutions in the region. Our success is built on the hard work and dedication of our trainers and staff, and the commitment of our members.
          </p>
          <p className="About-text">
              Our vision is simple - to create a space where individuals of all fitness levels can come together, push their limits, and achieve their goals. We believe in the transformative power of fitness, and our mission is to inspire and support our community in their pursuit of health and wellness.
          </p>
      </div>
  );
}

export default About;