import React from "react";
import "./Overview.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const Overview = () => {
  return (
    <>
<Navbar
  hideMarquee={true}
  scrollValue={60}
  navbarClass="navbar-light"
/>
      {/* HERO SECTION */}

      <section
        className="overview-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.65)), url('/images/overview-hero.jpg')"
        }}
      >
        <div className="overview-hero-content">

          <span>ABOUT AFLISH GROUP</span>

          <h1>
            Empowering Lives,
            <br />
            Transforming Communities
          </h1>

          <p>
            AFLISH Group is committed to social welfare, education,
            healthcare, economic empowerment and sustainable development
            through innovative community-driven initiatives.
          </p>

        </div>
      </section>

{/* BREADCRUMB */}

<section className="breadcrumb-section">

  <div className="breadcrumb-container">

    <Link to="/" className="breadcrumb-home">
      🏠
    </Link>

<span className="breadcrumb-arrow">
      &gt;
    </span>

    <Link
  to="/about"
  className="breadcrumb-link"
>
  About
</Link>
    <span className="breadcrumb-arrow">
      &gt;
    </span>

    <span className="breadcrumb-current">
      Overview
    </span>

  </div>

</section>
      {/* INTRO */}

      <section className="overview-intro">

        <div className="overview-container">

          <div className="overview-left">
            <img
              src="/images/overview-about.jpg"
              alt="About AFLISH"
            />
          </div>

          <div className="overview-right">

            <span>WHO WE ARE</span>

            <h2>
              Building Opportunities For A Better Tomorrow
            </h2>

            <p>
              AFLISH Group was established with a vision of creating
              meaningful impact across society through welfare programs,
              education support, healthcare initiatives and livelihood
              opportunities.
            </p>

            <p>
              We believe that every individual deserves access to quality
              education, healthcare, economic opportunities and a secure
              future. Through our dedicated programs and partnerships,
              we work to uplift communities across India.
            </p>

          </div>

        </div>

      </section>

{/* OVERVIEW CONTENT */}

<section className="overview-content-section">

  <div className="overview-content-container">

    <h2>
      AFLISH GROUP OF COMPANIES OVERVIEW
    </h2>

    <p>
      AFLISH Group of Companies is a dynamic organization committed to
      empowering communities and creating sustainable social impact through
      education, healthcare, livelihood development, humanitarian assistance,
      child protection, and community welfare initiatives. Since its inception,
      AFLISH has worked with a vision to build stronger, healthier, and more
      self-reliant communities by addressing real challenges faced by
      individuals and families across society.
    </p>

    <p>
      Our approach is holistic and people-centric. We believe that meaningful
      development can only be achieved when education, health, economic
      empowerment, and social protection work together. Through our various
      welfare programs, awareness campaigns, skill development initiatives,
      healthcare interventions, and community outreach activities, we strive to
      create long-lasting positive change.
    </p>

    <p>
      AFLISH Group actively supports educational opportunities for children and
      youth, promotes healthcare accessibility through medical camps and health
      awareness drives, strengthens livelihoods through vocational training and
      entrepreneurship support, and provides humanitarian assistance during
      emergencies and disasters. We work closely with communities,
      professionals, volunteers, institutions, and partners to maximize our
      impact and reach.
    </p>

    <p>
      Child welfare and protection remain among our highest priorities. We
      believe every child deserves a safe environment, quality education,
      proper nutrition, healthcare access, and equal opportunities for growth.
      Through dedicated initiatives, we support children in achieving their
      full potential while ensuring their rights, dignity, and well-being are
      protected.
    </p>

    <p>
      Alongside social development, AFLISH Group promotes women's empowerment,
      youth engagement, community leadership, and sustainable development
      practices. Our initiatives are designed not only to solve immediate
      challenges but also to create long-term resilience and self-sufficiency
      among beneficiaries.
    </p>

    <p>
      Over the years, AFLISH Group has touched numerous lives through
      community-driven programs, awareness campaigns, volunteer networks, and
      collaborative partnerships. By combining compassion, innovation, and
      accountability, we continue to expand our efforts toward building a more
      inclusive, equitable, and prosperous society.
    </p>

    <p>
      Every initiative undertaken by AFLISH Group is guided by our commitment
      to humanity, integrity, service, and sustainable growth. We believe that
      collective action can transform lives, strengthen communities, and create
      opportunities for future generations. Through continued dedication and
      collaboration, AFLISH Group remains focused on delivering meaningful
      impact and empowering humanity at every step.
    </p>

  </div>

</section>
{/* THEORY OF CHANGE */}

<section className="theory-section">

  <div className="theory-container">

    <h2>OUR THEORY OF CHANGE</h2>

    <p>
      AFLISH Group believes sustainable transformation happens when
      education, healthcare, livelihood development, child protection,
      humanitarian support and community participation work together.
      Our interventions are designed to create long-term positive impact
      by empowering individuals, strengthening families and building
      resilient communities.
    </p>

    <div className="theory-grid">

      <div className="theory-card theory-card-1">

        <div className="theory-icon">🏆</div>

        <h3>
          ACHIEVE IMPACT
          <br />
          AT SCALE
        </h3>

        <p>
          Expanding successful welfare models to reach more
          communities and create measurable social impact.
        </p>

      </div>

      <div className="theory-card theory-card-2">

        <div className="theory-icon">🤝</div>

        <h3>
          BUILD STRONG
          <br />
          PARTNERSHIPS
        </h3>

        <p>
          Collaborating with institutions, volunteers,
          donors and communities for sustainable growth.
        </p>

      </div>

      <div className="theory-card theory-card-3">

        <div className="theory-icon">📢</div>

        <h3>
          COMMUNITY
          <br />
          ENGAGEMENT
        </h3>

        <p>
          Creating awareness and encouraging community
          participation to drive meaningful change.
        </p>

      </div>

      <div className="theory-card theory-card-4">

        <div className="theory-icon">💡</div>

        <h3>
          INNOVATE FOR
          <br />
          THE FUTURE
        </h3>

        <p>
          Using innovative approaches and technology
          to solve social challenges effectively.
        </p>

      </div>

    </div>

  </div>

