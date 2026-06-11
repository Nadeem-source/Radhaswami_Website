import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./HealthAndNutrition.css";
import { useState } from "react";

import {
 FaHeartbeat,
 FaAppleAlt,
 FaUserMd,
 FaHandHoldingMedical,
 FaClinicMedical,
 FaHospital
} from "react-icons/fa";

const HealthAndNutrition = () => {
  const [currentSlide,setCurrentSlide] = useState(0);
 
  const workData = [

{
title:"Child Nutrition",
icon:<FaAppleAlt />,
desc:"Providing nutrition support and awareness to children and families."
},

{
title:"Healthcare Camps",
icon:<FaUserMd />,
desc:"Free medical camps, checkups and consultation programs."
},

{
title:"Maternal Health",
icon:<FaHeartbeat />,
desc:"Supporting mothers through awareness and preventive healthcare."
},

{
title:"Medical Support",
icon:<FaHandHoldingMedical />,
desc:"Connecting vulnerable communities with basic healthcare services."
},

{
title:"Disease Prevention",
icon:<FaClinicMedical />,
desc:"Awareness initiatives to prevent common diseases."
},

{
title:"Community Wellness",
icon:<FaHospital />,
desc:"Building healthier communities through education and care."
}

];
const nextSlide = () => {

setCurrentSlide(prev =>
(prev + 1) % workData.length
);

};

const prevSlide = () => {

setCurrentSlide(prev =>
(prev - 1 + workData.length) % workData.length
);

};
const visibleCards = [

workData[currentSlide],

workData[(currentSlide + 1) % workData.length],

workData[(currentSlide + 2) % workData.length]

];

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
{/* BREADCRUMB */}

<section className="hn-breadcrumb">

  <div className="hn-breadcrumb-container">

    <a href="/">🏠</a>

    <span>&gt;</span>
    <a href="/about">About</a>
    <span>&gt;</span>

    <span>Health & Nutrition</span>

  </div>

</section>
      {/* INTRO */}

      <section className="hn-about">

        <div className="hn-container">


          <div className="hn-right">

<span>
LET US BUILD A HEALTHIER INDIA, TOGETHER
</span>
            <h2>
Join Our Mission To Improve Health &
Nutrition For Every Child And Family
</h2>

            <p>
              Join AFLISH Group's mission to improve
               health, nutrition and well-being for 
               children, women and vulnerable 
               communities, creating a stronger and healthier future for all.
              Access to healthcare and proper nutrition
              remains a challenge for many communities.
              AFLISH Group conducts health awareness
              drives, free medical camps, nutrition
              initiatives and preventive healthcare
              programs to create healthier lives.
            
              Our programs focus on maternal health,
              child nutrition, disease prevention,
              hygiene awareness and access to
              essential medical support.
            </p>
<div className="hn-goal-card">

  <h3>Our Health & Nutrition Goal</h3>

  <p>
    Every child, woman and family should have access
    to quality healthcare, balanced nutrition,
    hygiene awareness and preventive health services
    that support healthier and safer communities.
  </p>

</div>
          </div>

        </div>

      </section>
      {/* KEY WORK AREAS */}

<section className="hn-workareas">

  <h2 className="work-title">Key Work Areas</h2>

  <div className="work-slider">

    <button
      className="work-arrow left"
      onClick={prevSlide}
    >
      ❮
    </button>

    <div className="work-cards">

      {visibleCards.map((card,index)=>(
<div
 className="work-card"
 key={`${currentSlide}-${card.title}`}
>
          <h3>{card.title}</h3>

          <div className="work-icon">
            {card.icon}
          </div>

          <p>{card.desc}</p>

        </div>
      ))}

    </div>

    <button
      className="work-arrow right"
      onClick={nextSlide}
    >
      ❯
    </button>

  </div>

  <div className="work-dots">

    {Array.from({
      length:Math.ceil(workData.length/3)
    }).map((_,i)=>(

      <span
        key={i}
        className={currentSlide===i ? "dot active" : "dot"}
onClick={() => setCurrentSlide(i)}      ></span>

    ))}

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