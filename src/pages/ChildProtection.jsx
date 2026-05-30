import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ChildProtection.css";

const ChildProtection = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      {/* HERO */}

      <section className="cp-hero">

        <div className="cp-overlay"></div>

        <img
          src="/images/child-protection-hero.jpg"
          alt=""
          className="cp-hero-img"
        />

        <div className="cp-content">

          <span>CHILD PROTECTION</span>

          <h1>
            Ensuring Every Child
            Grows Up Safe, Protected
            & Full Of Hope
          </h1>

          <p>
            AFLISH Group works to safeguard children
            from abuse, neglect, exploitation and
            social vulnerability while ensuring access
            to education, healthcare and opportunities.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="cp-about">

        <div className="cp-container">

          <div className="cp-left">

            <img
              src="/images/child-support.jpg"
              alt=""
            />

          </div>

          <div className="cp-right">

            <span>OUR COMMITMENT</span>

            <h2>
              Protecting Childhood,
              Building Bright Futures
            </h2>

            <p>
              Every child deserves safety, dignity,
              education and equal opportunities.
            </p>

            <p>
              Through community outreach,
              awareness programs and child welfare
              initiatives, AFLISH Group supports
              vulnerable children and their families.
            </p>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}

      <section className="cp-programs">

        <div className="cp-title">

          <span>OUR INITIATIVES</span>

          <h2>
            Child Protection Programs
          </h2>

        </div>

        <div className="cp-grid">

          <div className="cp-card">
            <h3>Child Safety Awareness</h3>
            <p>
              Educating communities about
              child rights and protection.
            </p>
          </div>

          <div className="cp-card">
            <h3>Education Support</h3>
            <p>
              Helping children access quality
              education and learning resources.
            </p>
          </div>

          <div className="cp-card">
            <h3>Nutrition Programs</h3>
            <p>
              Supporting healthy growth through
              food and nutrition initiatives.
            </p>
          </div>

          <div className="cp-card">
            <h3>Healthcare Access</h3>
            <p>
              Connecting children with medical
              assistance and health camps.
            </p>
          </div>

          <div className="cp-card">
            <h3>Community Protection</h3>
            <p>
              Creating safer environments
              for vulnerable children.
            </p>
          </div>

          <div className="cp-card">
            <h3>Future Opportunities</h3>
            <p>
              Building pathways for education,
              skills and long-term success.
            </p>
          </div>

        </div>

      </section>

      {/* IMPACT */}

      <section className="cp-impact">

        <div className="impact-card">
          <h3>5000+</h3>
          <p>Children Reached</p>
        </div>

        <div className="impact-card">
          <h3>200+</h3>
          <p>Awareness Sessions</p>
        </div>

        <div className="impact-card">
          <h3>100+</h3>
          <p>Community Programs</p>
        </div>

        <div className="impact-card">
          <h3>50+</h3>
          <p>Partner Volunteers</p>
        </div>

      </section>

      {/* CTA */}

      <section className="cp-cta">

        <h2>
          Together We Can Protect Childhood
        </h2>

        <p>
          Join us in creating a safer and brighter
          future for every child.
        </p>

        <button>
          Support A Child
        </button>

      </section>

      <Footer />
    </>
  );
};

export default ChildProtection;