</section>
{/* OUR JOURNEY */}

<section className="journey-section">

  <div className="journey-heading">

    <span>OUR IMPACT JOURNEY</span>

    <h2>OUR JOURNEY IN THE LAST 1.8 YEARS</h2>

    <p>
      Over the years, AFLISH Group has positively impacted thousands of
      lives through education, child protection, healthcare, poverty
      reduction, humanitarian response and resilience-building programs.
    </p>

  </div>

  <div className="journey-grid">

    {/* Education */}

    <div className="journey-card">

      <img
        src="/images/overview-education-image.png"
        alt="Education"
      />

      <div className="journey-overlay">

        <h3>Education</h3>

        <h4>15,000+</h4>

        <p>
          Children supported through educational programs,
          scholarships and learning initiatives.
        </p>

      </div>

    </div>

    {/* Child Protection */}

    <div className="journey-card">

      <img
        src="/images/overview-childprotection-image.png"
        alt="Child Protection"
      />

      <div className="journey-overlay">

        <h3>Child Protection</h3>

        <h4>8,500+</h4>

        <p>
          Children protected through awareness,
          advocacy and welfare initiatives.
        </p>

      </div>

    </div>

    {/* Health */}

    <div className="journey-card">

      <img
        src="/images/overview-health-nutrition-image.png"
        alt="Health"
      />

      <div className="journey-overlay">

        <h3>Health & Nutrition</h3>

        <h4>12,000+</h4>

        <p>
          Beneficiaries reached through healthcare,
          nutrition and medical camps.
        </p>

      </div>

    </div>

    {/* Poverty */}

    <div className="journey-card">

      <img
        src="/images/overview-poverty-inclusion-image.png"
        alt="Poverty"
      />

      <div className="journey-overlay">

        <h3>Poverty & Inclusion</h3>

        <h4>9,000+</h4>

        <p>
          Families empowered through livelihood
          and economic development programs.
        </p>

      </div>

    </div>

    {/* Humanitarian */}

    <div className="journey-card">

      <img
        src="/images/journey-humanitarian.png"
        alt="Humanitarian"
      />

      <div className="journey-overlay">

        <h3>Humanitarian Aid</h3>

        <h4>5,000+</h4>

        <p>
          Individuals assisted during emergencies,
          disasters and crisis situations.
        </p>

      </div>

    </div>

    {/* Resilience */}

    <div className="journey-card">

      <img
        src="/images/journey-resilience.png"
        alt="Resilience"
      />

      <div className="journey-overlay">

        <h3>Resilience</h3>

        <h4>7,500+</h4>

        <p>
          Communities strengthened through
          sustainability and resilience programs.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* FOCUS AREAS */}

      <section className="overview-focus">

        <div className="section-heading">
          <span>OUR FOCUS</span>
          <h2>Key Areas Of Impact</h2>
        </div>

        <div className="focus-grid">

          <div className="focus-card">
            <h3>Education</h3>
            <p>
              Supporting quality learning opportunities and child education.
            Providing quality education opportunities for children from
    underserved communities. Supporting learning resources,
    scholarships, and skill-based development programs for a brighter future.
            </p>
          </div>

          <div className="focus-card">
            <h3>Healthcare</h3>
            <p>
              Medical camps, awareness drives and community health support.
 Organizing medical camps, health awareness drives, and
    preventive healthcare initiatives. Improving access to
    essential healthcare services for vulnerable communities.
            Our initiatives focus on preventive healthcare.
            </p>
          </div>

          <div className="focus-card">
            <h3>Economic Growth</h3>
            <p>
              Skill development and livelihood enhancement programs.
            Promoting livelihood opportunities through entrepreneurship,
    vocational training, and financial inclusion programs.
    Helping families achieve long-term economic stability.
             We empower individuals through entrepreneurship support.
            </p>
          </div>

          <div className="focus-card">
            <h3>Child Protection</h3>
            <p>
              Ensuring safety, dignity and opportunities for children.
            Ensuring every child grows up in a safe, secure, and
    nurturing environment. Protecting children's rights,
    education, health, and overall well-being.
             We advocate for children's rights.
            </p>
          </div>

          <div className="focus-card">
            <h3>Humanitarian Aid</h3>
            <p>
              Disaster relief and emergency response support.
            Delivering emergency relief, disaster response, and
    rehabilitation support during crises. Providing food,
    shelter, and essential assistance to affected communities.
            We provide immediate assistance, rehabilitation aid.
            </p>
          </div>

          <div className="focus-card">
            <h3>Women Empowerment</h3>
            <p>
              Creating opportunities and promoting social inclusion.
            Empowering women through education, leadership development,
    livelihood opportunities, and social inclusion initiatives.
    Building confidence and creating pathways for sustainable growth.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="overview-stats">
        <div className="stats-heading">

    <span>OUR IMPACT</span>

    <h2>OUR ACHIEVEMENTS</h2>

  </div>
        <div className="stat-box">
          <h2>1000+</h2>
          <p>Beneficiaries Reached</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Community Initiatives</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Volunteers</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Partner Networks</p>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Overview;