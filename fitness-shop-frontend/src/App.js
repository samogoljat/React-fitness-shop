import React, { useEffect } from "react";
import "./styles/App.css";
import products from "./helpers/products";

function App() {
  useEffect(() => {
    document.title = "Fitness Shop";
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Fitness Shop</h1>
        </header>
        <main>
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              >
                <span>
                  {product.name} - {product.price}
                </span>
              </li>
            ))}
          </ul>
        </main>
        <footer>
          <p>© 2023 Fitness Shop</p>
        </footer>
      </div>
    </>
  );
}

export default App;
