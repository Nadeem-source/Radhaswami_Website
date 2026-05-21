import React from 'react'
import './ContactPage.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots
} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <section className="contact-page">

        <div className="contact-container">

          <div className="contact-left">

            <span>CONTACT AFLISH</span>

            <h1>
              Let’s Build Something
              Meaningful Together
            </h1>

            <p>
              Connect with AFLISH Group for partnerships,
              social initiatives, business collaboration,
              leadership programs, youth empowerment,
              education support, technology-driven solutions,
              women empowerment campaigns, charitable activities,
              and community development programs focused on creating
              meaningful social impact across India.

              Our team is committed to building a stronger,
              more inclusive future through innovation,
              social responsibility, and sustainable development.
              We welcome individuals, organizations, and communities
              who wish to contribute toward positive change and nation-building.

              Together, we aim to inspire hope, empower lives,
              support underprivileged communities, and create
              opportunities that transform society for future generations.
            </p>


          </div>

          <div className="contact-right">

            <form>

              <div className="input-box">

                <FaUser className="input-icon" />

                <input
                  type="text"
                  placeholder="Your Name"
                />

              </div>

<div className="input-box">

  <FaEnvelope className="input-icon" />

  <input
    type="email"
    placeholder="Email Address"
  />

</div>
<div className="input-box">

  <FaPhoneAlt className="input-icon" />

  <input
    type="text"
    placeholder="Phone Number"
  />

</div>
              <div className="input-box textarea-box">

                <FaCommentDots className="input-icon textarea-icon" />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                ></textarea>

              </div>

              <button>
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default ContactPage