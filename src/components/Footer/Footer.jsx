import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box">
          <h2>Radha Spiritual Mission</h2>
          <p>
            A premium spiritual organization website experience designed with
            modern UI, smooth animations, and luxurious aesthetics.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Donation</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: support@spiritualmission.org</p>
          <p>Phone: +91 9876543210</p>
          <p>Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Spiritual Mission. All Rights Reserved. Designed With Premium React UI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;