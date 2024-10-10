// "use client"; // Mark as Client Component

// import React from 'react';
// import Header from '../../components/Header'; // Adjust the path to your Header component
// import Footer from '../../components/Footer'; // Adjust the path to your Footer component
// import styles from '../../app/styles/Product.module.css'; // Adjust path if necessary
// import { AiOutlineRight } from 'react-icons/ai'; 
// import { FaChartLine, FaUserCog, FaHeadset, FaLock } from 'react-icons/fa';

// const Product = () => {
//     return (
//         <>
//             <Header /> {/* Include the Header */}
//             <section className={styles.productPage}>
//                 <div className={styles.productContainer}>
//                     <div className={styles.textColumn}>
//                         <h2>Experience the thrill of Risk-free trading</h2>
//                         <p>
//                             This product offers advanced trading features, including real-time analytics, 
//                             customizable alerts, and a user-friendly interface. 
//                             Whether you are a beginner or an experienced trader, this product is designed to help you succeed.
//                         </p>
//                         {/* Button added here */}
//                         <button className={styles.ctaButton}>
//                             Get Started <AiOutlineRight style={{ marginLeft: '8px' }} />
//                         </button>
//                     </div>
//                     <div className={styles.imageColumn}>
//                         <img src="/images/wallet.png" alt="Product" />
//                     </div>
//                 </div>
//                 <div className={styles.attractiveSection}>
//                     <h2>Why Choose This Product?</h2>
//                     {/* <ul>
//                         <li>Comprehensive analytics and insights.</li>
//                         <li>User-friendly interface for seamless trading.</li>
//                         <li>24/7 customer support to assist you.</li>
//                         <li>Secure transactions and data protection.</li>
//                     </ul> */}
//                       <ul>
//                 <li><FaChartLine /> Comprehensive analytics and insights.</li>
//                 <li><FaUserCog /> User-friendly interface for seamless trading.</li>
//                 <li><FaHeadset /> 24/7 customer support to assist you.</li>
//                 <li><FaLock /> Secure transactions and data protection.</li>
//             </ul>
//                 </div>
//             </section>
//             <Footer /> {/* Include the Footer */}
//         </>
//     );
// };

// export default Product;
"use client"; // Mark as Client Component

import React from 'react';
import Header from '../../components/Header'; // Adjust the path to your Header component
import Footer from '../../components/Footer'; // Adjust the path to your Footer component
import styles from '../../app/styles/Product.module.css'; // Adjust path if necessary
import { AiOutlineRight } from 'react-icons/ai'; 
import { FaChartLine, FaUserCog, FaHeadset, FaLock } from 'react-icons/fa';

const Product = () => {
    return (
        <>
            <Header /> {/* Include the Header */}
            <section className={styles.productPage}>
                <div className={styles.productContainer}>
                    <div className={styles.textColumn}>
                        <h2>Experience the thrill of Risk-free trading</h2>
                        <p>
                            This product offers advanced trading features, including real-time analytics, 
                            customizable alerts, and a user-friendly interface. 
                            Whether you are a beginner or an experienced trader, this product is designed to help you succeed.
                        </p>
                        {/* Button added here */}
                        <button className={styles.ctaButton}>
                            Get Started <AiOutlineRight style={{ marginLeft: '8px' }} />
                        </button>
                    </div>
                    <div className={styles.imageColumn}>
                        <img src="/images/wallet.png" alt="Product" />
                    </div>
                </div>

<div className={styles.productInfoSection}>
    <div className={styles.infoImage}>
        <img src="/images/mobile.png" alt="Mobile Trading App" />
    </div>
    <div className={styles.infoText}>
        <h2>Trade Anywhere, Anytime</h2>
        <p>
            With our mobile trading app, you can access the markets and manage your trades from anywhere. 
            Stay connected and make informed trading decisions with real-time updates at your fingertips.
        </p>

        <p>
            Our user-friendly interface allows you to navigate through various features effortlessly. 
            You can execute trades, analyze market trends, and check your portfolio performance with just a few taps.
        </p>
        <p>
            Additionally, you can customize your trading experience by setting up alerts for price changes or market news. 
            This ensures that you are always ahead of the curve, ready to make your next move.
        </p>
        <p>
            Join thousands of satisfied users who trust our app for their trading needs. 
            Experience the convenience and flexibility of trading on your mobile device today!
        </p>
        <p>
            Download the app now and take the first step towards a more empowered trading journey. 
            Your financial future is just a tap away!
        </p>
    </div>
</div>


                {/* <div className={styles.attractiveSection}>
                    <h2>Why Choose This Product?</h2>
                    <ul>
                        <li><FaChartLine /> Comprehensive analytics and insights.</li>
                        <li><FaUserCog /> User-friendly interface for seamless trading.</li>
                        <li><FaHeadset /> 24/7 customer support to assist you.</li>
                        <li><FaLock /> Secure transactions and data protection.</li>
                    </ul>
                </div> */}
                <div className={styles.attractiveSection}>
    <h2>Why Choose This Product?</h2>
    <ul>
        <li><FaChartLine /> Comprehensive analytics and insights to help you make informed decisions.</li>
        <li><FaUserCog /> Intuitive and user-friendly interface for seamless trading experiences.</li>
        <li><FaHeadset /> 24/7 dedicated customer support, ready to assist you anytime.</li>
        <li><FaLock /> Advanced security features to ensure safe transactions and protect your data.</li>
    </ul>
    <button className={styles.ctaButton}>Learn More</button>
</div>

            </section>
            <Footer /> {/* Include the Footer */}
        </>
    );
};

export default Product;
