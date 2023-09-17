import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "Dumbbell", price: "$50" },
    { id: 2, name: "Treadmill", price: "$500" },
    // ... add more products as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Shop</h1>
      </header>
      <main>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>© 2023 Fitness Shop</p>
      </footer>
    </div>
  );
}

export default App;