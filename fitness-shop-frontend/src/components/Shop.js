import React from 'react';
import { products } from '../helpers/fetchProducts'; // Directly import products
import '../styles/Product.css';
import '../styles/Shop.css';

const Shop = () => {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img src={product.image} alt={product.name} />
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
