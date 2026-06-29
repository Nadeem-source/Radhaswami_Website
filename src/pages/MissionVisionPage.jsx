import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './MissionVisionPage.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faEye,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

const MissionVisionPage = () => {
  return (
    <>
      <Navbar scrollValue={0} 
      alwaysTop={true}
      
       />

      <section className="mission-hero">
        <div className="mission-content">

         <br/><br/>
          <span>OUR PURPOSE</span>
<br/><br/><br/>
          <h1>
            Building A Better Future Through
            <br/>Service, Innovation And Humanity
          </h1>
<br/>
          <p>
            Empowering communities through
            education, healthcare, financial
            inclusion and social welfare in India for a great future.
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
      Mission & Vision
    </span>

  </div>

</section>

{/* INTRO CONTENT */}

<section className="mission-intro">

  <div className="mission-intro-container">

    <h2>
      OUR MISSION & VISION
    </h2>

    <p>
      AFLISH Group believes that every individual deserves equal
      opportunities to learn, grow and live with dignity. Our mission
      and vision guide every initiative we undertake, helping us create
      meaningful and sustainable impact across communities.
    </p>

    <p>
      We are committed to empowering people through education,
      healthcare, skill development, child protection, humanitarian
      assistance and community welfare programs. By addressing social
      challenges with compassion and innovation, we strive to build
      stronger and more resilient communities.
    </p>

    <p>
      Our vision extends beyond short-term support. We focus on creating
      long-lasting change by enabling individuals and families to become
      self-reliant, confident and capable of shaping their own future.
      Through collaboration, transparency and dedication, AFLISH Group
      continues its journey toward building a more inclusive and
      equitable society.
    </p>

    <p>
      Every project, partnership and community initiative reflects our
      commitment to humanity, service and sustainable development. We
      believe that when people are empowered with knowledge,
      opportunities and support, they can transform not only their own
      lives but also the future of their communities.
    </p>

  </div>

</section>

{/* OUR GUIDING PRINCIPLES */}

<section className="guiding-section">

  <div className="guiding-container">

    <h2>OUR GUIDING PRINCIPLES</h2>

    <p>
      Our mission and vision are supported by strong values that guide
      every initiative, partnership and community engagement activity.
      These principles help us create meaningful, sustainable and
      people-centered impact across society to make life
      easy for everyone.
    </p>

    <div className="guiding-grid">

  <div className="guiding-card">

    <div className="guiding-icon">
      <FontAwesomeIcon icon={faBullseye}/>
    </div>

    <h3>Our Purpose</h3>

    <p>
      Creating meaningful social impact by empowering individuals,
      strengthening communities and promoting sustainable development.
    </p>

  </div>

  <div className="guiding-card">

    <div className="guiding-icon">
      <FontAwesomeIcon icon={faEye}/>
    </div>

    <h3>Our Vision</h3>

    <p>
      Building an inclusive society where every individual has access
      to opportunities, dignity, education and a better future.
    </p>

  </div>

  <div className="guiding-card">

    <div className="guiding-icon">
      <FontAwesomeIcon icon={faHandshake}/>
    </div>

    <h3>Our Mission</h3>

    <p>
      Delivering impactful programs through education, healthcare,
      livelihood support and community engagement initiatives.
    </p>

  </div>

</div>

  </div>

</section>

{/* VISION MISSION SHOWCASE */}

<section className="vision-showcase">

  <div className="vision-box">

    <div className="vision-content">
      <h2>Our Vision</h2>

      <p>
        To build a society where every individual has access
        to education, healthcare, livelihood opportunities,
        protection and equal opportunities for growth.
      </p>
    </div>

    <div className="vision-image">
      <img
        src="/images/vision-image.png"
        alt="Vision"
      />
    </div>

  </div>

  <div className="mission-box">

    <div className="mission-image">
      <img
        src="/images/mission-image.png"
        alt="Mission"
      />
    </div>

    <div className="mission-content-box">
      <h2>Our Mission</h2>

      <p>
        To empower communities through education,
        healthcare, child protection, livelihood
        development and humanitarian assistance,
        creating sustainable and lasting impact.
      </p>
    </div>

  </div>

</section>
  

      <Footer />
    </>
  )
}

export default MissionVisionPage