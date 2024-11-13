// src/app/product/[id]/page.jsx

import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import styles from './Product.module.css';
import fs from 'fs';
import path from 'path';

// Server-side function to fetch product data
async function getProductData(id) {
    const filePath = path.join(process.cwd(), 'src/data/productDetails.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.find(item => item.id === id) || null;
}

export default async function ProductPage({ params }) {
    const { addToCart } = useCart();
    const { id } = params;
    const product = await getProductData(id);

    const handleShopNow = () => {
        addToCart(product);  // Add the product to the cart
        window.location.href = '/cart';  // Redirect to the Cart page
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



