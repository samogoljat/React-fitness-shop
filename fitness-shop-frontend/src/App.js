//App.js

import React, { useState, useEffect } from 'react';
import { fetchProducts } from './helpers/fetchProducts';
import { nameChange } from './helpers/nameChange';
import './styles/App.css'; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">Gym Products</div>
      </header>
      <main>
        <ul className="content-container">
          {products.map(product => (
            <li className="product" key={product.id}>
              <img 
                src={require(`./assets/gym/${nameChange(product.name)}`)} 
                alt={product.name} 
              />
              <span>
                {product.name} - {product.price}
              </span>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <div className="footer-content">2023 © GymStore Inc.</div>
      </footer>
    </div>
  );
}

export default App;
