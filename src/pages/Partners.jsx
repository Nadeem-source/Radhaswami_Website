import React from 'react'
import './Partners.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Partners = () => {
  return (
<>
<Navbar
scrollValue={60}
alwaysTop={true}
/>
    <section className="partners-page">

      <div className="partners-overlay"></div>

      <div className="partners-container">

        {/* LEFT LOGO */}

        <div className="partner-left">

          <div className="partner-logo-box">

            <img
              src="/images/RadhaSwamiOrganizationLOGO.jpeg"
              alt="Radhaswami Website"
            />
            {/* <img
              src="/images/RadhaSwamiOrganizationLOGO.jpeg"
              alt="Radhaswami Website"
            /> */}

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="partner-right">

          <span className="partner-tag">
            OFFICIAL SPIRITUAL PARTNER
          </span>

          <h1>
            RADHASWAMI ORGANIZATION
          </h1>

          <p>
            Radhaswami is a globally respected spiritual organization
            dedicated to inner peace, humanity, meditation,
            spiritual awakening and universal brotherhood.
            The organization focuses on love, compassion,
            selfless service and moral living while guiding
            individuals towards spiritual consciousness and
            divine connection.
          </p>

          <p>
            Through spiritual teachings, meditation practices,
            humanitarian values and community empowerment,
            Radhaswami continues to inspire millions of people
            across India and worldwide. Their mission promotes
            peace, harmony, humanity and a spiritually enriched life.
          </p>

          <div className="partner-info-grid">

            <div className="info-card">

              <h3>
                FOUNDED VISION
              </h3>

              <span>
                Spiritual Awakening & Humanity
              </span>

            </div>

            <div className="info-card">

              <h3>
                CORE VALUES
              </h3>

              <span>
                Peace • Meditation • Service • Love
              </span>

            </div>

            <div className="info-card">

              <h3>
                GLOBAL PRESENCE
              </h3>

              <span>
                Worldwide Spiritual Community
              </span>

            </div>

          </div>

          {/* <button
  className="visit-btn"
  onClick={() =>
   window.location.href = "https://www.radhaswami.org"
  }
>
  Visit Partner Website
</button> */}

        </div>

      </div>

    </section>
    <Footer />
    </>
  )
}

export default Partners