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
const [slideDirection, setSlideDirection] = useState(""); 
  const workData = [

{
title:"Child Nutrition",
icon:<FaAppleAlt />,
desc:"Providing nutrition support and awareness to children and families."
},

{
title:"Healthcare Camps",
icon:<FaUserMd />,
desc:"Free medical camps, checkups, treatments  and consultation programs."
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
desc:"Awareness initiatives to prevent common diseases ,illness and curation. "
},

{
title:"Community Wellness",
icon:<FaHospital />,
desc:"Building healthier communities through education and taking cares."
}

];
const nextSlide = ()=>{

if(currentSlide < workData.length-3){
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
      <Navbar hideMarquee={true} scrollValue={60}/>

      <section className="hn-hero">

        <div className="hn-overlay"></div>

        <img
          src="/images/GalleryPageImage8.png"
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
<div className="work-cards-wrapper">
    <div className="work-cards"
     style={{
   transform:`translateX(-${currentSlide * 355}px)`
 }}>

      {workData.map((card)=>(
<div className="work-card" key={card.title}>
          <h3 key={`title-${currentSlide}-${card.title}`}>{card.title}</h3>

          <div className="work-icon"  key={`icon-${currentSlide}-${card.title}`}>
            {card.icon}
          </div>

          <p>{card.desc}</p>

        </div>
      ))}

    </div>
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
<section className="hn-approach-section">

<div className="approach-image">
<img src="/images/GalleryPageImage7.png" alt="" />
</div>

<div className="approach-content">

<span>OUR APPROACH</span>

<h2>
Our Approach Towards Building
Healthier Communities
</h2>

<p>
At AFLISH Group, we believe that access to
healthcare, nutrition, hygiene and preventive
health services is essential for every child,
woman and family.

Our mission is to create healthier communities
through awareness, healthcare camps, nutrition
support, medical assistance and community
engagement programs.

We work alongside healthcare professionals,
volunteers, educational institutions and local
communities to ensure that quality health
services reach underserved populations.
We also focus on empowering families with knowledge and resources that promote healthier lifestyles, better nutrition practices and early disease prevention.

{/* Through sustainable initiatives and community-driven programs, AFLISH Group strives to create long-term health improvements that positively impact future generations. */}
</p>

</div>

</section>
<div className="hn-impact-wrapper">
<section className="hn-impact-section">

<div className="impact-content">

<span>HOW WE CREATE IMPACT</span>

<h2>
Creating Sustainable
Health Outcomes
</h2>

<ul>
  <li>
Promoting <b> nutrition awareness </b> and <b>healthy dietary </b> practices.
</li>

<li>
Organizing <b>healthcare camps</b> and <b>preventive health initiatives.</b>
</li>

<li>
Encouraging<b> hygiene awareness </b>and <b>disease prevention measures.</b>
</li>

<li>
Strengthening <b>community participation</b> through local partnerships.
</li>

<li>
Integrating <b>health</b>, <b>education</b> and <b>social development</b> programs.
</li>

<li>
Empowering individuals toward <b>healthier lifestyle </b>choices.
</li>
</ul>
<p>
AFLISH Group addresses the root causes of poor
health by promoting nutrition awareness,
preventive healthcare, disease prevention,
hygiene education and access to medical support.

Our integrated approach combines health,
education, community participation and social
development to improve long-term well-being.

Through awareness campaigns, medical outreach,
nutrition initiatives and wellness programs,
we empower individuals to make healthier
choices for themselves and their families.
</p>
</div>


</section>
</div>
<div className="action-content-box">
<section className="hn-action-section">

<div className="action-content">

<span>OUR ACTIONS</span>

<h2>
How AFLISH Group
Transforms Vision Into Action
</h2>

<ul>

<li>Child nutrition awareness and support programs for underserved communities.</li>

<li>Maternal healthcare and wellness initiatives for women and mothers.</li>

<li>Free healthcare camps and medical consultations in rural areas.</li>

<li>Preventive healthcare and disease awareness campaigns across communities.</li>

<li>Community hygiene and sanitation education for healthier lifestyles.</li>

<li>Medical assistance for vulnerable families and disadvantaged groups.</li>

<li>Partnerships with healthcare professionals and dedicated community volunteers.</li>

<li>Community outreach programs focused on long-term wellness and development.</li>
</ul>

</div>

<div className="action-image">
<img src="/images/GalleryPageImage9.png" alt="" />
</div>

</section>
</div>
<section className="hn-salient-section">

<h2>
Salient Aspects of Our Work in Child Health & Nutrition
</h2>

<ul>

<li>
AFLISH Group has conducted community-based health awareness programs promoting nutrition, hygiene and preventive healthcare among children and families.
These initiatives help communities adopt healthier practices and improve overall well-being.
</li>

<li>
Our healthcare outreach initiatives have supported underserved communities through free medical consultations, health screenings and wellness guidance.
The programs aim to improve access to essential healthcare services at the grassroots level.
</li>

<li>
We have organized nutrition awareness campaigns encouraging healthy dietary habits and improved child growth monitoring practices.
These efforts contribute to better nutrition outcomes and long-term child development.
</li>

<li>
AFLISH Group works with healthcare professionals, volunteers and community leaders to strengthen local health support systems.
This collaborative approach ensures sustainable and community-driven health solutions.
</li>

<li>
Through preventive healthcare initiatives, we promote disease awareness, early detection and timely medical intervention.
These activities help reduce health risks and encourage proactive healthcare behavior.
</li>

<li>
Our maternal and child health programs focus on improving healthcare access, nutrition education and family well-being.
Special attention is given to supporting mothers and young children during critical stages.
</li>

<li>
We support hygiene and sanitation education programs that encourage healthier living environments and disease prevention.
The programs promote safe practices that contribute to healthier communities.
</li>

<li>
Healthcare camps organized by AFLISH Group provide basic medical assistance and health counselling to vulnerable populations.
These camps help bridge healthcare gaps in underserved and remote areas.
</li>

<li>
We collaborate with educational institutions and local organizations to increase community participation in health initiatives.
Such partnerships enhance awareness and strengthen local health networks.
</li>

<li>
Our wellness programs encourage healthy lifestyle choices through awareness sessions, workshops and community engagement activities.
Participants gain practical knowledge to improve their daily health practices.
</li>

<li>
AFLISH Group continues to expand healthcare access through sustainable outreach programs and partnerships across communities.
Our efforts focus on creating long-lasting and measurable health improvements.
</li>

<li>
Our long-term vision is to build healthier communities where every child, woman and family has access to essential healthcare services.
We remain committed to fostering inclusive, accessible and equitable healthcare opportunities.
</li>
</ul>

</section>

{/* <section className=".hn-gov-section">

<div className=".gov-image">
<img src="/images/GalleryPageImage10.png" alt="" />
</div>

<div className=".gov-content">

<span>OUR APPROACH</span>

<h2>
Our Approach Towards Building
Healthier Communities
</h2>

<p>
At AFLISH Group, we believe that access to
healthcare, nutrition, hygiene and preventive
health services is essential for every child,
woman and family.

Our mission is to create healthier communities
through awareness, healthcare camps, nutrition
support, medical assistance and community
engagement programs.

We work alongside healthcare professionals,
volunteers, educational institutions and local
communities to ensure that quality health
services reach underserved populations.
We also focus on empowering families with knowledge and resources that promote healthier lifestyles, better nutrition practices and early disease prevention. */}

{/* Through sustainable initiatives and community-driven programs, AFLISH Group strives to create long-term health improvements that positively impact future generations. */}
{/* </p>

</div>

</section> */}
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

      {/* CTA

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

      </section> */}

      <Footer />
    </>
  );
};

export default HealthAndNutrition;