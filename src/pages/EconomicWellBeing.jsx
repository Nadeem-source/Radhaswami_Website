import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EconomicWellBeing.css";

const EconomicWellBeing = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section className="ewb-hero">

        <div className="ewb-overlay"></div>

        <img
          src="/images/economic-hero.jpg"
          alt=""
          className="ewb-hero-img"
        />

        <div className="ewb-content">

          <span>ECONOMIC WELL BEING</span>

          <h1>
            Empowering Individuals Through
            Financial Independence &
            Sustainable Livelihoods
          </h1>

          <p>
            AFLISH Group supports communities through
            entrepreneurship, skill development,
            employment opportunities and financial
            empowerment initiatives.
          </p>

        </div>

      </section>

      <section className="ewb-about">

        <div className="ewb-container">

          <div className="ewb-left">

            <img
              src="/images/Economic-hero.jpg"
              alt=""
            />

          </div>

          <div className="ewb-right">

            <span>OUR APPROACH</span>

            <h2>
              Creating Opportunities For
              Sustainable Economic Growth
            </h2>

            <p>
              AFLISH Group works with youth, women,
              entrepreneurs and underprivileged families
              to build economic stability through
              education, training and livelihood support.
            </p>

            <p>
              Our mission is to reduce financial
              vulnerability and help individuals achieve
              long-term self-reliance.
            </p>

          </div>

        </div>

      </section>

      <section className="ewb-programs">

        <div className="section-title">

          <span>KEY INITIATIVES</span>

          <h2>
            Economic Empowerment Programs
          </h2>

        </div>

        <div className="ewb-grid">

          <div className="ewb-card">
            <h3>Skill Development</h3>
            <p>
              Industry-relevant training programs
              for employment readiness.
            </p>
          </div>

          <div className="ewb-card">
            <h3>Women Empowerment</h3>
            <p>
              Supporting women through
              entrepreneurship and income generation.
            </p>
          </div>

          <div className="ewb-card">
            <h3>Micro Enterprise</h3>
            <p>
              Helping small businesses grow
              through mentorship and support.
            </p>
          </div>

          <div className="ewb-card">
            <h3>Financial Literacy</h3>
            <p>
              Educating communities about savings,
              budgeting and financial planning.
            </p>
          </div>

          <div className="ewb-card">
            <h3>Employment Support</h3>
            <p>
              Connecting skilled individuals
              with job opportunities.
            </p>
          </div>

          <div className="ewb-card">
            <h3>Rural Livelihood</h3>
            <p>
              Promoting sustainable income
              opportunities in rural communities.
            </p>
          </div>

        </div>

      </section>

      <section className="ewb-stats">

        <div className="ewb-stat">
          <h3>3000+</h3>
          <p>Families Supported</p>
        </div>

        <div className="ewb-stat">
          <h3>500+</h3>
          <p>Entrepreneurs Guided</p>
        </div>

        <div className="ewb-stat">
          <h3>120+</h3>
          <p>Skill Workshops</p>
        </div>

        <div className="ewb-stat">
          <h3>50+</h3>
          <p>Community Programs</p>
        </div>

      </section>

      <section className="ewb-cta">

        <h2>
          Together We Can Build
          Financially Strong Communities
        </h2>

        <p>
          Support initiatives that create jobs,
          improve livelihoods and empower families.
        </p>

        <button>
          Support The Mission
        </button>

      </section>

      <Footer />
    </>
  );
};

export default EconomicWellBeing;