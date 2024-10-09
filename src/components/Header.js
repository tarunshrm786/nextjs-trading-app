
"use client"; // Mark this component as a Client Component
// src/components/Header.js
import { useState, useEffect } from 'react'; // Import useState and useEffect
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for optimized image rendering
import styles from '../app/styles/Header.module.css'; // Import CSS module for styling

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage hamburger menu
  const [scrollWidth, setScrollWidth] = useState(0); // State to manage scroll fill width

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle navigation state
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollTop = window.scrollY; // Amount scrolled
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercent = (scrollTop / windowHeight) * 100; // Scroll percentage
      setScrollWidth(scrollPercent); // Set width based on scroll percentage
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.fill} style={{ width: `${scrollWidth}%` }} />
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo-2.png" alt="Logo" width={200} height={80} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleNav}>
        <div className={`${styles.hamburgerLine} ${isNavOpen ? styles.active : ''}`} />
        <div className={`${styles.hamburgerLine} ${isNavOpen ? styles.active : ''}`} />
        <div className={`${styles.hamburgerLine} ${isNavOpen ? styles.active : ''}`} />
      </div>
      <nav className={`${styles.nav} ${isNavOpen ? styles.navActive : ''}`}>
        <ul className={styles.navList}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/support">Support</Link></li>
          <li>
            <Link href="/login" className={styles.button}>Login</Link>
          </li>
          <li>
            <Link href="/signup" className={styles.button}>Sign Up for free</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
