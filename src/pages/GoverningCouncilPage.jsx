import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './GoverningCouncilPage.css'
import { Link } from "react-router-dom";

const GoverningCouncilPage = () => {
  return (
    <>
      <Navbar scrollValue={60}
       alwaysTop={true}
       navbarClass="navbar-light"
       />

      <section className="council-hero">

        <div className="council-overlay"></div>

        <div className="council-content">

         <br/><br/><br/> <h1>Meet The Governing Council</h1><br/>

        <br/>  <p>
            Leadership guiding AFLISH Group
            towards social transformation.Dedicated to fostering positive change through strategic vision and collaborative efforts.
            to make a positive impact on society. Our council members bring diverse expertise and a shared commitment to driving 
            meaningful change in our communities.So
             join us in our mission to create a 
             better future for all, as we work 
             together to make a difference
              in the lives of those we serve for better 
              future our India in the modern era development.
          </p>

        </div>

      </section>
{/* BREADCRUMB */}

<section className="breadcrumb-section">

  <div className="breadcrumb-container">

    <Link to="/" className="breadcrumb-home">
      🏠
    </Link>

    <span className="breadcrumb-arrow">&gt;</span>

    <Link
      to="/about"
      className="breadcrumb-link"
    >
      About
    </Link>

    <span className="breadcrumb-arrow">&gt;</span>

    <span className="breadcrumb-current">
      Governing Council
    </span>

  </div>

</section>
<section className="council-intro">

  <div className="council-intro-container">

    <h2>
      AFLISH GROUP GOVERNING COUNCIL
    </h2>

    <p>
      The Governing Council of AFLISH Group provides strategic
      leadership, policy guidance and organizational oversight
      to ensure that every initiative aligns with our mission
      of social transformation and sustainable development.
    </p>

    <p>
      Our council members bring together expertise from
      business, social welfare, administration and community
      development. Their collective vision helps strengthen
      governance, accountability and long-term impact.
    </p>

    <p>
      Through effective leadership and collaborative decision
      making, the Governing Council plays a vital role in
      expanding opportunities, empowering communities and
      driving positive change across society.
    </p>

  </div>

</section>
      <section className="council-members-section">

  <div className="council-members-container">

    <h2>
      COUNCIL MEMBERS
    </h2>

    <p>
      Meet the dedicated leaders who guide AFLISH Group
      towards impactful growth, transparency and social
      transformation.
    </p>

  </div>

</section>
<div className="council-member-card">

  <div className="member-image">

    <img
      src="/images/team/Sir.jpg"
      alt=""
    />

  </div>

  <div className="member-details">

    <div className="member-badge">
      CHAIRMAN
    </div>

    <h2>
      MR. ISHHAQUE NAQVI
    </h2>

    <h4>
      Chairman, AFLISH Group
    </h4>

    <p>
      Mr. Ishhaque Naqvi serves as the Chairman of AFLISH
      Group and provides strategic direction for the
      organization’s long-term growth and social impact
      initiatives.
    </p>

    <p>
      His leadership focuses on innovation, governance,
      community empowerment and sustainable development,
      ensuring that AFLISH continues creating meaningful
      change across society.
    </p>

  </div>

</div>
<div className="council-member-card">

  <div className="member-image">

    <img
      src="/images/team/shanewaz.jpg"
      alt=""
    />

  </div>

  <div className="member-details">

    <div className="member-badge">
      CEO
    </div>

    <h2>
      MR. MOHD SHAHNAWAZ
    </h2>

    <h4>
      Chief Executive Officer
    </h4>

    <p>
      Mr. Mohd Shahnawaz leads AFLISH Group’s operations,
      programs and strategic implementation across multiple
      sectors including education, healthcare and community
      development.
    </p>

    <p>
      He is committed to strengthening organizational
      excellence while ensuring sustainable social impact
      for communities across India.
    </p>

  </div>

</div>
<div className="council-member-card">

  <div className="member-image">

    <img
      src="/images/team/NuzhatNaqvi.jpg"
      alt=""
    />

  </div>

  <div className="member-details">

    <div className="member-badge">
      DIRECTOR
    </div>

    <h2>
      MS. NUZHAT NAQVI
    </h2>

    <h4>
      Director
    </h4>

    <p>
      Ms. Nuzhat Naqvi contributes to policy development,
      program planning and organizational governance,
      helping AFLISH Group strengthen its outreach and
      effectiveness.
    </p>

    <p>
      Her commitment to social welfare and community
      engagement supports the organization’s mission of
      empowering underserved populations.
    </p>

  </div>

</div>
<div className="council-member-card">

  <div className="member-image">

    <img
      src="/images/team/Kaif.jpg"
      alt=""
    />

  </div>

  <div className="member-details">

    <div className="member-badge">
      DIRECTOR
    </div>

    <h2>
      MR. MOHD KAIF
    </h2>

    <h4>
      Director
    </h4>

    <p>
      Mr. Mohd Kaif plays a key role in organizational
      planning, community partnerships and operational
      development.
    </p>

    <p>
      He works closely with teams and stakeholders to
      expand AFLISH initiatives and maximize positive
      social impact.
    </p>

  </div>

</div>

      <Footer />
    </>
  )
}

export default GoverningCouncilPage