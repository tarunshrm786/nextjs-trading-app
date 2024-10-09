"use client"; // Mark as Client Component

import React, { useState, useEffect } from 'react';
import { FaChartLine, FaBitcoin, FaDollarSign, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../app/styles/Testimonial.module.css'; // Adjust path if necessary

const testimonials = [
  {
    name: "John Doe",
    feedback: "The trading platform is fast and user-friendly. I made great profits!",
    icon: <FaChartLine />
  },
  {
    name: "Emily White",
    feedback: "I've never experienced such smooth trades before. Highly recommended!",
    icon: <FaBitcoin />
  },
  {
    name: "Michael Johnson",
    feedback: "The analytics tools are top-notch. I love the performance tracking features.",
    icon: <FaDollarSign />
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.testimonialHeading}>What Our Traders Say</h2>
        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialIcon}>
              {testimonials[currentIndex].icon}
            </div>
            <p className={styles.testimonialFeedback}>"{testimonials[currentIndex].feedback}"</p>
            <h4 className={styles.testimonialName}>- {testimonials[currentIndex].name}</h4>
          </div>
          <div className={styles.sliderControls}>
            <button onClick={handlePrev} className={styles.sliderButton}>
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className={styles.sliderButton}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
