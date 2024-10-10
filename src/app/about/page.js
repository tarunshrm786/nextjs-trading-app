"use client"; // Mark as Client Component

import React from 'react';
import Header from '../../components/Header'; // Adjust the path to your Header component
import Footer from '../../components/Footer'; // Adjust the path to your Footer component
import styles from '../../app/styles/About.module.css'; // Adjust path if necessary
import { FaChartLine, FaRegUser, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <Header /> {/* Include the Header */}
      <section className={styles.aboutUsSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            At [Your Company Name], we are dedicated to empowering traders of all levels with the tools and resources they need to succeed. Our mission is to provide a seamless trading experience through innovative technology and exceptional support. 
          </p>
          <div className={styles.mission}>
            <h2 className={styles.missionHeading}>Our Mission</h2>
            <p className={styles.missionDescription}>
              To deliver a user-friendly trading platform that offers advanced tools, real-time analytics, and exceptional educational resources, making trading accessible and enjoyable for everyone.
            </p>
          </div>
          <h2 className={styles.whyChooseUsHeading}>Why Choose Us?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <FaChartLine className={styles.icon} />
              <h3 className={styles.featureHeading}>Advanced Trading Tools</h3>
              <p className={styles.featureDescription}>
                Utilize cutting-edge technology and sophisticated algorithms to enhance your trading strategies and maximize your potential.
              </p>
            </div>
            <div className={styles.feature}>
              <FaRegUser className={styles.icon} />
              <h3 className={styles.featureHeading}>Personalized Support</h3>
              <p className={styles.featureDescription}>
                Our dedicated support team is here to assist you every step of the way, ensuring you have a smooth trading experience.
              </p>
            </div>
            <div className={styles.feature}>
              <FaGlobe className={styles.icon} />
              <h3 className={styles.featureHeading}>Global Reach</h3>
              <p className={styles.featureDescription}>
                Trade anytime, anywhere with our platform designed for global access, providing you with opportunities across international markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Include the Footer */}
    </>
  );
};

export default AboutUs;
