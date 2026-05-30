import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./HealthAndNutrition.css";

const HealthAndNutrition = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section className="hn-hero">

        <div className="hn-overlay"></div>

        <img
          src="/images/health-hero.jpg"
          alt=""
          className="hn-hero-img"
        />

        <div className="hn-hero-content">

          <span>HEALTH & NUTRITION</span>

          <h1>
            Building Healthy Communities
            Through Care, Nutrition &
            Preventive Healthcare
          </h1>

          <p>
            AFLISH Group works to improve the
            health and nutritional well-being
            of children, women and vulnerable
            communities through awareness,
            healthcare camps and nutrition support.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="hn-about">

        <div className="hn-container">

          <div className="hn-left">

            <img
              src="/images/health-camp.jpg"
              alt=""
            />

          </div>

          <div className="hn-right">

            <span>OUR COMMITMENT</span>

            <h2>
              Quality Healthcare &
              Better Nutrition For Everyone
            </h2>

            <p>
              Access to healthcare and proper nutrition
              remains a challenge for many communities.
              AFLISH Group conducts health awareness
              drives, free medical camps, nutrition
              initiatives and preventive healthcare
              programs to create healthier lives.
            </p>

            <p>
              Our programs focus on maternal health,
              child nutrition, disease prevention,
              hygiene awareness and access to
              essential medical support.
            </p>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}

      <section className="hn-programs">

        <h2>Our Key Initiatives</h2>

        <div className="hn-grid">

          <div className="hn-card">
            <h3>Healthcare Camps</h3>
            <p>
              Free medical checkups, consultation,
              diagnosis and awareness programs.
            </p>
          </div>

          <div className="hn-card">
            <h3>Child Nutrition</h3>
            <p>
              Supporting children through nutrition
              awareness and healthy food initiatives.
            </p>
          </div>

          <div className="hn-card">
            <h3>Women Health</h3>
            <p>
              Maternal care, hygiene awareness and
              health education programs.
            </p>
          </div>

          <div className="hn-card">
            <h3>Disease Prevention</h3>
            <p>
              Awareness campaigns for preventive
              healthcare and healthy lifestyles.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="hn-stats">

        <div className="stat-box">
          <h3>5000+</h3>
          <p>Lives Impacted</p>
        </div>

        <div className="stat-box">
          <h3>100+</h3>
          <p>Health Camps</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Communities Served</p>
        </div>

        <div className="stat-box">
          <h3>1000+</h3>
          <p>Children Supported</p>
        </div>

      </section>

      {/* CTA */}

      <section className="hn-cta">

        <h2>
          Together We Can Create
          A Healthier Future
        </h2>

        <p>
          Support our healthcare and nutrition
          initiatives to bring hope and wellness
          to underserved communities.
        </p>

        <button>Support The Cause</button>

      </section>

      <Footer />
    </>
  );
};

export default HealthAndNutrition;