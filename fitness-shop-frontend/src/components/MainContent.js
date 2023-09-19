import React, { useState, useEffect } from "react";
import { fetchProducts } from "../helpers/fetchProducts";
import { nameChange } from "../helpers/nameChange";
import '../styles/Product.css';

const MainContent = () => {
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
          <li className="product" key={product.id}>
            <img
              src={require(`../assets/gym/${nameChange(product.name)}`)}
              alt={product.name}
            />
            <span>
              {product.name} - {product.price}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;
