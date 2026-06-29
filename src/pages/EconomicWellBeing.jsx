import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EconomicWellBeing.css";
import { useState, useEffect } from "react";

import {
  FaChalkboardTeacher,
  FaUsers,
  FaSearch,
  FaBullseye,
  FaHandshake,
  FaLightbulb
} from "react-icons/fa";

const EconomicWellBeing = () => {
  useEffect(() => {

  const interval = setInterval(() => {

    setCurrentSlide((prev) => {

      if (prev >= solutionsData.length - 3) {
        return 0;
      }

      return prev + 3;

    });

  }, 8000); // 4 second

  return () => clearInterval(interval);

}, []);
    const [currentSlide,setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); 
  const solutionsData = [

  {
    title: "Training & Capacity Building",
    icon: <FaChalkboardTeacher />,
    desc: "AFLISH Group strengthens the capacity of partner organizations, community institutions and government stakeholders through training programmes that improve implementation and long-term impact."
  },

  {
    title: "Community Engagement",
    icon: <FaUsers />,
    desc: "We engage children, youth, women and local communities through awareness campaigns, participation programmes and grassroots initiatives that drive positive social change."
  },

  {
    title: "Our Partnership Mapping",
    icon: <FaSearch />,
    desc: "AFLISH Group identifies and collaborates with the right partners, institutions and networks to ensure sustainable development and greater programme effectiveness."
  },

  {
    title: "Impact-Oriented Collaboration",
    icon: <FaBullseye />,
    desc: "Working alongside government bodies, civil society organizations and stakeholders to create scalable solutions that deliver measurable community impact."
  },

  {
    title: "Our Strategic Partnerships",
    icon: <FaHandshake />,
    desc: "Building strong partnerships that bring together expertise, resources and innovation to strengthen livelihoods and community development initiatives."
  },

  {
    title: "Our Innovation for Change",
    icon: <FaLightbulb />,
    desc: "Promoting innovative approaches, knowledge sharing and practical solutions that empower communities and create sustainable opportunities."
  }

];
  const nextSlide = ()=>{
  
  if(currentSlide < solutionsData.length-3){
     setCurrentSlide(currentSlide+3);
  }
  
  };
  const prevSlide = ()=>{
  
  if(currentSlide > 0){
     setCurrentSlide(currentSlide-3);
  }
  
  };
  // const visibleCards = [
  
  // workData[currentSlide],
  
  // workData[(currentSlide + 1) % workData.length],
  
  // workData[(currentSlide + 2) % workData.length]
  
  // ];
  
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60}
       />
{/* navbarClass="navbar-light"  */}
      <section className="ewb-hero">

        <div className="ewb-overlay"></div>

        <img
          src="/images/GalleryPageImage66.png"
          alt=""
          className="ewb-hero-img"
        />

        <div className="ewb-content">

          {/* <span>ECONOMIC WELL BEING</span> */}

          {/* <h1>
            Empowering Individuals Through
            Financial<br/> Independence &
            Sustainable Livelihoods
          </h1> */}

          {/* <p>
            AFLISH Group supports communities through
            entrepreneurship, skill development,
            employment opportunities and financial
            empowerment initiatives.
          </p> */}

        </div>

      </section>
      <section className="ewb-intro">
  <div className="ewb-container">
    <div className="ewb-breadcrumb">
      <a href="/">🏠</a>
      <span className="breadcrumb-arrow">&gt;</span>
      <a href="/services">Services</a>
      <span className="breadcrumb-arrow">&gt;</span>
      <span>Economic Well Being</span>
    </div>

    <div className="ewb-intro-content">
      <h1>
        Come, Build Strong and Inclusive
        Communities Through Economic Well Being
      </h1>

      <p><b>
        AFLISH Group works to strengthen livelihoods through skill development,
        financial literacy, women empowerment, livelihood support, and
        community-based opportunities that help families move toward stability
        and self-reliance.
      </b></p>
    </div>

    <div className="ewb-subtheme-title">
      <h2>
        Our work in the area of economic well being revolves around three core
        focus areas
      </h2>
    </div>

    <div className="ewb-focus-grid">
      <div className="ewb-focus-card">
        <div className="ewb-icon">🚀</div>
        <h3>Skilling and Livelihood</h3>
        <p>
          Practical training, job readiness, and income-generating support for
          youth, women, and underserved families.
        </p>
      </div>

      <div className="ewb-focus-card">
        <div className="ewb-icon">⚡</div>
        <h3>Resilience and Adaptation</h3>
        <p>
          Helping communities build stronger, more stable livelihoods through
          sustainable practices and local support systems.
        </p>
      </div>

      <div className="ewb-focus-card">
        <div className="ewb-icon">🛡️</div>
        <h3>Social Protection</h3>
        <p>
          Connecting vulnerable families with supportive pathways that improve
          financial security and long-term well being.
        </p>
      </div>
    </div>
    <div className="ewb-bottom-content">

  <h3>
    Every family deserves a prosperous and secure future.
  </h3>

  <p>
    Since its establishment, 
    <a href="/"> AFLISH Group </a>
    has been working across communities to strengthen livelihoods,
    promote financial inclusion, support skill development and create
    sustainable opportunities that help individuals and families
    achieve long-term economic well being.
  </p>

