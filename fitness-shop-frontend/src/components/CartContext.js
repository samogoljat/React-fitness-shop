// /fitness-shop-frontend/components/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      // Increment the quantity of the existing product in the cart
      newCart[existingProductIndex].quantity += 1;
      setCart(newCart);
    } else {
      // Add the product as a new entry in the cart with quantity set to 1
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      // Decrement the quantity of the existing product in the cart
      newCart[existingProductIndex].quantity -= 1;
      
      // If the quantity reaches 0, filter out the product from the cart
      if (newCart[existingProductIndex].quantity === 0) {
        newCart.splice(existingProductIndex, 1);
      }
      
      setCart(newCart);
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;


