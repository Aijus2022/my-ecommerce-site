// src/app/product/[id]/page.js
"use client";  // Mark as client component to use client-side hooks

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import styles from './Product.module.css';

// Sample product data (In a real app, you would fetch this from an API or database)
const productData = [
    {
        id: '1',
        title: 'Winter Warmers',
        description: 'A delightful blend of seasonal teas, coffee, and hot chocolate.',
        price: 25.00,
        image: '/images/tea.jpg',
    },
    // Add other products here
];

export default function Product() {
    const router = useRouter();
    const { id } = useRouter().query;
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    // Fetch product based on ID
    useEffect(() => {
        if (id) {
            const foundProduct = productData.find((item) => item.id === id);
            setProduct(foundProduct);
        }
    }, [id]);

    const handleShopNow = () => {
        addToCart(product);          // Add the product to the cart
        router.push('/cart');         // Redirect to the Cart page
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <div className={styles.productWrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={product.image} alt={product.title} width={500} height={500} className={styles.productImage} />
                </div>
                <div className={styles.detailsWrapper}>
                    <h1 className={styles.productTitle}>{product.title}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>£{product.price.toFixed(2)}</p>
                    <button onClick={handleShopNow} className={styles.button}>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}

