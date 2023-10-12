import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import "./styles/App.css";

function App() {
  useEffect(() => {
    document.title = "Gym Shop";
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />      
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/product/:productId" element={<ProductDetail />} />   
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
