import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './MissionVisionPage.css'

const MissionVisionPage = () => {
  return (
    <>
      <Navbar scrollValue={60} alwaysTop={true} />

      <section className="mission-hero">

        <div className="mission-overlay"></div>

        <div className="mission-content">

          <span>OUR PURPOSE</span>

          <h1>
            Building A Better Future Through
            Service, Innovation & Humanity
          </h1>

          <p>
            Empowering communities through
            education, healthcare, financial
            inclusion and social welfare.
          </p>

        </div>

      </section>

      <section className="mission-section">

        <div className="mission-card">

          <h2>Our Vision</h2>

          <p>
            To become India's most trusted
            organization creating sustainable
            social impact through innovation,
            empowerment and humanitarian services.
          </p>

        </div>

        <div className="mission-card">

          <h2>Our Mission</h2>

          <p>
            To uplift communities through
            education, healthcare, livelihood,
            women empowerment and financial support.
          </p>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default MissionVisionPage