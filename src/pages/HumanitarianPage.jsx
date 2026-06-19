import React, { useState } from "react";
import "./HumanitarianPage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick";
const SliderComponent = Slider.default || Slider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const HumanitarianPage = () => {
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
    "Supported 300+ children with educational resources.",
    "Distributed school bags, notebooks and stationery kits.",
    "Organized community learning sessions in underserved areas.",
    "Connected volunteers with children needing academic support.",
    "Conducted reading and literacy improvement programs.",
    "Provided educational support to children from low-income families.",
    "Organized awareness campaigns promoting the importance of education.",
    "Facilitated access to learning materials for rural students.",
    "Encouraged regular school attendance through community engagement.",
    "Supported teachers with essential educational resources and guidance."
  ],

  "2025-2026": [
    "Expanded digital learning access for students.",
    "Launched scholarship assistance initiatives.",
    "Strengthened girl child education awareness programs.",
    "Conducted career guidance and mentoring workshops.",
    "Introduced computer literacy sessions for young learners.",
    "Distributed digital learning resources in underserved communities.",
    "Organized educational competitions to encourage student participation.",
    "Promoted life-skills development through interactive workshops.",
    "Enhanced community involvement in children's educational growth.",
    "Provided academic mentoring support through dedicated volunteers."
  ],

  "2026-2027": [
    "Established community learning centers.",
    "Increased volunteer participation across education projects.",
    "Introduced technology-enabled learning activities.",
    "Expanded partnerships supporting child education.",
    "Launched advanced digital literacy and STEM learning programs.",
    "Strengthened scholarship outreach for deserving students.",
    "Expanded educational support initiatives to remote communities.",
    "Organized leadership and personal development workshops for youth.",
    "Improved access to quality learning resources and study materials.",
    "Built stronger collaborations with schools and educational institutions."
  ]
};
  return (
    <>
      <Navbar hideMarquee={true} scrollValue={60} navbarClass="navbar-light" />

      <section
        className="humanitarian-hero"
        style={{
          backgroundImage:
            " url('/images/GalleryPageImage46.png')",
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
        <i className="demo-icon-flood">🌧️</i> {/* आप अपनी SVG या FontAwesome Icon लगा सकते हैं */}
      </div>
      <h3>FLOODS</h3>
      <ul>
        <li>Dharali, Uttarkashi Flash Flood Relief</li>
        <li>Assam Emergency Flood Response</li>
        <li>Delhi & Yamuna Basin Relief Operations</li>
        <li>Himachal Flash Floods (Mandi & Kullu)</li>
        <li>Uttarakhand Cloudburst Rehabilitation</li>
        <li>Odisha Delta Region Flood Support</li>
      </ul>
    </div>

    {/* Card 2: CYCLONE */}
    <div className="aflish-res-card border-cyclone">
      <div className="aflish-card-icon-wrapper bg-cyclone">
        <i className="demo-icon-cyclone">🌀</i>
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
        <i className="demo-icon-landslide">⛰️</i>
      </div>
      <h3>LANDSLIDES</h3>
      <ul>
        <li>Mandi & Kullu Valley Landslide Rescue</li>
        <li>Shimla Highway Restoration Support</li>
        <li>Joshimath Structural Mitigation Project</li>
        <li>Solan Terrain Reconstruction Initiative</li>
      </ul>
    </div>

    {/* Card 4: EARTHQUAKES */}
    <div className="aflish-res-card border-earthquakes">
      <div className="aflish-card-icon-wrapper bg-earthquakes">
        <i className="demo-icon-earthquake">🫨</i>
      </div>
      <h3>EARTHQUAKES</h3>
      <ul>
        <li>Border Zone Earthquake Response</li>
        <li>Himalayan Foothills Emergency Aid</li>
        <li>Community Seismic Safety Awareness</li>
        <li>Structural Safety & Shelter Building</li>
      </ul>
    </div>

    {/* Card 5: COVID-19 & HEALTH */}
    <div className="aflish-res-card border-covid">
      <div className="aflish-card-icon-wrapper bg-covid">
        <i className="demo-icon-covid">🏥</i>
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
        <i className="demo-icon-others">📦</i>
      </div>
      <h3>OTHER RESPONSES</h3>
      <ul>
        <li>Balasore Commercial Transit Incident Relief</li>
        <li>Gurugram Winterization Kit Distribution</li>
        <li>Motihari Marginalized Household Support</li>
        <li>Extreme Weather Community Shelters</li>
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
      <strong>Aflish Group</strong> operates on a strict <strong>72-hour mobilization framework</strong>, mandating our core disaster response teams to initiate relief operations on the ground within 72 hours of an emergency. Our driving philosophy is <em>"Zero Disruption, Zero Delay,"</em> aiming for zero preventable casualties and immediate recovery setup.
    </p>
    
    <p className="aflish-commitment-sub">
      We do not believe in just temporary relief. Aflish Group remains committed on-site, guiding long-term recovery, community rebuilding, and structural reconstruction till families become fully self-reliant and resilient against future emergency situations.
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

    <div className="aflish-accordion-vertical-list">
      
      {/* Accordion Card 1 */}
      <div className={`aflish-collapsible-card-item ${activeAflishCard === 0 ? 'is-expanded' : ''}`}>
        <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(0)}>
          <div className="aflish-trigger-left-block">
            <span className="aflish-card-index-num">01</span>
            <h3>Vulnerable Demographics & Immediate Safety</h3>
          </div>
          <span className="aflish-accordion-arrow-icon">▼</span>
        </div>
        <div className="aflish-collapsible-card-content">
          <p>
            During catastrophic events, marginalized households, senior citizens, and children are the hardest hit. Aflish Group sets up safe zones and structural support systems immediately to prevent physical exploitation, ensure security, and provide immediate legal and social guidance.
          </p>
        </div>
      </div>

      {/* Accordion Card 2 */}
      <div className={`aflish-collapsible-card-item ${activeAflishCard === 1 ? 'is-expanded' : ''}`}>
        <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(1)}>
          <div className="aflish-trigger-left-block">
            <span className="aflish-card-index-num">02</span>
            <h3>Sustenance and Continuity of Local Livelihoods</h3>
          </div>
          <span className="aflish-accordion-arrow-icon">▼</span>
        </div>
        <div className="aflish-collapsible-card-content">
          <p>
            An emergency completely halts local markets, micro-businesses, and daily wage earning systems. Our programs focus on distributing immediate survival kits, alongside setting up transitional resource allocations so families do not sink into generational economic deficits.
          </p>
        </div>
      </div>

      {/* Accordion Card 3 */}
      <div className={`aflish-collapsible-card-item ${activeAflishCard === 2 ? 'is-expanded' : ''}`}>
        <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(2)}>
          <div className="aflish-trigger-left-block">
            <span className="aflish-card-index-num">03</span>
            <h3>Critical WASH Infrastructure (Water, Sanitation & Hygiene)</h3>
          </div>
          <span className="aflish-accordion-arrow-icon">▼</span>
        </div>
        <div className="aflish-collapsible-card-content">
          <p>
            Post-disaster zones face severe threats from waterborne epidemics due to contaminated water lines. Aflish Group deploys quick-install water purification plants, customized hygiene kits, and sanitation modules to maintain biological safety standards on the ground.
          </p>
        </div>
      </div>

      {/* Accordion Card 4 */}
      <div className={`aflish-collapsible-card-item ${activeAflishCard === 3 ? 'is-expanded' : ''}`}>
        <div className="aflish-collapsible-card-trigger" onClick={() => toggleAflishCard(3)}>
          <div className="aflish-trigger-left-block">
            <span className="aflish-card-index-num">04</span>
            <h3>Mental Health Stabilization & Psycho-social Support</h3>
          </div>
          <span className="aflish-accordion-arrow-icon">▼</span>
        </div>
        <div className="aflish-collapsible-card-content">
          <p>
            The psychological shock of losing homes and assets leaves long-term trauma. Aflish Group integrates expert counselor networks to conduct therapeutic community sessions, helping families process grief and build mental resilience to look towards the future.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="education-help">

  <div className="help-cards-container">

    <div className="help-cards-section-title">

      <span>HOW WE HELP CHILDREN LEARN BETTER</span><br/>

      <br/><h2>Learning Support That Reaches Beyond The Classroom</h2>

    </div>

    <SliderComponent {...settings}>

      <div className="help-card">
        <img src="/images/educationpage-studyingImage.png" alt="" />
        <div className="help-icon">
  📚
