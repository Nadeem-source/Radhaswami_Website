import React, { useState, useEffect } from "react";
import "./HumanitarianPage.css";
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick";
const SliderComponent = Slider.default || Slider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaHandHoldingHeart,
  FaBriefcaseMedical,
  FaCampground,
  FaTint,
  FaTools,
  FaShieldAlt,
  FaHouseDamage,
   FaHandsHelping
} from "react-icons/fa";
import {
  FaPeopleRoof
} from "react-icons/fa6";


const HumanitarianPage = () => {
    // useEffect(() => {
  
    // const interval = setInterval(() => {
  
    //   setCurrentSlide((prev) => {
  
    //     if (prev >= solutionsData.length - 3) {
    //       return 0;
    //     }
  
        // return prev + 3;
  
      // });
  
    // }, 8000); // 4 second
  
  //   return () => clearInterval(interval);
  
  // }, []);
      const [currentSlide,setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState(""); 
    const solutionsData = [
  
    {
      title: "EMERGENCY RELIEF OPERATIONS",
       icon: <FaHandHoldingHeart />,
      desc: "Aflish Group deploys rapid response teams to deliver food, water, shelter materials and emergency aid to affected communities during disasters and humanitarian crises."
    },
  
    {
      title: "MEDICAL & HEALTH SUPPORT",
      icon: <FaBriefcaseMedical />,
      desc: "We provide emergency medical assistance, health camps, medicines, preventive care kits and healthcare outreach services during crisis situations."
    },
  
    {
      title: "TEMPORARY SHELTER ASSISTANCE",
      icon: <FaCampground />,
      desc: "Aflish Group helps establish temporary shelters and safe accommodation for families displaced by floods, landslides, earthquakes and other disasters."
    },
  
    {
      title: "SAFE & CLEAN DRINKING WATER",
       icon: <FaTint />,
      desc: "We support communities through water purification systems, safe drinking water distribution and sanitation measures to prevent disease outbreaks."
    },
  
    {
      title: "COMMUNITY REHABILITATION",
       icon: <FaTools />,
      desc: "Beyond immediate relief, we assist affected communities in rebuilding livelihoods, restoring local infrastructure and strengthening resilience."
    },
  
    {
      title: "CHILD & FAMILY PROTECTION",
      icon: <FaPeopleRoof />,
      desc: "We prioritize the safety and well-being of children, women and vulnerable families by providing protection support and essential services."
    },
    {
      title:"DISASTER PREPAREDNESS",
      icon: <FaShieldAlt />,
      desc: "Aflish Group conducts awareness campaigns, preparedness drills and community training programs to reduce disaster risks and improve readiness."
    
    },
    {
      title:"LONG-TERM RECOVERY SUPPORT",
       icon: <FaHouseDamage />,
      desc: "We remain engaged after emergencies, supporting reconstruction, recovery planning and sustainable development initiatives for affected regions as well as affected people too."
    
    },
    {
  title: "VOLUNTEER <-> COMMUNITY",
  icon: <FaHandsHelping />,
  desc: "Aflish Group mobilizes volunteers, local institutions and community networks to strengthen relief operations, awareness campaigns and long-term humanitarian support initiatives."
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
  const [activeAflishCard, setActiveAflishCard] = useState(null);
  const toggleAflishCard = (index) => {
    setActiveAflishCard(activeAflishCard === index ? null : index);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const [activeYear, setActiveYear] = useState("2025-2026");
  const achievementsData = {
    "2024-2025": [
  "Delivered emergency relief kits to disaster-affected families.",
  "Provided safe drinking water and sanitation support.",
  "Distributed food supplies and essential household items.",
  "Supported temporary shelter arrangements for displaced communities.",
  "Conducted emergency medical assistance and health outreach.",
  "Mobilized volunteers for rapid disaster response operations.",
  "Assisted vulnerable families during flood and cyclone emergencies.",
  "Implemented hygiene awareness and disease prevention campaigns.",
  "Supported community-level disaster preparedness activities.",
  "Coordinated relief distribution through local partnerships."
],

    "2025-2026": [
  "Expanded disaster response capabilities across vulnerable regions.",
  "Strengthened emergency preparedness and risk reduction programs.",
  "Conducted community resilience and recovery workshops.",
  "Supported rehabilitation of families affected by natural disasters.",
  "Improved access to emergency healthcare services.",
  "Enhanced water, sanitation and hygiene initiatives.",
  "Provided psychosocial support for affected individuals.",
  "Strengthened volunteer training and response readiness.",
  "Promoted climate adaptation and disaster awareness campaigns.",
  "Built stronger partnerships for humanitarian assistance."
],

    "2026-2027": [
  "Established long-term community recovery support initiatives.",
  "Expanded climate resilience and disaster mitigation projects.",
  "Strengthened local emergency response networks.",
  "Enhanced disaster preparedness through technology-driven solutions.",
  "Supported reconstruction and livelihood restoration programs.",
  "Improved community access to essential emergency resources.",
  "Promoted sustainable recovery and resilience planning.",
  "Expanded humanitarian outreach to remote and vulnerable regions.",
  "Conducted advanced disaster management training programs.",
  "Built stronger community-led emergency response systems."
]
  };
  return (
    <>
      <Navbar
       hideMarquee={true} 
       scrollValue={60} 
       
        />


      <section
        className="humanitarian-hero"
        style={{
          backgroundImage:
            " url('/images/GalleryPageImage64.png')",
        }}
      >
        <div className="humanitarian-hero-content">
          <span>EMERGENCY RESPONSE & RELIEF</span>

          <h1>
            Humanitarian
            <br />
            Action & Disaster Relief
          </h1>

          <p>
            AFLISH Group stands beside vulnerable communities during
            emergencies, natural disasters, and humanitarian crises by
            delivering rapid relief, rehabilitation support, and hope where it
            is needed most.
          </p>
        </div>
      </section>
      <section className="humanitarian-breadcrumb">
        <div className="breadcrumb-container">
          <span> 🏠</span>
          <span>›</span>
          <span>Services</span>
          <span>›</span>
          <span>Humanitarian</span>
        </div>
      </section>

      <section className="aflish-humanitarian-section">
        <div className="aflish-container">

          <h1 className="aflish-main-heading">
            LET’S COME TOGETHER TO ENSURE COMMUNITIES SURVIVE, THRIVE, AND STAY PROTECTED IN DISASTERS AND EMERGENCY SITUATIONS.
          </h1>

          <h2 className="aflish-sub-heading">
            Humanitarian Response Efforts and Initiatives by Aflish Group
          </h2>

          <p className="aflish-lead-text">
            Every individual, regardless of their background, region, or belief, has a fundamental right to survive, learn, and stay protected, even in the toughest times of crisis.
          </p>

          <div className="aflish-content-body">
            <p>
              <strong>Aflish Group</strong>, through our dedicated relief programmes and community initiatives, is committed to reaching out to thousands of families and individuals in need. We relentlessly work on providing immediate lifesaving humanitarian support and protection services, which include food security, temporary shelter materials, clean water, sanitation, hygiene kits, and essential medical support.
              {/* </p>
          <p> */}
              Our efforts are not limited to immediate crisis response; we actively work on disaster risk management, climate mitigation, community recovery, and reconstruction activities. By empowering local communities to act as first responders, we aim to prevent the loss of lives and livelihoods, helping them build back better when an emergency strikes.
            </p>
            <p className="aflish-stats-text">
              With a strong legacy of corporate social responsibility, Aflish Group continues to scale its impact across regions.
              {/* , prioritizing those who are most vulnerable during emergencies. */}
            </p>
          </div>

          <h2 className="aflish-cta-heading">
            Come, join our mission to ensure communities and families survive and build back better.
          </h2>
          <p className="aflish-bottom-text">
            Over the years, AFLISH Group has faced diverse humanitarian challenges and developed innovative, community-driven solutions to ensure timely assistance, protection, and recovery support for vulnerable families affected by disasters and emergency situations.
          </p>

        </div>
      </section>


      {/* --- ONGOING INITIATIVES SECTION START --- */}
      <div className="aflish-ongoing-section">
        <div className="aflish-section-header">
          <h2>Ongoing Humanitarian Initiatives</h2>
          <p>
            Advancing humanitarian action through strengthening resilient infrastructure, organizing capacity-building workshops, and promoting sustainable climate action with community-led preparedness initiatives by Aflish Group.
          </p>
        </div>

        <div className="aflish-initiatives-container">

          {/* Card 1 */}
          <div className="aflish-initiative-card">
            <div className="aflish-card-heading-top">
              <h3>Strengthening Climate Action & Community Disaster Resilience | National Consultation</h3>
            </div>
            <div className="aflish-card-body-layout">
              <div className="aflish-card-left-img">
                <img src="images/GalleryPageImage47.png" alt="Climate Action Consultation" />
              </div>
              <div className="aflish-card-right-content">
                <p>
                  The National Consultation Workshop on Disaster Risk Reduction (DRR) and Climate Action was organized by <strong>Aflish Group</strong> in association with leading academic institutions and tech partners. This platform brought together practitioners, researchers, and climate leaders to strengthen risk-informed programming for local communities.
                </p>
                <p>
                  Together, we are shaping sustainable solutions where corporate responsibility meets climate mitigation and community resilience, focusing heavily on protecting livelihoods in highly vulnerable eco-zones.
                  Aflish Group empowers communities through partnerships, training, innovation, preparedness, resilience, and recovery.
                  {/* Aflish Group empowers communities through partnerships, training, and disaster resilience. */}
                  {/* Empowering communities through partnerships, training, and innovation. */}
                  {/* Through strategic partnerships, capacity-building programs, and innovation-driven approaches, Aflish Group continues to empower communities to prepare for, withstand, and recover from disasters more effectively. */}

                  {/* Our commitment extends beyond immediate response, ensuring long-term resilience, environmental sustainability, and inclusive development for future generations. */}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="aflish-initiative-card second-card">
            <div className="aflish-card-heading-top">
              <h3>Strengthening Regional Disaster Readiness in Collaboration with Aflish Group</h3>
            </div>
            <div className="aflish-card-body-layout">
              <div className="aflish-card-left-img">
                <img src="images/GalleryPageImage48.png" alt="Disaster Readiness Training" />
              </div>
              <div className="aflish-card-right-content">
                <p>
                  Aflish Group, in active collaboration with state disaster management authorities, has supported specialized field-based training programs, including advanced drone-based logistics for immediate relief delivery. This initiative enables the rapid transport of medical supplies, clean food, and survival kits to cut-off or hard-to-reach terrain during emergencies.
                </p>
                <p>
                  By empowering regional teams with modern tools and hands-on operational knowledge, we are proud to contribute towards a highly emergency-ready and resilient ecosystem.
                  Our efforts also focus on strengthening disaster preparedness through community awareness campaigns, simulation exercises, and emergency response planning at the grassroots level.

                  {/* Through continuous innovation and strategic partnerships, Aflish Group remains committed to ensuring faster response times, minimizing risks, and safeguarding vulnerable communities during times of crisis. */}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* --- ONGOING INITIATIVES SECTION END --- */}


      {/* --- AFLISH HUMANITARIAN RESPONSES CARDS START --- */}
      <div className="aflish-responses-section-container">
        <div className="aflish-responses-section">
          <div className="aflish-responses-header">
            <h2>List of some of our humanitarian responses:</h2>
            <p>
              Over the years, Aflish Group has been at the forefront of responding to some of the most devastating disasters and crises. From flash floods and severe cyclones to regional industrial crises and pandemic support, our corporate relief teams work tirelessly to provide life-saving relief, rehabilitation, and structural recovery support to affected communities.
            </p>
          </div>

          <div className="aflish-responses-grid">

            {/* Card 1: FLOODS */}
            <div className="aflish-res-card border-floods">
              <div className="aflish-card-icon-wrapper bg-floods">
                {/* <i className="demo-icon-flood">🌧️</i> आप अपनी SVG या FontAwesome Icon लगा सकते हैं */}
                {/* <i className="fas fa-house-flood-water"></i> */}
                {/* <i className="fas fa-water"></i> */}
                {/* <i className="fas fa-cloud-showers-heavy"></i> */}
                <i className="fas fa-house-flood-water-circle-arrow-right"></i>
              </div>
              <h3>FLOODS</h3>
              <ul>
                <li>Dharali, Uttarkashi Flash Flood Relief</li>
                <li>Assam Emergency Flood Response</li>
                <li>Delhi & Yamuna Basin Relief Operations</li>
                <li>Himachal Flash Floods (Mandi & Kullu)</li>
                <li>Uttarakhand Cloudburst Rehabilitation</li>
                {/* <li>Odisha Delta Region Flood Support</li> */}
              </ul>
            </div>

            {/* Card 2: CYCLONE */}
            <div className="aflish-res-card border-cyclone">
              <div className="aflish-card-icon-wrapper bg-cyclone">
                {/* <i className="demo-icon-cyclone">🌀</i> */}
                {/* <i className="fas fa-wind"></i> */}
                {/* <i className="fas fa-hurricane"></i> */}

                {/* <i className="fas fa-tornado"></i> */}


                <i className="fas fa-cloud-bolt"></i>
              </div>
              <h3>CYCLONE</h3>
              <ul>
                <li>Cyclone Dana Relief (Odisha Coast)</li>
                <li>Cyclone Yaas Support (WB & Jharkhand)</li>
                <li>Cyclone Amphan Emergency Supplies</li>
                <li>Cyclone Fani Rehabilitation Program</li>
                <li>Super Cyclone Core Zone Support</li>
              </ul>
            </div>

            {/* Card 3: LANDSLIDES */}
            <div className="aflish-res-card border-landslides">
              <div className="aflish-card-icon-wrapper bg-landslides">
                {/* <i className="demo-icon-landslide">⛰️</i> */}
                {/* <i className="fas fa-mountain"></i> */}

                {/* <i className="fas fa-hill-rockslide"></i> */}

                {/* <i className="fas fa-road-barrier"></i> */}

                <i className="fas fa-triangle-exclamation"></i>
              </div>
              <h3>LANDSLIDES</h3>
              <ul>
                <li>Mandi & Kullu Valley Landslide Rescue</li>
                <li>Shimla Highway Restoration Support</li>
                <li>Joshimath Structural Mitigation Project</li>
                <li>Solan Terrain Reconstruction Initiative</li>
                <li>Emergency Debris Clearance & Access Route Restoration</li>
                {/* <li>Community Relocation & Temporary Shelter Assistance</li> */}
              </ul>
            </div>

            {/* Card 4: EARTHQUAKES */}
            <div className="aflish-res-card border-earthquakes">
              <div className="aflish-card-icon-wrapper bg-earthquakes">
                <i className="fas fa-house-crack"></i>

                {/* <i className="fas fa-house-circle-exclamation"></i>

<i className="fas fa-building-circle-exclamation"></i>

<i className="fas fa-triangle-exclamation"></i> */}
              </div>
              <h3>EARTHQUAKES</h3>
              <ul>
                <li>Border Zone Earthquake Response</li>
                <li>Himalayan Foothills Emergency Aid</li>
                <li>Community Seismic Safety Awareness</li>
                <li>Structural Safety & Shelter Building</li>
                <li>Post-Earthquake Relief Material Distribution</li>
              </ul>
            </div>

            {/* Card 5: COVID-19 & HEALTH */}
            <div className="aflish-res-card border-covid">
              <div className="aflish-card-icon-wrapper bg-covid">
                {/* <i className="demo-icon-covid">🏥</i> */}
                {/* <i className="fas fa-kit-medical"></i> */}
                <i className="fas fa-heart-pulse"></i>

                {/* <i className="fas fa-staff-snake"></i>

<i className="fas fa-user-doctor"></i>

<i className="fas fa-notes-medical"></i>

<i className="fas fa-briefcase-medical"></i>

<i className="fas fa-syringe"></i> */}
              </div>
              <h3>COVID-19 & HEALTH</h3>
              <ul>
                <li>Aflish Pan-India Oxygen & Bed Support</li>
                <li>Corporate Vaccination & Safety Drives</li>
                <li>Sarasvati Comprehensive Health Initiative</li>
                <li>Medical Kit & Preventive Mask Distribution</li>
              </ul>
            </div>

            {/* Card 6: OTHER RESPONSES */}
            <div className="aflish-res-card border-others">
              <div className="aflish-card-icon-wrapper bg-others">
                {/* <i className="demo-icon-others">📦</i> */}
                {/* <i className="fas fa-box-open"></i> */}
                <i className="fas fa-hand-holding-heart"></i>

                {/* <i className="fas fa-people-carry-box"></i>

<i className="fas fa-boxes-stacked"></i>

<i className="fas fa-truck-ramp-box"></i>

<i className="fas fa-hands-helping"></i> */}

                {/* <i className="fas fa-people-group"></i> */}
              </div>
              <h3>OTHER RESPONSES</h3>
              <ul>
                <li>Balasore Commercial Transit Incident Relief</li>
                <li>Gurugram Winterization Kit Distribution</li>
                <li>Motihari Marginalized Household Support</li>
                <li>Extreme Weather Community Shelters</li>
                {/* <li>Emergency Relief & Essential Supply Distribution for Vulnerable Communities</li> */}
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* --- AFLISH HUMANITARIAN RESPONSES CARDS END --- */}




      {/* --- SECTION 1: FIRST TO REACH... LAST TO LEAVE --- */}
      <section className="aflish-core-commitment-zone">
        <div className="aflish-commitment-container">
          <h2 className="aflish-commitment-title">First to Reach… Last to Leave</h2>

          <p className="aflish-commitment-lead">
            Communities and families face unprecedented hardships in the immediate aftermath of any humanitarian crisis—ranging from displacement, separation, loss of basic resources, to severe mental trauma and structural devastation.
          </p>

          <p className="aflish-commitment-body">
            <strong>Aflish Group</strong> operates on a strict <strong>72-hour mobilization framework</strong>, mandating our core disaster response teams to initiate relief operations on the ground within 72 hours of an emergency. Our driving philosophy is "Zero Disruption, Zero Delay," aiming for zero preventable casualties and immediate recovery setup.
          </p>

          <p className="aflish-commitment-sub">
            We do not believe in just temporary relief. Aflish Group remains committed on-site, guiding long-term recovery, community rebuilding, and structural reconstruction till families become fully self-reliant and resilient against future emergency situations.
          </p>
          <p className="aflish-commitment-highlight">
            Standing with communities from emergency response to complete recovery and resilience.
          </p>

        </div>
      </section>


      {/* --- SECTION 2: WHY THE NEEDS OF COMMUNITIES (ACCORDION CARDS) --- */}
      <section className="aflish-necessity-accordion-wrapper">
        <div className="aflish-necessity-container">
          <h2 className="aflish-necessity-main-title">
            Why the needs of communities are given apex priority in emergency response
          </h2>
          <p className="aflish-necessity-subtitle">
            Diverse regional topographies face continuous environmental and industrial hazards, further amplified by rapid urbanization and climate shifts. Aflish Group targets the most critical pillars during a crisis to stabilize communities efficiently.
          </p>
          <div className="threat-container">
            <p className="threat-text">
              This poses a serious threat to India’s economy, its population, and sustainable development.
            </p>
          </div>

          
          <div className="aflish-accordion-vertical-list">

            {/* Accordion Card 1 */}
            <div className={`aflish-collapsible-card-item ${activeAflishCard === 0 ? 'is-expanded' : ''}`}>
              <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(0)}>
                <div className="aflish-trigger-left-block">
                  <img
                    src="/images/GalleryPageImage49.png"
                    alt="Safety"
                    className="aflish-card-side-image"
                  />

                  <h3>Vulnerable Demographics & Immediate Safety</h3>
                </div>
                <span className="aflish-accordion-arrow-icon">▼</span>
              </div>
              <div className="aflish-collapsible-card-content">
               <em className="aflish-card-italic-text">Marginalized households and children face the highest risks immediately after a crisis strikes.</em>
                <p>
                  During catastrophic events, marginalized households, senior citizens, and children are the hardest hit. Aflish Group sets up safe zones and structural support systems immediately to prevent physical exploitation, ensure security, and provide immediate legal and social guidance.
                </p>
              </div>
            </div>

            {/* Accordion Card 2 */}
            <div className={`aflish-collapsible-card-item ${activeAflishCard === 1 ? 'is-expanded' : ''}`}>
              <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(1)}>
                <div className="aflish-trigger-left-block">
                  <img
                    src="/images/GalleryPageImage52.png"
                    alt="Safety"
                    className="aflish-card-side-image"
                  />            <h3>Sustenance and Continuity of Local Livelihoods</h3>
                </div>
                <span className="aflish-accordion-arrow-icon">▼</span>
              </div>
              <div className="aflish-collapsible-card-content">
<em className="aflish-card-italic-text">Families face severe generational deficits when local economic ecosystems completely collapse.</em>
                <p>
                  An emergency completely halts local markets, micro-businesses, and daily wage earning systems. Our programs focus on distributing immediate survival kits, alongside setting up transitional resource allocations so families do not sink into generational economic deficits.
                </p>
              </div>
            </div>

            {/* Accordion Card 3 */}
            <div className={`aflish-collapsible-card-item ${activeAflishCard === 2 ? 'is-expanded' : ''}`}>
              <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(2)}>
                <div className="aflish-trigger-left-block">
                  <img
                    src="/images/GalleryPageImage55.png"
                    alt="Safety"
                    className="aflish-card-side-image"
                  />            <h3>Critical WASH Infrastructure (Water, Sanitation & Hygiene)</h3>
                </div>
                <span className="aflish-accordion-arrow-icon">▼</span>
              </div>
              <div className="aflish-collapsible-card-content">
<em className="aflish-card-italic-text">Contaminated water resources present a massive biological threat post-disaster.</em>
                <p>
                  Post-disaster zones face severe threats from waterborne epidemics due to contaminated water lines. Aflish Group deploys quick-install water purification plants, customized hygiene kits, and sanitation modules to maintain biological safety standards on the ground.
                </p>
              </div>
            </div>

            {/* Accordion Card 4 */}
            <div className={`aflish-collapsible-card-item ${activeAflishCard === 3 ? 'is-expanded' : ''}`}>
              <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(3)}>
                <div className="aflish-trigger-left-block">
                  <img
                    src="/images/GalleryPageImage60.png"
                    alt="Safety"
                    className="aflish-card-side-image"
                  />            <h3>Mental Health Stabilization & Psycho-social Support</h3>
                </div>
                <span className="aflish-accordion-arrow-icon">▼</span>
              </div>
              <div className="aflish-collapsible-card-content">
