// src/app/cart/page.js
"use client"; 
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import styles from './Cart.module.css';

export default function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    return (
        <div className={styles.container}>
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>No items in your cart yet!</p>
            ) : (
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={item.title} className={styles.cartImage} />
                            <div className={styles.cartDetails}>
                                <h3>{item.title}</h3>
                                <p>£{item.price.toFixed(2)} x {item.quantity}</p>
                                <p>Total: £{(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className={styles.cartSummary}>
                        <p>
                            Total: £{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                        </p>
                        <button onClick={clearCart} className={styles.clearButton}>Clear Cart</button>
                        <Link href="/checkout">
                            <button className={styles.checkoutButton}>Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

