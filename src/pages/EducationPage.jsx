import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EducationPage.css";

const EducationPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
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
<section className="education-intro">

  <div className="education-container">

    <div className="education-breadcrumb">
      <a href="/">🏠</a>
                    <span className="breadcrumb-arrow">&gt;</span>
<a href="/services">Services</a>
                          <span className="breadcrumb-arrow">&gt;</span>

      <span>Education</span>
    </div>
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
    <div className="education-intro-content">

      <h2>
        Education: Building Strong Foundations For A Better Tomorrow
      </h2>
<div className="education-highlight">
  <strong>Our Goal:</strong> To ensure that every child has
  access to safe, inclusive and quality learning opportunities.
</div>
      <p>
        Education is one of the most powerful tools for creating
        positive change in society. It empowers children with
        knowledge, confidence and opportunities that help them
        break the cycle of poverty and build a brighter future.
      </p>

      <p>
        At AFLISH Group, we believe that every child deserves
        access to quality education regardless of their social
        or economic background. Through learning support,
        educational resources, awareness initiatives and
        community engagement, we work towards creating equal
        opportunities for every learner.
      </p>

      <p>
        Our efforts focus on improving access to education,
        encouraging school participation, promoting digital
        learning and supporting skill development programs that
        prepare young people for future success.
      </p>

    </div>

  </div>

</section>
<section className="education-pillars">

  <div className="pillars-header">

    <span>HERE ARE OUR KEY PILLARS</span>

    <h2>Building A Strong Foundation For Children</h2>

  </div>

  <div className="pillars-wrapper">

   <div
  className={`pillar-item ${
    openIndex === 1 ? "active" : ""
  }`}
>

  <div
    className="pillar-top"
  >

    <img
      src="/images/educationpage-studyingImage.png"
      alt=""
    />

    <h3>
      Early Childhood Care And Development
    </h3>

    <span className="pillar-icon" 
    onClick={() => toggleAccordion(1)}
    >
      {openIndex === 1 ? "-" : "+"}
    </span>

  </div>

  <div
  className={`pillar-content ${
    openIndex === 1 ? "show" : ""
  }`}
>

      <p>
        Early childhood is the foundation of lifelong learning and
  personal growth. AFLISH Group focuses on creating nurturing
  environments that support the physical, emotional and cognitive
  development of young children. Through nutrition awareness,
  early learning activities and school readiness programs, we
  help children build essential skills from an early age. Our
  initiatives encourage confidence, curiosity and creativity,
  ensuring every child begins their educational journey with a
  strong and positive foundation.
      </p>
      <p>
  Early childhood is the most important stage in a child's
  overall development and lifelong learning journey. AFLISH
  Group works to provide nurturing environments that support
  physical growth, emotional wellbeing and cognitive
  development from an early age. Through nutrition awareness,
  early learning programs and child-centered activities, we
  help young learners build strong foundational skills. Our
  initiatives encourage creativity, curiosity and confidence,
  while promoting healthy habits and positive social
  interactions. By investing in early childhood development,
  we prepare children for successful school experiences and
  brighter opportunities.
</p>

    </div>
  

</div>
    <div
  className={`pillar-item ${
    openIndex === 2 ? "active" : ""
  }`}
>

  <div
    className="pillar-top"
    
  >

    <img
      src="/images/classroomstudyingimage-educationpage.png"
      alt=""
    />

    <h3>
      School Education Support
    </h3>

    <span className="pillar-icon" 
    onClick={() => toggleAccordion(2)}
    >
      {openIndex === 2 ? "-" : "+"}
    </span>

  </div>

  <div
  className={`pillar-content ${
    openIndex === 2 ? "show" : ""
  }`}
>

      <p>
        Quality education should be accessible to every child,
  regardless of their background. AFLISH Group provides
  educational resources, school supplies, scholarships and
  learning support programs that help children remain engaged
  in their studies. We work closely with communities and
  institutions to reduce barriers to education and improve
  attendance rates. By creating supportive learning environments,
  we empower students to achieve academic success and unlock
  their full potential.
      </p>
      <p>
  Every child deserves access to quality education regardless
  of social or economic circumstances. AFLISH Group supports
  students through educational resources, school supplies,
  scholarships and community-based learning initiatives. We
  work to reduce barriers that prevent children from attending
  and completing their education. Our programs promote school
  enrollment, regular attendance and improved learning
  outcomes. By collaborating with families, schools and local
  communities, we create supportive learning environments
  where students can grow academically and personally. 
  </p>

    </div>
  

</div>
<div
  className={`pillar-item ${
    openIndex === 3 ? "active" : ""
  }`}
>
  <div
    className="pillar-top"
    
  >

    <img
      src="/images/digitallabimage-educationpage.png"
      alt=""
    />

    <h3>
      Skill Development And Awareness
    </h3>

    <span className="pillar-icon"
    onClick={() => toggleAccordion(3)}
    >
      {openIndex === 3 ? "-" : "+"}
    </span>

  </div>

  <div
  className={`pillar-content ${
    openIndex === 3 ? "show" : ""
  }`}
>

      <p>
       In today's rapidly evolving world, digital literacy and
  practical skills are essential for future success. AFLISH
  Group promotes technology-enabled learning, computer education
  and career development opportunities for young learners.
  Through digital training, life-skills education and awareness
  initiatives, we equip children and youth with the knowledge
  needed to adapt, innovate and thrive. Our programs encourage
  responsible citizenship, leadership and lifelong learning.
      </p>
      <p>
  In today's technology-driven world, digital skills have
  become essential for academic and professional success.
  AFLISH Group promotes digital literacy, computer education
  and technology-enabled learning opportunities for children
  and youth. Our programs help learners develop practical
  skills, critical thinking abilities and confidence in using
  modern digital tools. Through career guidance, life-skills
  training and awareness initiatives, we prepare young people
  for future challenges and opportunities. We encourage
  innovation, creativity and responsible use of technology to
  support lifelong learning.
</p>

    </div>
  

</div>
  </div>

</section>
<section className="education-impact">

  <div className="education-container">

    <div className="impact-left">

      <span>WHY EDUCATION MATTERS</span>

      <h2>
        Transforming Lives Through Learning
      </h2>

      <p>
        Education creates opportunities, strengthens communities
        and helps children develop the confidence needed to
        achieve their dreams.
      </p>

      <p>
        By supporting access to quality education, we empower
        children with knowledge, life skills and values that
        prepare them for a successful future.
      </p>

    </div>

    <div className="impact-right">

      <div className="impact-box">
        <h3>Access</h3>
        <p>
          Ensuring every child has the opportunity to learn.
        </p>
      </div>

      <div className="impact-box">
        <h3>Inclusion</h3>
        <p>
          Supporting equal learning opportunities for all.
        </p>
      </div>

      <div className="impact-box">
        <h3>Innovation</h3>
        <p>
          Encouraging digital and modern learning methods.
        </p>
      </div>

      <div className="impact-box">
        <h3>Growth</h3>
        <p>
          Building skills that create brighter futures.
        </p>
      </div>

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