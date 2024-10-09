"use client"; // Mark as Client Component

import React from 'react';
import styles from '../app/styles/TradeBuildingShowcase.module.css'; // Adjust path if necessary

const TradeBuildingShowcase = () => {
  return (
    <section className={styles.tradeBuildingShowcase}>
      <div className={styles.container}>
        <img 
          src="/images/city-vector.png" 
          alt="Trade Building" 
          className={styles.tradeBuildingImage} 
        />
        <div className={styles.textContainer}>
          <h2 className={styles.showcaseHeading}>Explore Our Trade Center!</h2>
          <p className={styles.showcaseDescription}>
            Our state-of-the-art trade building is designed to facilitate seamless trading experiences, equipped with the latest technology and amenities to support traders of all levels. Join us to take your trading journey to the next level!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradeBuildingShowcase;
