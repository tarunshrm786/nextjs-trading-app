// src/components/ShowcaseImage.js
import Image from 'next/image'; // Import Next.js Image for optimized loading
import styles from '../app/styles/HomeBanner.module.css'; // Import CSS module for styling

const HomeBanner = () => {
  return (
    <div className={styles.container}>
      <Image 
        src="/images/patriman.png" // Update with your image path
        alt="Trading App Showcase"
        width={750} // Set desired width
        height={700} // Set desired height
        className={styles.image} // Optional styling
        loading="lazy" // Enable lazy loading
      />
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Invest in Your Future</h1>
        <p className={styles.paragraph}>Join our online platform to explore stocks, derivatives, mutual funds, ETFs, bonds, and more!</p>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default HomeBanner;
