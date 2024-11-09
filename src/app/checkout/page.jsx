// src/app/checkout/page.js

"use client"; // Mark this file as a client component

import { useState } from 'react';
import styles from './Checkout.module.css';

export default function Checkout() {
    const [checkoutInfo, setCheckoutInfo] = useState({
        name: '',
        address: '',
        paymentMethod: 'Credit Card',
    });

    const [errors, setErrors] = useState({
        name: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCheckoutInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Clear error as user types
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Basic validation
        if (!checkoutInfo.name) {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
            valid = false;
        }
        if (!checkoutInfo.address) {
            setErrors((prevErrors) => ({ ...prevErrors, address: 'Address is required' }));
            valid = false;
        }

        if (valid) {
            alert(`Thank you for your purchase, ${checkoutInfo.name}!`);
            // Add additional submission logic here
        }
    };

    return (
        <div className={styles.checkoutContainer}>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={checkoutInfo.name} 
                        onChange={handleInputChange} 
                        placeholder="Enter your full name"
                        required 
                        className={styles.inputField}
                    />
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                </label>
                
                <label>
                    Address:
                    <input 
                        type="text" 
                        name="address" 
                        value={checkoutInfo.address} 
                        onChange={handleInputChange} 
                        placeholder="Enter your address"
                        required 
                        className={styles.inputField}
                    />
                    {errors.address && <p className={styles.errorText}>{errors.address}</p>}
                </label>
                
                <label>
                    Payment Method:
                    <select 
                        name="paymentMethod" 
                        value={checkoutInfo.paymentMethod} 
                        onChange={handleInputChange}
                        className={styles.selectField}
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </label>
                
                <button type="submit" className={styles.submitButton}>Complete Purchase</button>
            </form>
        </div>
    );
}



