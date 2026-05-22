import React from 'react'
import './AboutPage.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar scrollValue={60} />

      <section className="about-page">

        <div className="about-page-overlay"></div>

        <div className="about-page-container">

          <div className="about-page-left">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="about"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              alt="about"
            />

          </div>

          <div className="about-page-right">

            <span>ABOUT AFLISH GROUP</span>

            <h1>
              Building Financial Hope &
              Social Empowerment Across India And
             Empowering Communities Through
              Innovation & Social Impact
            </h1>

            <p>
              AFLISH Group of Companies was established with a powerful vision —
              to provide financial support, opportunities, and economic empowerment
              to individuals who are often neglected by traditional systems.
            </p>

            <p>
              Incorporated on 21st July 2024 under the Ministry of Corporate Affairs,
              Government of India, AFLISH aims to bridge the gap between people and
              opportunities through innovation, social welfare initiatives, and
              people-first services.
            </p>
<p>
              AFLISH Group of Companies is committed to creating meaningful
              social transformation through entrepreneurship, technology,
              education, and community development programs.
            </p>

            
            <p>
              The company is also committed to helping individuals achieve financial
              stability, business growth, better healthcare awareness, educational
              opportunities, and a stronger future.
            </p>
<p>
              Our mission is to build opportunities for youth, empower women,
              support education initiatives, and create sustainable development
              projects across India.
            </p>
            <div className="about-page-details">

              <div className="detail-card">
                <h3>Vision</h3>

                <p>
                  To become India’s most trusted company for social welfare,
                  financial empowerment, and economic development.
                </p>
              </div>

              <div className="detail-card">
                <h3>Mission</h3>

                <p>
                  To uplift society economically, socially, and financially by
                  providing accessible support and growth opportunities.
                </p>
              </div>

            </div>

            <div className="authority-section">

              <h2>Leadership Authorities</h2>

              <ul>

                <li>Mr. I.N. Naqvi — Managing Director</li>

                <li>Mr. Mohd Kaif — Director</li>

                <li>Ms. Nuzhat Naqvi — Director</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default AboutPage