// fitness-shop-frontend/src/components
import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            {/* Additional product details and functionality (like remove from cart) can be added here */}
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <p>
                    Total: ${cart.reduce((total, product) => total + product.price, 0)}
                </p>
            )}
        </div>
    );
};

export default Cart;
