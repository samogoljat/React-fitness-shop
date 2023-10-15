// fitness-shop-frontend/src/components/Shop.js
import React from 'react';
import { products } from '../helpers/fetchProducts';
import { Link } from 'react-router-dom';
import { useCart } from "../components/CartContext";
import '../styles/Product.css';
import '../styles/Shop.css';

const Shop = () => {
  const { addToCart } = useCart(); 

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">€{product.price}</span>
                </div>
              </div>
            </Link>
            <button onClick={() => addToCart(product)} className="addToCartBtn">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
