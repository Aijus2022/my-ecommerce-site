// src/app/product/[id]/page.js

import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import styles from './Product.module.css';
import fs from 'fs';
import path from 'path';

export default function Product({ product }) {
    const { addToCart } = useCart();

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

// Fetch product data from productDetails.json file based on the ID from the URL
export async function getServerSideProps({ params }) {
    const { id } = params;

    // Path to your productDetails.json file
    const filePath = path.join(process.cwd(), 'src/data/productDetails.json');
    
    // Read and parse the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Find the product based on the ID
    const product = data.find(item => item.id === id);

    // Return the product data as a prop to the component
    return {
        props: { product: product || null },
    };
}


