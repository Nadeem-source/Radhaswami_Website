import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./OurStrategyPage.css";

const strategies = [
  {
    title: "Our Presence",
    desc: "Expanding our impact across communities through sustainable development initiatives."
  },
  {
    title: "Education",
    desc: "Supporting children with quality education, scholarships and learning resources."
  },
  {
    title: "Health & Nutrition",
    desc: "Healthcare camps, nutrition awareness and medical support programs."
  },
  {
    title: "Economic Well Being",
    desc: "Empowering families through livelihood opportunities and financial inclusion."
  },
  {
    title: "Child Protection",
    desc: "Ensuring safety, dignity and a better future for vulnerable children."
  },
  {
    title: "Humanitarian",
    desc: "Emergency relief, disaster response and humanitarian assistance."
  },
  {
    title: "Resilience",
    desc: "Building strong communities capable of overcoming future challenges."
  }
];

const OurStrategyPage = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section className="strategy-hero">

        <div className="strategy-overlay"></div>

        <div className="strategy-content">

          <span className="strategy-tag">
            AFLISH GROUP STRATEGY
          </span>

          <h1>
            Creating Sustainable
            Social Impact Across India
          </h1>

          <p>
            We work through education, healthcare,
            livelihood generation, child protection,
            humanitarian response and community
            empowerment to create long-term change.
          </p>

          <div className="hero-buttons">

            <button>
              Explore Programs
            </button>

            <button className="outline-btn">
              Join Community
            </button>

          </div>

        </div>

      </section>

      <section className="strategy-section">

        <div className="strategy-container">

          <div className="section-title">

            <span>OUR STRATEGIC FOCUS</span>

            <h2>
              Building Stronger Communities
            </h2>

          </div>

          <div className="strategy-grid">

            {strategies.map((item, index) => (
              <div className="strategy-card" key={index}>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default OurStrategyPage;