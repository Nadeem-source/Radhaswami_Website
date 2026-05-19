import React from 'react'
import './ContactPage.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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
              and community development programs.
            </p>

          </div>

          <div className="contact-right">

            <form>

              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Email Address" />

              <input type="text" placeholder="Phone Number" />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

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