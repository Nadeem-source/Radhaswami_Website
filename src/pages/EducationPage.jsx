import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} />

      <section className="education-hero">

        <div className="education-overlay"></div>

        <div className="education-content">

          <span>EDUCATION FOR EVERY CHILD</span>

          <h1>
            Empowering Future Generations
            Through Quality Education
          </h1>

          <p>
            AFLISH Group believes that education is the
            foundation of social transformation. We work
            to ensure that every child receives access
            to learning opportunities, resources and
            guidance for a brighter future.
          </p>

          <div className="education-btns">

            <button>Support Education</button>

            <button className="outline-btn">
              Become Volunteer
            </button>

          </div>

        </div>

      </section>

      <section className="education-about">

        <div className="education-container">

          <div className="education-image">

            <img
              src="/images/education-image.jpg"
              alt="Education Program"
            />

          </div>

          <div className="education-text">

            <span>OUR INITIATIVES</span>

            <h2>
              Creating Equal Learning
              Opportunities For Every Child
            </h2>

            <p>
              Through educational support programs,
              school assistance, learning materials,
              scholarships and awareness campaigns,
              AFLISH Group helps children continue
              their education regardless of economic
              challenges.
            </p>

            <p>
              Our focus is on quality education,
              digital literacy, skill development and
              creating an environment where every
              child can grow confidently.
            </p>

          </div>

        </div>

      </section>

      <section className="education-focus">

        <div className="education-container">

          <div className="section-title">

            <span>OUR FOCUS AREAS</span>

            <h2>
              Education Programs
            </h2>

          </div>

          <div className="focus-grid">

            <div className="focus-card">
              <h3>School Support</h3>
              <p>
                Assisting schools with resources,
                infrastructure and educational tools.
              </p>
            </div>

            <div className="focus-card">
              <h3>Scholarships</h3>
              <p>
                Supporting talented students from
                underprivileged backgrounds.
              </p>
            </div>

            <div className="focus-card">
              <h3>Digital Learning</h3>
              <p>
                Promoting technology-driven learning
                and digital literacy.
              </p>
            </div>

            <div className="focus-card">
              <h3>Skill Development</h3>
              <p>
                Preparing youth for employment and
                entrepreneurship opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="education-stats">

        <div className="education-container stats-grid">

          <div className="stat-box">
            <h3>2000+</h3>
            <p>Students Supported</p>
          </div>

          <div className="stat-box">
            <h3>50+</h3>
            <p>Education Drives</p>
          </div>

          <div className="stat-box">
            <h3>100+</h3>
            <p>Volunteers</p>
          </div>

          <div className="stat-box">
            <h3>25+</h3>
            <p>Partner Institutions</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default EducationPage;