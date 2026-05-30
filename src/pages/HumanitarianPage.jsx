import React from "react";
import "./HumanitarianPage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HumanitarianPage = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section
        className="humanitarian-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.65)), url('/images/humanitarian-hero.jpg')",
        }}
      >
        <div className="humanitarian-hero-content">
          <span>EMERGENCY RESPONSE & RELIEF</span>

          <h1>
            Humanitarian
            <br />
            Action & Disaster Relief
          </h1>

          <p>
            AFLISH Group stands beside vulnerable communities during
            emergencies, natural disasters, and humanitarian crises by
            delivering rapid relief, rehabilitation support, and hope where it
            is needed most.
          </p>
        </div>
      </section>

      <section className="humanitarian-overview">

        <div className="humanitarian-container">

          <div className="humanitarian-left">
            <img
              src="/images/disaster-relief.jpg"
              alt="Humanitarian Support"
            />
          </div>

          <div className="humanitarian-right">
            <span>OUR HUMANITARIAN COMMITMENT</span>

            <h2>
              Supporting Communities During Their Most Difficult Times
            </h2>

            <p>
              Natural disasters, health emergencies, and unexpected crises can
              leave families without shelter, food, medical care, and security.
              AFLISH Group works to provide immediate assistance while helping
              communities rebuild stronger and more resilient futures.
            </p>

            <p>
              Through coordinated relief operations, volunteer networks, and
              partnerships, we deliver humanitarian support that restores hope
              and dignity.
            </p>
          </div>

        </div>

      </section>

      <section className="humanitarian-services">

        <div className="section-title">
          <span>WHAT WE DO</span>
          <h2>Humanitarian Programs</h2>
        </div>

        <div className="humanitarian-grid">

          <div className="humanitarian-card">
            <h3>Emergency Relief</h3>
            <p>
              Distribution of food kits, drinking water, clothing, blankets,
              medicines, and essential supplies during emergencies.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Disaster Response</h3>
            <p>
              Rapid response support during floods, earthquakes, storms,
              fires, and other natural disasters.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Medical Assistance</h3>
            <p>
              Healthcare camps, emergency medicines, first-aid support,
              and health awareness initiatives.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Community Rehabilitation</h3>
            <p>
              Supporting families in rebuilding homes, livelihoods,
              and community infrastructure after crises.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Volunteer Mobilization</h3>
            <p>
              Engaging trained volunteers to provide immediate
              on-ground humanitarian support.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Long-Term Recovery</h3>
            <p>
              Helping communities recover through sustainable development,
              resilience building, and social support systems.
            </p>
          </div>

        </div>

      </section>

      <section className="humanitarian-impact">

        <div className="section-title">
          <span>OUR IMPACT</span>
          <h2>Building Hope Through Action</h2>
        </div>

        <div className="impact-grid">

          <div className="impact-box">
            <h3>Relief Distribution</h3>
            <p>
              Providing essential resources to affected families during
              humanitarian emergencies.
            </p>
          </div>

          <div className="impact-box">
            <h3>Volunteer Network</h3>
            <p>
              Mobilizing compassionate individuals to support communities
              during crises.
            </p>
          </div>

          <div className="impact-box">
            <h3>Recovery Support</h3>
            <p>
              Helping communities regain stability and rebuild their future.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default HumanitarianPage;