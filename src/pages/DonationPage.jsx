import React from 'react'
import './DonationPage.css'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRupeeSign,
  FaCreditCard,
  FaCommentDots
} from 'react-icons/fa';
const DonationPage = () => {
  return (
    <>
      <Navbar />

      <section className="donation-page">


        {/* PREMIUM GLOW */}
        <div className="donation-glow glow-one"></div>
        <div className="donation-glow glow-two"></div>

        <div className="donation-container">

          {/* LEFT CONTENT */}

          <div className="donation-left">

            <span>
              DONATION PLATFORM
            </span>

            <h1>
              Make A Better
              <br />
              Future Together
            </h1>

            <p>
              Your contribution helps children, families, and communities receive
              education, healthcare, shelter, and opportunities for a brighter future.
              Your generosity empowers underprivileged lives with education, medical care,
              nutritious meals, and the dignity of a better tomorrow.Every donation creates real
              impact by supporting families, children, and communities with hope, opportunity,
              and essential resources.Together, we can transform lives through compassionate support,
              quality education, healthcare access, and sustainable community development.
              Your support helps build safer futures by providing shelter, learning opportunities,
              emotional care, and life-changing assistance.Each contribution becomes a powerful step toward empowering vulnerable
              communities with stability, confidence, and brighter possibilities.
              Through your kindness, countless children and families receive the
              support they need to grow, learn, heal, and succeed.Your donation fuels meaningful change by bringing education,
              protection, healthcare, and hope to those who need it most.

            </p>

            <div className="donation-stats">

              <div className="stat-box">
                <h3>12K+</h3>
                <p>People Helped</p>
              </div>

              <div className="stat-box">
                <h3>95%</h3>
                <p>Donation Transparency</p>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="donation-right">

            <form className="donation-form">

              <div className="form-top">
                <h2>DONATION FORM</h2>

                <p>
                  Fill your details and support our mission securely.
                </p>
              </div>

              {/* NAME */}

              <div className="form-group">
                <label>
                  <FaUser className="label-icon" />
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              {/* EMAIL */}

              <div className="form-group">
                <label>
                  <FaEnvelope className="label-icon" />
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* PHONE */}

              <div className="form-group">
                <label>
                  <FaPhoneAlt className="label-icon" />
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* AMOUNT */}

              <div className="form-group">
                <label>
                  <FaRupeeSign className="label-icon" />
                  Donation Amount
                </label>

                <div className="amount-grid">
                  <button type="button">₹500</button>
                  <button type="button">₹1000</button>
                  <button type="button">₹5000</button>
                  <button type="button">Custom</button>
                </div>

                <input
                  type="number"
                  placeholder="Enter custom amount"
                />
              </div>

              {/* PAYMENT */}

              <div className="form-group">
                <label>
                  <FaCreditCard className="label-icon" />
                  Payment Method
                </label>

                <select>
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Net Banking</option>
                </select>
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label>
                  <FaCommentDots className="label-icon" />
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* CHECKBOX */}

              <div className="checkbox-area">
                <input type="checkbox" />

                <p>
                  I agree to securely process this donation and receive campaign updates.
                </p>
              </div>

              {/* BUTTON */}

              <button className="submit-btn">
                Complete Donation
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default DonationPage
