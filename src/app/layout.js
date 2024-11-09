// src/app/layout.js
import './globals.css';
import Header from './components/Header';
import { CartProvider } from '../context/CartContext'; // Import CartProvider

export const metadata = {
    title: 'My E-Commerce Site',
    description: 'An online store styled after Fortnum & Mason',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CartProvider>  {/* Wrap the entire app with CartProvider */}
                    <Header />  {/* Header with Cart link */}
                    <main className="content">{children}</main>
                    <footer className="footer">
                        © 2023 My E-Commerce Store
                    </footer>
                </CartProvider>
            </body>
        </html>
    );
}


