import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart } = useCart();

  const formatPrice = (price) => {
      if (typeof price !== "number") {
          console.warn("Unexpected price type:", price);
          return "$0.00";
      }
      return `$${price.toFixed(2)}`;
  }

  return (
      <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
              <p>Your cart is empty</p>
          ) : (
              <ul>
                  {cart.map((product, index) => (
                      <li key={index}>
                          <div className="cart-item-info">
                              <img src={product.image} alt={product.name} />
                              <h3>{product.name}</h3>
                          </div>
                          <p>{formatPrice(product.price)}</p>
                      </li>
                  ))}
              </ul>
          )}
          {cart.length > 0 && (
              <div className="cart-total">
                  <span>Total:</span>
                  <span>
                      {formatPrice(cart.reduce((total, product) => {
                          if (typeof product.price === "number") {
                              return total + product.price;
                          } else {
                              console.warn("Unexpected price type:", product.price);
                              return total;
                          }
                      }, 0))}
                  </span>
              </div>
          )}
      </div>
  );
};

export default Cart;

