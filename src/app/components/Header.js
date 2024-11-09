// src/app/components/Header.js
"use client";  // Mark as a client component

import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Header() {
    const { cartItems } = useCart();

    // Calculate total quantity of items in the cart
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <header className="header">
            <h1 className="logo">My E-Commerce Store</h1>
            <nav className="nav">
                <Link href="/" className="navLink">Home</Link>
                <Link href="/products" className="navLink">Products</Link>
                <Link href="/cart" className="navLink">
                    Cart {cartItemCount > 0 && <span className="cartCount">({cartItemCount})</span>}
                </Link>
            </nav>
        </header>
    );
}
