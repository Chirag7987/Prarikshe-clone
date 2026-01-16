import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! We'll send updates to ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PARIKSHE</h3>
          <p>Karnataka's one-stop solution for SSLC, PUC and KCET. Where Preparation Meets Success.</p>
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Other Links</h3>
          <ul>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:contactus@parikshe.in">contactus@parikshe.in</a></li>
            <li><a href="tel:6366548224">6366548224</a></li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com/parikshe" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com/parikshe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="https://linkedin.com/company/parikshe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://youtube.com/@parikshe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 parikshe.in. All rights reserved.</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;