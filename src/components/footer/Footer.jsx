import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: finance@psfinsec.com</p>
          <p>Phone: +91 011 2738282-88</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/contactInfo">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 PS Finsec Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
