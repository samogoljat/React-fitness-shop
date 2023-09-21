// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/MainContent";  // Rename this to Home for clarity
import Footer from "./components/Footer";
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import "./styles/App.css";

function App() {
  useEffect(() => {
    document.title = "Gym Shop";
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/shop" element={<Shop />} />    
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
