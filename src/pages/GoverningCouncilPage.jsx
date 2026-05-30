import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './GoverningCouncilPage.css'

const GoverningCouncilPage = () => {
  return (
    <>
      <Navbar scrollValue={60} alwaysTop={true} />

      <section className="council-hero">

        <div className="council-overlay"></div>

        <div className="council-content">

          <h1>Governing Council</h1>

          <p>
            Leadership guiding AFLISH Group
            towards social transformation.
          </p>

        </div>

      </section>

      <section className="council-members">

        <div className="member-card">
          <h3>Mr. I.N. Naqvi</h3>
          <span>Managing Director</span>
        </div>

        <div className="member-card">
          <h3>Mr. Mohd Kaif</h3>
          <span>Director</span>
        </div>

        <div className="member-card">
          <h3>Ms. Nuzhat Naqvi</h3>
          <span>Director</span>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default GoverningCouncilPage