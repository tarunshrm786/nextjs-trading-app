import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/styles/Product.module.css'; // Custom CSS file for styling

const Product = () => {
    return (
        <div className="product-page">
            <Header />
            <div className="product-description">
                <h1>Product Name</h1>
                <p>
                    This is a brief description of the product, highlighting its key features and benefits. 
                    The product is designed to meet the needs of traders and investors, offering high 
                    performance and reliability in the trading environment.
                </p>
            </div>
            <div className="product-container">
                <div className="text-column">
                    <h2>Product Details</h2>
                    <p>
                        This product offers advanced trading features, including real-time analytics, 
                        customizable alerts, and a user-friendly interface. 
                        Whether you are a beginner or an experienced trader, this product is designed to help you succeed.
                    </p>
                </div>
                <div className="image-column">
                    <img src="path_to_your_image.jpg" alt="Product" />
                </div>
            </div>
            <div className="attractive-section">
                <h2>Why Choose This Product?</h2>
                <ul>
                    <li>Comprehensive analytics and insights.</li>
                    <li>User-friendly interface for seamless trading.</li>
                    <li>24/7 customer support to assist you.</li>
                    <li>Secure transactions and data protection.</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
