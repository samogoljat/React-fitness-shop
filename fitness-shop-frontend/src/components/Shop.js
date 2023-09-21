// src/components/MainContent.js
import React, { useState, useEffect } from "react";
import { fetchProducts, nameChange } from "../helpers/FetchProducts";
import "../styles/Product.css";
import "../styles/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img
                src={require(`../assets/gym/${nameChange(product.name)}`)}
                alt={product.name}
              />
              <span>
                {product.name} - {product.price}
              </span>
            </div>
            <button className="addToCartBtn">Add to Cart</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
