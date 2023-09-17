// App.js
import React, { useState, useEffect } from "react";
import { fetchProducts } from "./helpers/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products when the component mounts
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  return (
    <div className="App">
      {products.length ? (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;
