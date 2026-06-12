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
      <Navbar hideMarquee={true} scrollValue={60} />

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
<section className="hn-impact-section">

<div className="impact-content">

<span>HOW WE CREATE IMPACT</span>

<h2>
Creating Sustainable
Health Outcomes
</h2>

<ul>
  <li>
    Promoting nutrition awareness and healthy dietary practices
    among children, women and families.
  </li>

  <li>
    Organizing healthcare camps, medical checkups and
    preventive health initiatives in underserved communities.
  </li>

  <li>
    Encouraging hygiene awareness, sanitation practices
    and disease prevention measures.
  </li>

  <li>
    Strengthening community participation through
    volunteers, healthcare professionals and local partners.
  </li>

  <li>
    Integrating health, education and social development
    programs for long-term well-being.
  </li>

  <li>
    Empowering individuals with knowledge and resources
    to make healthier lifestyle choices.
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
<section className="hn-action-section">

<div className="action-content">

<span>OUR ACTIONS</span>

<h2>
How AFLISH Group
Transforms Vision Into Action
</h2>

<ul>

<li>Child nutrition awareness and support programs.</li>

<li>Maternal healthcare and wellness initiatives.</li>

<li>Free healthcare camps and medical consultations.</li>

<li>Preventive healthcare and disease awareness campaigns.</li>

<li>Community hygiene and sanitation education.</li>

<li>Medical assistance for vulnerable families.</li>

<li>Partnerships with healthcare professionals and volunteers.</li>

<li>Community outreach programs focused on long-term wellness.</li>

</ul>

</div>

<div className="action-image">
<img src="/images/GalleryPageImage9.png" alt="" />
</div>

</section>
<section className="hn-achievement-section">

<span>OUR IMPACT</span>

<h2>
Key Health & Nutrition
Achievements
</h2>

<p>

AFLISH Group has positively impacted thousands
of lives through healthcare awareness,
nutrition initiatives, medical camps and
community wellness programs.

We continue to expand healthcare access,
promote healthy lifestyles and strengthen
community health systems through partnerships,
volunteer engagement and sustainable outreach
programs.

Our focus remains on ensuring that every child,
woman and family has the opportunity to live a
healthier and safer life.

</p>

</section>
<section className="hn-government-section">

<div className="gov-image">
<img src="/images/GalleryPageImage10.png" alt="" />
</div>

<div className="gov-content">

<span>PARTNERSHIPS</span>

<h2>
Collaborating For
Greater Community Impact
</h2>

<p>

AFLISH Group actively collaborates with
healthcare professionals, educational
institutions, community leaders, volunteers,
social organizations and development partners
to strengthen health and nutrition outcomes.

Through collective efforts, we expand our reach,
improve service delivery and ensure sustainable
community development that benefits future
generations.

</p>

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