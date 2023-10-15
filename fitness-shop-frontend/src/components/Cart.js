import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, addToCart, removeFromCart } = useCart();

    const formatPrice = (price) => {
        if (typeof price !== "number") {
            console.warn("Unexpected price type:", price);
            return "0.00€";
        }
        return `${price.toFixed(2)}€`;
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((product, index) => (
                        <li key={index} className="cart-item">
                            <div className="cart-item-info">
                                <img src={product.image} alt={product.name} className="cart-item-image" />
                                <h3>{product.name}</h3>
                            </div>
                            <div className="cart-item-actions">
                                <button onClick={() => removeFromCart(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => addToCart(product)}>+</button>
                            </div>
                            <p>{formatPrice(product.price)} x {product.quantity} = {formatPrice(product.price * product.quantity)}</p>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="cart-total">
                    <span>Total:</span>
                    <span>
                        {formatPrice(cart.reduce((total, product) => total + (product.price * product.quantity), 0))}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Cart;
