import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaImage,
  FaUsers,
  FaPhoneAlt,
  FaHeart,
  FaClipboardList
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box">
          <div className="footer-brand">

            <div className="footer-logo">
              <img src="/images/LOGO.jpeg" alt="logo" />
            </div>

            <div className="footer-logo-text">

  <h2 className="footer-logo-name">
    AFLISH GROUP
  </h2>

  <span className="footer-typing-text">
    Empowering Humanity
  </span>

</div>

          </div>
          <p>  Our mission is to inspire spiritual awakening, spread humanity,
            and create a world rooted in peace, purpose, and conscious living.

            We are committed to empowering communities through compassion,
            education, spiritual guidance, and impactful social initiatives.

            By uniting hearts with values of harmony, service, and positivity,
            we aim to build a brighter future for generations to come.

            {/* Through dedication, integrity, and collective efforts,
  we continue creating meaningful change across society. */}
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>


        <div className="footer-box">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/"><FaHome className="quick-icon" />Home</a></li>
            <li><a href="/about"><FaInfoCircle className="quick-icon" />About</a></li>
            <li><a href="/services"><FaHandsHelping className="quick-icon" />Services</a></li>
            <li><a href="/schemes"><FaClipboardList className="quick-icon" />Schemes</a></li>
            <li><a href="/gallery"><FaImage className="quick-icon" />Gallery</a></li>
            <li><a href="/team"><FaUsers className="quick-icon" />Team</a></li>
            <li><a href="/contact"><FaEnvelope className="quick-icon" />Contact</a></li>
            <li><a href="/donation"><FaHeart className="quick-icon" />Donation</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>CONTACT</h3>
          <p>
            <FaEnvelope className="footer-contact-icon" />
            Email: support@spiritualmission.org
          </p>
          <p>
            <FaPhoneAlt className="footer-contact-icon" />
            Phone: +91 9876543210
          </p>
          <p>
            <FaMapMarkerAlt className="footer-location-icon" />
            Delhi, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Spiritual Mission. All Rights Reserved. Designed and developed by  <a
            href="https://visionpay.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="techvision-link"
          >
            TechVision
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;