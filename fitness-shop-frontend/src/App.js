//App.js
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
import Cart from './components/Cart'; // Import Cart component
import { CartProvider } from './components/CartContext'; // Import CartProvider
import "./styles/App.css";

function App() {
  useEffect(() => {
    document.title = "Gym Shop";
  }, []);

  return (
    <CartProvider> 
      <Router>
        <div className="App">
          <Navbar /> 
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />      
              <Route path="/shop" element={<Shop />} /> 
              <Route path="/shop/:productId" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;
