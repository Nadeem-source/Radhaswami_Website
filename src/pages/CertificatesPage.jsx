import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './CertificatesPage.css'

const CertificatesPage = () => {

  return (

    <>
    
      <Navbar scrollValue={60} />

      <section className="certificates-page">

        <div className="certificates-heading">

          <span>Official Registrations & Approvals</span>

          <h1>
            Legal Certifications &
            Government Registrations
          </h1>

          <p>
            AFLISH Group of Companies is officially
            registered and recognized under multiple
            government authorities to ensure complete
            transparency, trust and social impact.
          </p>

        </div>

        <div className="certificates-grid">

          <div className="certificate-card">
            <h2>12A Registration</h2>
            <p>
              Certified under Income Tax Act for
              charitable organization recognition.
            </p>
          </div>

          <div className="certificate-card">
            <h2>80G Certification</h2>
            <p>
              Donations made are eligible for tax
              exemption benefits under Indian law.
            </p>
          </div>

          <div className="certificate-card">
            <h2>CSR-1 Registration</h2>
            <p>
              Approved by Ministry of Corporate Affairs
              for undertaking CSR activities.
            </p>
          </div>

          <div className="certificate-card">
            <h2>NGO Compliance</h2>
            <p>
              Operating with full transparency,
              accountability and legal compliance.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}

export default CertificatesPage
