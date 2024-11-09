// src/context/CartContext.js
"use client";  // Ensure this file runs on the client side

import { createContext, useContext, useState } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the CartContext
export function useCart() {
    return useContext(CartContext);
}

// CartProvider component to wrap around app
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                // Increase quantity if item already exists in the cart
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Add new item to cart
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

