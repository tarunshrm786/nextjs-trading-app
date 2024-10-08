// // src/components/Laptop.js
// import React from 'react';
// import Image from 'next/image'; // Use Next.js's Image component for optimized image loading
// import styles from '../app/styles/Laptop.module.css'; // Import CSS module for styling

// const Laptop = () => {
//   return (
//     <div className={styles.container}>
//       {/* Dim Overlay */}
//       <div className={styles.dimOverlay}></div>
//       <Image
//         src="/images/laptop.jpg" // Replace with your image path
//         alt="Laptop Banner"
//         layout="fill" // Make the image cover the entire div
//         objectFit="cover" // Cover the div while maintaining aspect ratio
//         className={styles.image}
//       />
//       <div className={styles.textOverlay}>
//         <h1>Unlock Your Trading Potential!</h1>
//         <p>Join us and navigate the markets with confidence!</p>
//       </div>
//     </div>
//   );
// };

// export default Laptop;

// src/components/Laptop.js
import React from 'react';
import Image from 'next/image'; // Use Next.js's Image component for optimized image loading
import styles from '../app/styles/Laptop.module.css'; // Import CSS module for styling

const Laptop = () => {
  return (
    <div className={styles.container}>
      {/* Dim Overlay */}
      <div className={styles.dimOverlay}></div>
      <Image
        src="/images/laptop.jpg" // Replace with your image path
        alt="Laptop Banner"
        layout="fill" // Make the image cover the entire div
        objectFit="cover" // Cover the div while maintaining aspect ratio
        className={styles.image}
      />
      <div className={styles.textOverlay}>
        <h1>Unlock Your Trading Potential!</h1>
        <p>Join us and navigate the markets with confidence!</p>
        <a href="#" className={styles.button}>Know More</a>
      </div>
    </div>
  );
};

export default Laptop;
