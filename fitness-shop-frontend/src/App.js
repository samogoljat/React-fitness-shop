import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
