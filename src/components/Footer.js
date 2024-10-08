// // src/components/Footer.js
// import Image from 'next/image'; // Import Image for optimized image rendering
// import styles from '../app/styles/Footer.module.css';  // Import CSS module for styling
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.column}>
//         <div className={styles.logo}>
//           <Image src="/images/logo-2.png" alt="Logo" width={170} height={70} />
//         </div>
//         <div className={styles.contact}>
//           <p>Vaishnavi Tech Park, 3rd & 4th Floor</p>
//           <p>Sarjapur Main Road, Bellandur</p>
//           <p>Bengaluru – 560103</p>
//           <p>Contact Us</p>
//         </div>
//         <div className={styles.socialIcons}>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         </div>
//       </div>
//       <div className={styles.column}>
//         <h4 className={styles.footerTitle}>Products</h4> {/* Added local class */}
//         <ul>
//           <li><a href="/products/product1">Product 1</a></li>
//           <li><a href="/products/product2">Product 2</a></li>
//           <li><a href="/products/product3">Product 3</a></li>
//         </ul>
//       </div>
//       <div className={styles.column}>
//         <h4 className={styles.footerTitle}>Groww</h4> {/* Added local class */}
//         <ul>
//           <li><a href="/groww/invest">Invest</a></li>
//           <li><a href="/groww/learn">Learn</a></li>
//           <li><a href="/groww/blog">Blog</a></li>
//         </ul>
//       </div>
//       <div className={styles.column}>
//         <h4 className={styles.footerTitle}>Quick Links</h4> {/* Added local class */}
//         <ul>
//           <li><a href="/about">About Us</a></li>
//           <li><a href="/support">Support</a></li>
//           <li><a href="/contact">Contact Us</a></li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// src/components/Footer.js
import Image from 'next/image'; // Import Image for optimized image rendering
import styles from '../app/styles/Footer.module.css'; // Import CSS module for styling
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import app download icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logo}>
          <Image src="/images/logo-2.png" alt="Logo" width={200} height={80} />
        </div>
        <div className={styles.contact}>
          <p>Trishala Tech Park, 3rd & 4th Floor</p>
          <p>HSR Layout Main Road, Belland</p>
          <p>Bengaluru – 550003</p>
          <p>Contact Us</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
      <div className={styles.column}>
        <h4 className={styles.footerTitle}>Products</h4>
        <ul>
        <li><a href="/products/stocks">Stocks</a></li>
          <li><a href="/products/futures-options">Futures & Options</a></li>
          <li><a href="/products/ipo">IPO</a></li>
          <li><a href="/products/mutual-funds">Mutual Funds</a></li>
          <li><a href="/products/nfo">NFO</a></li>
          <li><a href="/products/credit">Credit</a></li>
          <li><a href="/products/bill-payments">Bill Payments</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4 className={styles.footerTitle}>Patriman</h4>
        <ul>
        <li><a href="/about">About Us</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/media-press">Media & Press</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/help-support">Help & Support</a></li>
          <li><a href="/trust-safety">Trust & Safety</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4 className={styles.footerTitle}>Quick Links</h4>
        <ul>
        <li><a href="/resources/amc-mutual-funds">AMC Mutual Funds</a></li>
          <li><a href="/resources/calculators">Calculators</a></li>
          <li><a href="/resources/glossary">Glossary</a></li>
          <li><a href="/resources/open-demat-account">Open Demat Account</a></li>
          <li><a href="/resources/partrima-digest">Partrima Digest</a></li>
          <li><a href="/resources/sitemap">Sitemap</a></li>
          <li><a href="/resources/web-stories">Web Stories</a></li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Patriman. All rights reserved.</p>
        </div>
        <div className={styles.downloadIcons}>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <FaGooglePlay size={40} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <FaApple size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