</div>
        <h3>SCHOOL READINESS</h3>
       <p>
  Building early confidence, basic learning habits and joyful
  classroom participation for young children.
  We help children develop social, emotional and communication skills.
</p>
      </div>

      <div className="help-card">
        <img src="/images/classroomstudyingimage-educationpage.png" alt="" />
        <div className="help-icon">🏫</div>
        <h3>LEARNING ENVIRONMENT</h3>
        <p>
  Supporting safe, encouraging spaces where students can ask,
  explore, read, practice and grow.
  Creating positive environments that inspire curiosity and learning.
</p>
      </div>

      <div className="help-card">
        <img src="/images/digitallabimage-educationpage.png" alt="" />
        <div className="help-icon">💻</div>
        <h3>DIGITAL LEARNING</h3>
        <p>
  Introducing practical digital exposure so children can build
  confidence with modern learning tools.
  Preparing learners for future educational and career opportunities.
</p>
      </div>

      <div className="help-card">
        <img src="/images/childrenstudyingimage.jpg" alt="" />
        <div className="help-icon">✏️</div>
        <h3>REMEDIAL SUPPORT</h3>
        <p>
  Helping learners strengthen reading, numeracy and revision
  skills through steady community support.
  Providing additional guidance to overcome learning difficulties.
</p>
      </div>

      <div className="help-card">
        <img src="/images/overview-education-image.png" alt="" />
        <div className="help-icon">👧</div>
        <h3>GIRL CHILD EDUCATION</h3>
        <p>
  Encouraging families and communities to keep girls learning,
  participating and planning their futures.
  Promoting equal opportunities and long-term educational success.
