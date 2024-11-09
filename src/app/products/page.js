// src/app/products/page.js
"use client";  // Ensures this component can use client-side hooks

import { useCart } from '../../context/CartContext'; // Import cart context for adding items
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
    const { addToCart } = useCart(); // Access addToCart function from cart context

    const handleAddToCart = (product) => {
        addToCart(product);  // Add the product to the cart
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div>
            {/* Mint Green Banner */}
            <div className="bg-mint-green text-center py-2 text-white font-semibold">
                Enjoy FREE DELIVERY on all orders over £150.
            </div>

            {/* Vertical Split Hero Section */}
            <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
                
                {/* Top Part - Hero Image (60% Height) */}
                <div className="h-[60%] w-full relative">
                    <Image 
                        src="/images/wine-and-spirits.jpg"  // Replace with your image path
                        alt="Products Hero Background" 
                        layout="fill" 
                        objectFit="cover" 
                        objectPosition="center" 
                        priority 
                        className="opacity-90"
                    />
                </div>

                {/* Bottom Part - Hero Text (40% Height) */}
                <div className="h-[40%] w-full bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12">
                    <div className="text-center max-w-lg">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Explore Our Exquisite Products</h1>
                        <p className="text-md md:text-lg text-gray-700">
                            Browse our wide range of carefully curated items, crafted to bring joy, beauty, and quality to every occasion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="py-4 px-4 md:px-8 text-gray-600 text-sm flex items-center space-x-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:underline">Products</Link>
            </nav>

            {/* Section 1: 4x4 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">Our Bestselling Products</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Discover our collection of bestsellers, carefully selected to bring you the finest in quality and taste.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {productData4x4.map((product, index) => (
                        <div key={index} className="text-center animate-fade-in-up delay-[100ms] duration-[300ms]">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <button 
                                onClick={() => handleAddToCart(product)} 
                                className="text-teal-600 font-semibold hover:underline mt-2 block"
                            >
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: 3x3 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">New Arrivals & Exclusive Items</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Check out our latest arrivals and exclusive products, perfect for gifting or treating yourself.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {productData3x3.map((product, index) => (
                        <div key={index} className="text-center animate-fade-in-up delay-[100ms] duration-[300ms]">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <button 
                                onClick={() => handleAddToCart(product)} 
                                className="text-teal-600 font-semibold hover:underline mt-2 block"
                            >
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Sample product data for the 4x4 and 3x3 grids
const productData4x4 = [
    {
        id: '1',
        image: '/images/tea.jpg',
        title: 'Winter Warmers',
        description: 'Seasonal teas, coffee, and hot chocolate.',
        price: 25.00,
        link: '/products/winter-warmers'
    },
    {
        id: '2',
        image: '/images/vine.jpg',
        title: 'Wine & Spirits',
        description: 'Handpicked selection of festive drinks.',
        price: 40.00,
        link: '/products/wine-spirits'
    },
    {
        id: '3',
        image: '/images/crackers.jpg',
        title: 'Festive Crackers',
        description: 'Luxurious crackers for the Christmas table.',
        price: 15.00,
        link: '/products/crackers'
    },
    {
        id: '4',
        image: '/images/giftbox.jpg',
        title: 'New for 2024!',
        description: 'Exquisite Christmas collection for 2024.',
        price: 50.00,
        link: '/products/new-for-2024'
    },
];

const productData3x3 = [
    {
        id: '5',
        image: '/images/nice-hamper.jpg',
        title: 'Luxury Hampers',
        description: 'The perfect gift for any occasion.',
        price: 60.00,
        link: '/products/luxury-hampers'
    },
    {
        id: '6',
        image: '/images/teabox-hamper.jpg',
        title: 'Tea Lovers Collection',
        description: 'A delightful selection of teas.',
        price: 30.00,
        link: '/products/tea-lovers'
    },
    {
        id: '7',
        image: '/images/advent-calendar.gif',
        title: 'Festive Decorations',
        description: 'Beautiful decor to brighten up your home.',
        price: 20.00,
        link: '/products/decorations'
    },
];
