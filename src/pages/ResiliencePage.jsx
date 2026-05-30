import React from "react";
import "./ResiliencePage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ResiliencePage = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section
        className="resilience-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.70)), url('/images/resilience-hero.jpg')",
        }}
      >
        <div className="resilience-hero-content">

          <span>COMMUNITY RESILIENCE</span>

          <h1>
            Building Stronger &
            Sustainable Communities
          </h1>

          <p>
            AFLISH Group empowers communities with the knowledge,
            resources, leadership, and infrastructure needed to
            withstand challenges and create a sustainable future.
          </p>

        </div>
      </section>

      <section className="resilience-overview">

        <div className="resilience-container">

          <div className="resilience-image">
            <img
              src="/images/community-resilience.jpg"
              alt="Community Resilience"
            />
          </div>

          <div className="resilience-content">

            <span>OUR APPROACH</span>

            <h2>
              Creating Long-Term Social &
              Economic Resilience
            </h2>

            <p>
              Resilience means enabling individuals and communities
              to adapt, recover, and thrive despite challenges such
              as poverty, climate change, disasters, health crises,
              and economic uncertainty.
            </p>

            <p>
              AFLISH Group focuses on strengthening local systems,
              supporting livelihoods, promoting education, and
              building community leadership for lasting impact.
            </p>

          </div>

        </div>

      </section>

      <section className="resilience-focus">

        <div className="section-heading">
          <span>FOCUS AREAS</span>
          <h2>How We Build Resilience</h2>
        </div>

        <div className="focus-grid">

          <div className="focus-card">
            <h3>Community Leadership</h3>
            <p>
              Training local leaders to drive development,
              decision-making, and social transformation.
            </p>
          </div>

          <div className="focus-card">
            <h3>Disaster Preparedness</h3>
            <p>
              Building awareness and preparedness plans to
              reduce risks during emergencies.
            </p>
          </div>

          <div className="focus-card">
            <h3>Livelihood Support</h3>
            <p>
              Strengthening income opportunities through
              skill development and entrepreneurship.
            </p>
          </div>

          <div className="focus-card">
            <h3>Climate Adaptation</h3>
            <p>
              Supporting communities in adopting sustainable
              and climate-resilient practices.
            </p>
          </div>

          <div className="focus-card">
            <h3>Social Protection</h3>
            <p>
              Connecting vulnerable families with support
              systems and welfare programs.
            </p>
          </div>

          <div className="focus-card">
            <h3>Capacity Building</h3>
            <p>
              Providing knowledge, tools, and resources
              for long-term community growth.
            </p>
          </div>

        </div>

      </section>

      <section className="resilience-impact">

        <div className="section-heading">
          <span>IMPACT</span>
          <h2>Stronger Communities. Better Futures.</h2>
        </div>

        <div className="impact-grid">

          <div className="impact-card">
            <h3>Prepared Communities</h3>
            <p>
              Better equipped to face emergencies and
              unexpected challenges.
            </p>
          </div>

          <div className="impact-card">
            <h3>Sustainable Growth</h3>
            <p>
              Increased opportunities for economic and
              social advancement.
            </p>
          </div>

          <div className="impact-card">
            <h3>Empowered Citizens</h3>
            <p>
              Individuals actively participating in
              shaping their community’s future.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ResiliencePage;