</div>
  </div>
</section>
<section className="ewb-mission">
  <div className="ewb-mission-content">

<h2>
COME, JOIN OUR MISSION TO BUILD FINANCIALLY STRONG AND SELF-RELIANT COMMUNITIES!
</h2>
      <p>Economic well being is essential for creating stable, resilient and thriving communities. While access to education, employment opportunities and financial services has improved over the years, many individuals and families still face challenges in securing sustainable livelihoods and achieving long-term financial security.</p>

<p>Through focused efforts in skill development, entrepreneurship support, financial literacy and community empowerment, AFLISH Group works to strengthen the economic foundations of vulnerable families and underserved communities. Our initiatives aim to create opportunities that enable people to earn, save, invest and build a better future for themselves and their families.</p>

<p>India has made significant progress in reducing poverty, expanding financial inclusion and improving access to social welfare programmes. However, economic vulnerability continues to affect many households, particularly those living in rural areas, informal settlements and marginalized communities. A single financial setback, health emergency or loss of employment can push families back into hardship.</p>

<p>Many individuals still struggle with limited awareness of available opportunities, inadequate access to skill-building resources and barriers to financial independence. Women, youth and economically disadvantaged groups often face additional challenges in accessing employment, entrepreneurship support and financial services.</p>

<p>At AFLISH Group, we are committed to bridging these gaps by promoting sustainable livelihoods, strengthening local capacities and encouraging inclusive economic growth. We collaborate with communities, institutions and stakeholders to create pathways that improve income generation, financial resilience and overall quality of life.</p>

<p>Our efforts focus on empowering individuals with practical skills, supporting small enterprises, promoting financial awareness and connecting communities with opportunities that foster long-term economic stability. By investing in people and their potential, we help build stronger families and more prosperous communities.</p>

<p>Together, we can create a future where every individual has the opportunity to achieve financial independence, live with dignity and contribute meaningfully to society. Join AFLISH Group in advancing economic well being and building sustainable opportunities for all.</p>
    

  </div>
</section>
      <section className="ewb-about">

        <div className="ewb-about-container">

          <div className="ewb-left">

            <img
              src="/images/Economic-hero.jpg"
              alt=""
            />

          </div>

          <div className="ewb-right">

           {/* <span>ECONOMIC WELL BEING</span>

<h2>
  Empowering Communities Through
  Sustainable Livelihoods &
  Financial Inclusion
</h2> */}

            <p>
AFLISH Group works to improve the income and economic stability of marginalized families through skill development, vocational training, digital literacy, financial literacy and livelihood support initiatives. We collaborate with community organizations, development partners and public institutions to connect individuals with sustainable livelihood opportunities and social protection programs.
</p>
<br/>
<p>
Our initiatives focus on building resilient communities that can adapt to changing economic and environmental conditions. Through life-skills training, employment readiness programs and entrepreneurship support, AFLISH Group empowers youth, women and vulnerable groups to achieve financial independence, strengthen household incomes and create long-term economic well being.
</p>

          </div>

        </div>

      </section>
      
      {/* KEY Solution AREAS */}

<section className="ewb-solutions">

  <h2 className="solutions-title">Be Part Of Our Solution</h2>
<p className="solutions-subtitle">
  AFLISH Group works with communities, institutions and partners to create sustainable livelihood opportunities, strengthen local capacities and promote economic well being.
</p>
  <div className="solutions-slider">

    <button
      className="solutions-arrow left"
      onClick={prevSlide}
    >
      ❮
    </button>
<div className="solutions-cards-wrapper">
    <div className="solutions-cards"
     style={{
   transform:`translateX(-${currentSlide * 355}px)`
 }}>

      {solutionsData.map((card)=>(
<div className="solution-card" key={card.title}>
          <h3 key={`title-${currentSlide}-${card.title}`}>{card.title}</h3>

          <div className="solution-icon"  key={`icon-${currentSlide}-${card.title}`}>
            {card.icon}
          </div>

          <p><b>{card.desc}</b></p>

        </div>
      ))}

    </div>
    </div>

    <button
      className="solutions-arrow right"
      onClick={nextSlide}
    >
      ❯
    </button>

  </div>

  <div className="solutions-dots">

    {Array.from({
      length:Math.ceil(solutionsData.length/3)
    }).map((_,i)=>(

      <span
        key={i}
        className={currentSlide===i * 3 ? "dot active" : "dot"}
onClick={() => setCurrentSlide(i * 3)}      ></span>

    ))}

  </div>

</section>
{/* 
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

      </section> */}
{/* 
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

      </section> */}

      <Footer />
    </>
  );
};

export default EconomicWellBeing;