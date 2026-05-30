import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './FinancialsPage.css'

const FinancialsPage = () => {
  return (
    <>
      <Navbar scrollValue={60} alwaysTop={true} />

      <section className="financial-hero">

        <div className="financial-overlay"></div>

        <div className="financial-content">

          <h1>Financial Transparency</h1>

          <p>
            Accountability and transparency
            remain the foundation of our work.
          </p>

        </div>

      </section>

      <section className="financial-section">

        <div className="financial-card">

          <h3>Annual Reports</h3>

          <p>
            Access organizational annual reports.
          </p>

        </div>

        <div className="financial-card">

          <h3>Audit Reports</h3>

          <p>
            View audited financial statements.
          </p>

        </div>

        <div className="financial-card">

          <h3>Donor Transparency</h3>

          <p>
            Complete disclosure of fund utilization.
          </p>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default FinancialsPage