<em className="aflish-card-italic-text">The unseen psychological shock of trauma leaves deeper scars than structural damage.</em>
                <p>
                  The psychological shock of losing homes and assets leaves long-term trauma. Aflish Group integrates expert counselor networks to conduct therapeutic community sessions, helping families process grief and build mental resilience to look towards the future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
 {/* KEY Solution AREAS */}

<section className="hmn-solutions">

  <h2 className="hmn-solutions-title">Be Part Of Our Solution</h2>
<p className="hmn-solutions-subtitle">
AFLISH Group collaborates with communities, institutions, and humanitarian partners to provide emergency relief, strengthen local response capacities, support long-term recovery, and help vulnerable populations rebuild safer, stronger, and more resilient futures.
</p>
  <div className="hmn-solutions-slider">

    <button
      className="hmn-solutions-arrow left"
      onClick={prevSlide}
    >
      ❮
    </button>
<div className="hmn-solutions-cards-wrapper">
    <div className="solutions-cards"
     style={{
   transform:`translateX(-${currentSlide * 355}px)`
 }}>

      {solutionsData.map((card)=>(
<div className="hmn-solution-card" key={card.title}>
          <h3 key={`title-${currentSlide}-${card.title}`}>{card.title}</h3>

          <div className="hmn-solution-icon"  key={`icon-${currentSlide}-${card.title}`}>
            {card.icon}
          </div>

          <p><b>{card.desc}</b></p>

        </div>
      ))}

    </div>
    </div>

    <button
      className="hmn-solutions-arrow right"
      onClick={nextSlide}
    >
      ❯
    </button>

  </div>

  <div className="hmn-solutions-dots">

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



      <section className="humanitarian-achievements">

        <div className="humanitarian-achievements-container">

          <div className="humanitarian-achievements-section-title">

            <span>OUR ACHIEVEMENTS</span>

          </div>

          <div className="humanitarian-achievement-years">

            <button
              className={activeYear === "2024-2025" ? "year-btn active" : "year-btn"}
              onClick={() => setActiveYear("2024-2025")}
            >
              2024-2025
            </button>

            <button
              className={activeYear === "2025-2026" ? "year-btn active" : "year-btn"}
              onClick={() => setActiveYear("2025-2026")}
            >
              2025-2026
            </button>

            <button
              className={activeYear === "2026-2027" ? "year-btn active" : "year-btn"}
              onClick={() => setActiveYear("2026-2027")}
            >
              2026-2027
            </button>

          </div>

          <div className="humanitarian-achievement-content">

            <ul>

              {achievementsData[activeYear].map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>







      {/* --- SECTION 1: DIRECTLY IMPACTED & STATISTICS --- */}
      <section className="aflish-stats-dashboard-tier">
        <div className="aflish-stats-main-grid">

          {/* Left Stat Box */}
          <div className="aflish-stat-metric-card">
            <div className="aflish-metric-num-wrapper">
              <span className="aflish-metric-prefix">Directly Impacted</span>
              <h2>45,500+</h2>
              <span className="aflish-metric-suffix">Children and Families in 2025-26</span>
            </div>
            <p className="aflish-metric-desc">
              Through the consistent support of our corporate alliance and donors, we have successfully transformed lives across crisis-hit zones.
            </p>
          </div>
{/* Pehli Vertical Line */}
    <div className="aflish-stat-divider"></div>
          {/* Center Call-to-Action Box */}
          <div className="aflish-stat-cta-join-box">
            <p className="aflish-cta-middle-text">
              We are deeply indebted to our partners, field workers, and supporters who have helped touch the lives of thousands on the ground.
            </p>
            <p className="aflish-cta-sub-pitch">You too can make a difference. Join us in making a lasting impact!</p>
            <Link to="/donation">
            <button className="aflish-action-portal-btn">SUPPORT OUR MISSION</button>
          </Link>
          </div>
{/* Dusri Vertical Line */}
    <div className="aflish-stat-divider"></div>
          {/* Right Stat Box */}
          <div className="aflish-stat-metric-card">
            <div className="aflish-metric-num-wrapper">
              <span className="aflish-metric-prefix">Indirectly Empowered</span>
              <h2>62,800+</h2>
              <span className="aflish-metric-suffix">Adults and Local Workers</span>
            </div>
            <p className="aflish-metric-desc">
              Rebuilding local supply chains, restoring micro-livelihoods, and ensuring clean water safety for surrounding communities.
            </p>
          </div>

        </div>
      </section>


      {/* --- SECTION 2: KEY INNOVATIONS (3 CARDS WITH IMAGES) --- */}
      <section className="aflish-innovation-showcase-belt">
        <div className="aflish-innovation-max-container">

          <div className="aflish-innovation-section-intro">
            <span className="aflish-tech-badge">FORWARD-LOOKING CSR</span>
            <h2>Key Innovations in Climate Change Action & Resilience Building</h2>
          </div>

          <div className="aflish-innovation-triple-grid">

            {/* Innovation Card 1 */}
            <div className="aflish-tech-display-card">
              <div className="aflish-tech-card-img-holder">
                <img
                  src="images/GalleryPageImage61.png"
                  alt="Drone Technology Logistics"
                />
              </div>
              <div className="aflish-tech-card-details">
                <p>
                  Introducing advanced autonomous logistic drone technology in humanitarian relief operations for hard-to-reach, cut-off mountain terrains and flooded valleys.
                </p>
              </div>
            </div>

            {/* Innovation Card 2 */}
            <div className="aflish-tech-display-card">
              <div className="aflish-tech-card-img-holder">
                <img
                  src="images/GalleryPageImage62.png"
                  alt="Customized Education Kits"
                />
              </div>
              <div className="aflish-tech-card-details">
                <p>
                  Innovation of customized emergency responses – focusing on mobile digital school setups, transitional shelter protections, and mental health relief camps.
                </p>
              </div>
            </div>

            {/* Innovation Card 3 */}
            <div className="aflish-tech-display-card">
              <div className="aflish-tech-card-img-holder">
                <img
                  src="images/GalleryPageImage63.png"
                  alt="WASH Infrastructure"
                />
              </div>
              <div className="aflish-tech-card-details">
                <p>
                  Deploying quick-assembly solar-powered water purification plants and smart WASH modules directly into severe bio-hazard emergency zones.
                </p>
              </div>
            </div>

          </div>

          {/* Alliance/Partnership Footer Text inside Innovation Box */}
          <div className="aflish-alliance-footer-node">
            <h4>Our Knowledge & Operational Partners:</h4>
            <p>
              National Disaster Mitigation Councils, Council of Scientific & Technical Research Ecosystems, Central Infrastructure Research Bodies, and Regional State Disaster Management Authorities.
            </p>
          </div>

        </div>
      </section>





      {/* 
      <section className="humanitarian-overview">

        <div className="humanitarian-container">

          <div className="humanitarian-left">
            <img
              src="/images/disaster-relief.jpg"
              alt="Humanitarian Support"
            />
          </div>

          <div className="humanitarian-right">
            <span>OUR HUMANITARIAN COMMITMENT</span>

            <h2>
              Supporting Communities During Their Most Difficult Times
            </h2>

            <p>
              Natural disasters, health emergencies, and unexpected crises can
              leave families without shelter, food, medical care, and security.
              AFLISH Group works to provide immediate assistance while helping
              communities rebuild stronger and more resilient futures.
            </p>

            <p>
              Through coordinated relief operations, volunteer networks, and
              partnerships, we deliver humanitarian support that restores hope
              and dignity.
            </p>
          </div>

        </div>

      </section>

      <section className="humanitarian-services">

        <div className="section-title">
          <span>WHAT WE DO</span>
          <h2>Humanitarian Programs</h2>
        </div>

        <div className="humanitarian-grid">

          <div className="humanitarian-card">
            <h3>Emergency Relief</h3>
            <p>
              Distribution of food kits, drinking water, clothing, blankets,
              medicines, and essential supplies during emergencies.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Disaster Response</h3>
            <p>
              Rapid response support during floods, earthquakes, storms,
              fires, and other natural disasters.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Medical Assistance</h3>
            <p>
              Healthcare camps, emergency medicines, first-aid support,
              and health awareness initiatives.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Community Rehabilitation</h3>
            <p>
              Supporting families in rebuilding homes, livelihoods,
              and community infrastructure after crises.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Volunteer Mobilization</h3>
            <p>
              Engaging trained volunteers to provide immediate
              on-ground humanitarian support.
            </p>
          </div>

          <div className="humanitarian-card">
            <h3>Long-Term Recovery</h3>
            <p>
              Helping communities recover through sustainable development,
              resilience building, and social support systems.
            </p>
          </div>

        </div>

      </section>

      <section className="humanitarian-impact">

        <div className="section-title">
          <span>OUR IMPACT</span>
          <h2>Building Hope Through Action</h2>
        </div>

        <div className="impact-grid">

          <div className="impact-box">
            <h3>Relief Distribution</h3>
            <p>
              Providing essential resources to affected families during
              humanitarian emergencies.
            </p>
          </div>

          <div className="impact-box">
            <h3>Volunteer Network</h3>
            <p>
              Mobilizing compassionate individuals to support communities
              during crises.
            </p>
          </div>

          <div className="impact-box">
            <h3>Recovery Support</h3>
            <p>
              Helping communities regain stability and rebuild their future.
            </p>
          </div>

        </div>

      </section> */}

      <Footer />
    </>
  );
};

export default HumanitarianPage;