</p>
      </div>

      <div className="help-card">
        <img src="/images/education-image.jpg" alt="" />
        <div className="help-icon">👨‍🏫</div>
        <h3>TEACHER AND VOLUNTEER SUPPORT</h3>
       <p>
  Mobilizing mentors and volunteers who make learning more
  consistent, personal and motivating.
  Strengthening student engagement through guidance and encouragement.
</p>
      </div>
      <div className="help-card">
  <img src="/images/ngoeducation.jfif" alt="" />
  <div className="help-icon">🎓</div>

  <h3>SCHOLARSHIP ASSISTANCE</h3>

  <p>
    Supporting deserving students with educational aid,
    scholarship guidance and financial assistance.
    Helping talented children continue their studies without interruption.
  </p>
</div>
<div className="help-card">
  <img src="/images/library.jfif" alt="" />
  <div className="help-icon">📖</div>

  <h3>LIBRARY & READING PROGRAM</h3>

  <p>
    Encouraging reading habits through community libraries,
    story sessions and access to age-appropriate books.
    Helping children improve literacy, imagination and learning.
  </p>
</div>
<div className="help-card">
  <img src="/images/distributestationary.jfif" alt="" />
  <div className="help-icon">🎒</div>

  <h3>SCHOOL SUPPLIES DISTRIBUTION</h3>

  <p>
    Providing notebooks, stationery, school bags and learning
    materials to children from underserved communities.
    Ensuring every student has the resources needed to learn effectively.
  </p>
</div>
<div className="help-card">
  <img src="/images/communitylearning.jfif" alt="" />
  <div className="help-icon">🏡</div>

  <h3>COMMUNITY LEARNING CENTERS</h3>

  <p>
    Creating accessible learning spaces where children can study,
    receive academic support and participate in educational activities.
    Bringing quality learning opportunities closer.
  </p>
</div>
<div className="help-card">
  <img src="/images/careerguidance.jfif" alt="" />
  <div className="help-icon">🚀</div>

  <h3>CAREER GUIDANCE & COUNSELLING</h3>

  <p>
    Helping students explore career opportunities, educational
    pathways and future goals through mentoring and guidance.
    Empowering young minds to make informed decisions.
  </p>
</div>
<div className="help-card">
  <img src="/images/diversechildren.jfif" alt="" />
  <div className="help-icon">👨‍👩‍👧‍👦</div>

  <h3>PARENT & COMMUNITY ENGAGEMENT</h3>

  <p>
    Encouraging parents and community members to actively support
    children's education and personal development.
    Building stronger partnerships that create lasting educational impact.
  </p>
</div>
      </SliderComponent>

   

  </div>

</section>




<section className="education-achievements">

  <div className="achievements-container">

    <div className="achievements-section-title">

      <span>OUR ACHIEVEMENTS</span>

    </div>

    <div className="achievement-years">

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

    <div className="achievement-content">

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

    {/* Center Call-to-Action Box */}
    <div className="aflish-stat-cta-join-box">
      <p className="aflish-cta-middle-text">
        We are deeply indebted to our partners, field workers, and supporters who have helped touch the lives of thousands on the ground.
      </p>
      <p className="aflish-cta-sub-pitch">You too can make a difference. Join us in making a lasting impact!</p>
      <button className="aflish-action-portal-btn">SUPPORT OUR MISSION</button>
    </div>

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
            src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80" 
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
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" 
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
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" 
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