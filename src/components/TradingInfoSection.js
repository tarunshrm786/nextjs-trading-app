// "use client"; // Mark as Client Component

// import React from 'react';
// import styles from '../app/styles/TradingInfoSection.module.css'; // Adjust path if necessary

// const TradingInfoSection = () => {
//   return (
//     <section className={styles.tradingInfoSection}>
//       <div className={styles.container}>
//         <div className={styles.column}>
//           <img src="/images/stock_market_bulls.png" alt="Trading" className={styles.image} />
//           <h2 className={styles.catchyLine}>"Trade Smart, Not Hard!"</h2>
//         </div>
//         <div className={styles.column}>
//           <h3 className={styles.heading}>Why Choose Our Trading Platform?</h3>
//           <p className={styles.paragraph}>
//             Our platform offers advanced trading tools, real-time analytics, and a user-friendly interface designed for both beginners and experienced traders. Join us and elevate your trading experience!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TradingInfoSection;

"use client"; // Mark as Client Component

import React from 'react';
import styles from '../app/styles/TradingInfoSection.module.css'; // Adjust path if necessary

const TradingInfoSection = () => {
  return (
    <section className={styles.tradingInfoSection}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img src="/images/stock_market_bulls.png" alt="Trading" className={styles.image} />
          <h2 className={styles.catchyLine}>"Trade Smart, Not Hard!"</h2>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Why Choose Our Trading Platform?</h3>
          {/* <p className={styles.paragraph}>
            Our platform offers advanced trading tools, real-time analytics, and a user-friendly interface designed for both beginners and experienced traders. Join us and elevate your trading experience!
            Our platform offers advanced trading tools, real-time analytics, and a user-friendly interface designed for both beginners and experienced traders. Join us and elevate your trading experience!
          </p> */}
          <p className={styles.paragraph}>
  Our platform offers advanced trading tools that empower you to make informed decisions in real time. With our user-friendly interface, both beginners and experienced traders can navigate effortlessly through various features. 
  We provide comprehensive analytics that allow you to track your performance and optimize your strategies. 
  Additionally, our platform is designed to be secure and reliable, ensuring that your trading experience is both safe and efficient. 
  Join us today and elevate your trading experience to new heights!
</p>

        </div>
      </div>
      {/* New Catchy Heading and Text Section */}
      <div className={styles.additionalSection}>
        {/* <h3 className={styles.additionalHeading}>Ignite Your Financial Future with Smart Trading!</h3> */}
        <h2 className={styles.additionalHeading}>The company will refund your losses, and you'll receive 50% of the profit.</h2>

        <p className={styles.additionalParagraph}>
          Experience a seamless trading environment with cutting-edge features that cater to your needs. Whether you're trading stocks, forex, or cryptocurrencies, our platform ensures you're equipped for success.
        </p>
      </div>
    </section>
  );
};

export default TradingInfoSection;
