// fitness-shop-frontend/src/components/Shop.js
import React from 'react';
import { products } from '../helpers/fetchProducts';
import { Link } from 'react-router-dom';
import '../styles/Product.css';
import '../styles/Shop.css';

const Shop = () => {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product">
                <img src={product.image} alt={product.name} />
                <span>
                  {product.name} - {product.price}
                </span>
              </div>
              <button className="addToCartBtn">Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
