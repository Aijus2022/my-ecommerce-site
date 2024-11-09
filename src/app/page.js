// src/app/page.js
"use client";  // Ensures this component can use client-side hooks

import { useCart } from '../context/CartContext'; // Import cart context for adding items
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const { addToCart } = useCart(); // Access addToCart function from cart context

    const handleAddToCart = (product) => {
        addToCart(product);  // Add the product to the cart
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div>
            {/* Mint Green Banner */}
            <div className="bg-mint-green text-center py-2 text-white font-semibold">
                For a limited time only, enjoy FREE DELIVERY on all orders over £150.
            </div>

            {/* Split Hero Section */}
            <section className="flex flex-col md:flex-row w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
                
                {/* Left Side - Hero Image with Gradient Overlay (60%) */}
                <div className="w-full md:w-3/5 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
                    <Image 
                        src="/images/home.jpg"  // Replace with your image path
                        alt="Hero Background" 
                        layout="fill" 
                        objectFit="cover" 
                        objectPosition="center" 
                        priority 
                        className="opacity-90"
                    />
                </div>

                {/* Right Side - Hero Text (40%) */}
                <div className="w-full md:w-2/5 bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12 animate-fade-in">
                    <div className="text-center md:text-left max-w-md z-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 drop-shadow-md">
                            A Christmas Extraordinary
                        </h1>
                        <p className="text-md md:text-lg text-gray-700 mb-4 drop-shadow-sm">
                            Wicker-bound parcels of Christmas joy. Exceptional food and drink for your feasting table. Glorious gifts, keepsake decorations, and crackers so lovely they're almost too beautiful to pull.
                        </p>
                        <Link href="/products" className="inline-block mt-4 text-white bg-mint-green px-6 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300">
                            Shop the Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="py-4 px-4 md:px-8 text-gray-600 text-sm flex items-center space-x-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/christmas-collection" className="hover:underline">Christmas Collection</Link>
            </nav>

            {/* Section 1: 4x4 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">Browse Our Exclusive Christmas Collection</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Discover a selection of carefully curated items for the holiday season, perfect for gifting and celebrating.
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
                            <Link href={product.link} className="text-teal-600 font-semibold hover:underline mt-2 block">
                                Shop Now
                            </Link>
                            <button 
                                onClick={() => handleAddToCart(product)} 
                                className="bg-mint-green text-white px-4 py-2 mt-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: 3x3 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">Gifts & Hampers for Every Celebration</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Celebrate with our luxurious collection of hampers, gifts, and festive decor that make every moment unforgettable.
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
                            <Link href={product.link} className="text-teal-600 font-semibold hover:underline mt-2 block">
                                Shop Now
                            </Link>
                            <button 
                                onClick={() => handleAddToCart(product)} 
                                className="bg-mint-green text-white px-4 py-2 mt-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Product Data for the Grids
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
        id: '7',  // Added unique ID
        image: '/images/advent-calendar.gif',
        title: 'Advent Calendar',
        description: 'Countdown to Christmas with delightful surprises.',
        price: 45.00,
        link: '/products/advent-calendar'
    }
];


