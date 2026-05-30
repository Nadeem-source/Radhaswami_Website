import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./OurPresencePage.css";

const states = [
  "Delhi NCR",
  "Uttar Pradesh",
  "Haryana",
  "Rajasthan",
  "Punjab",
  "Bihar",
  "Madhya Pradesh",
  "Uttarakhand",
];

const OurPresencePage = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section className="presence-hero">

        <div className="presence-overlay"></div>

        <div className="presence-content">

          <span>OUR PRESENCE</span>

          <h1>
            Reaching Communities
            Across India
          </h1>

          <p>
            AFLISH Group is continuously expanding its
            social welfare, education, healthcare and
            community development initiatives to create
            sustainable impact throughout India.
          </p>

        </div>

      </section>

      <section className="presence-about">

        <div className="presence-container">

          <div className="left">

            <img
              src="/images/presence-image.jpg"
              alt="Our Presence"
            />

          </div>

          <div className="right">

            <span>EXPANDING IMPACT</span>

            <h2>
              Building Strong Communities
              Through Meaningful Action
            </h2>

            <p>
              AFLISH Group works across multiple regions
              to support education, healthcare,
              humanitarian aid, women empowerment,
              youth development and sustainable growth.
            </p>

            <p>
              Through partnerships, volunteers and
              community leaders, we continue to reach
              thousands of lives with programs designed
              to uplift and empower society.
            </p>

          </div>

        </div>

      </section>

      <section className="presence-states">

        <div className="presence-container">

          <div className="section-heading">

            <span>OUR REACH</span>

            <h2>
              Active Regions
            </h2>

          </div>

          <div className="states-grid">

            {states.map((state, index) => (
              <div className="state-card" key={index}>
                {state}
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="presence-stats">

        <div className="presence-container">

          <div className="stat-box">
            <h3>10+</h3>
            <p>Regions Served</p>
          </div>

          <div className="stat-box">
            <h3>5000+</h3>
            <p>Lives Impacted</p>
          </div>

          <div className="stat-box">
            <h3>100+</h3>
            <p>Volunteers</p>
          </div>

          <div className="stat-box">
            <h3>25+</h3>
            <p>Community Programs</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default OurPresencePage;