import React from "react";
import "./ResiliencePage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const ResiliencePage = () => {
  return (
    <>
      <Navbar
       hideMarquee={true}
        scrollValue={60}
         />

      <section
        className="resilience-hero"
        style={{
          backgroundImage:
            "url('/images/GalleryPageImage73.png')",
        }}
      >
        <div className="resilience-hero-content">

          <span>COMMUNITY RESILIENCE</span>

          <h1>
            Building Stronger &
           <br/> Sustainable Communities
          </h1>

          <p>
            AFLISH Group empowers communities with the knowledge,
            resources, leadership, and infrastructure needed to
            withstand challenges and create a sustainable future, while fostering resilience, self-reliance, and long-term preparedness against future humanitarian and environmental crises.
          </p>

        </div>
      </section>

{/* Hero Section ke just niche yeh naya AFLISH Group section paste karein */}
<section className="resilience-breadcrumb-strip">
  <div className="resilience-breadcrumb-container">
    <div className="breadcrumb-nav">
      <span className="home-icon">🏠</span> 
      <span className="separator">&gt;</span>

  <Link to="/services" className="resilience-breadcrumb-link">
    Services
  </Link>
      
      <span className="separator">&gt;</span> 
      <span className="current-page">Resilience</span>
    </div>
    </div>
    </section>
    <section className="resilience-intro-section">

  <div className="resilience-intro-container">
    <h2 className="resilience-intro-heading">
      BUILDING RESILIENCE: INTEGRATING ESSENTIALS FOR SUSTAINABLE DEVELOPMENT
    </h2>
    <div className="resilience-intro-content">
      <p>
        AFLISH Group stands at the forefront of empowering communities to face global challenges, environmental shifts, and economic uncertainties. Marginalized sections and urban areas alike face growing pressures from modern crises, impacting health, education, and basic livelihoods. We believe true resilience is built from the ground up by preparing families to withstand shocks and avoid negative coping strategies.
      </p>
      <p>
        The socio-economic impact of crises heavily alters the future of vulnerable groups, especially women and children, often disrupting access to education, stable income, and proper development opportunities. Without structural readiness, communities risk falling back into cycles of poverty and insecurity.
      </p>
      <p>
        Resilience and Sustainable Adaptation is a core priority area for AFLISH Group. Through our targeted grassroots programmes, we strive to address the impact of unexpected disruptions by building long-term capability, self-reliance, and leadership among marginalized families, ensuring no one is left behind.
      </p>
      <p>

        AFLISH Group actively collaborates with local communities, institutions, government agencies, and development partners to strengthen disaster preparedness and adaptive capacity. Through awareness campaigns, skill development initiatives, climate-smart practices, and community-led planning, we enable individuals to respond effectively to emergencies while reducing long-term social, environmental, and economic vulnerabilities.
      </p>
      <p>
        Our resilience programmes focus on creating sustainable systems that empower communities to recover stronger after every challenge. By promoting innovation, inclusive participation, resilient infrastructure, and responsible resource management, AFLISH Group is committed to building safer, self-reliant, and future-ready communities capable of thriving in an ever-changing world.
      </p>
    </div>
  </div>
</section>


{/* Breadcrumb strip ke just niche yeh naya section paste karein */}
<section className="resilience-priority-section">
  <div className="priority-container">
    
    <h2 className="priority-main-heading">
      WHY THE NEEDS OF CHILDREN SHOULD BE GIVEN PRIORITY IN EMERGENCY RESPONSE:
    </h2>

    <div className="priority-block">
      <h3 className="priority-sub-heading">
        Impact of climate change on children’s health
      </h3>
      <p className="priority-italic-text">
        Extreme weather exposes children to illness, injuries, and long-term health risks.
      </p>
      <p className="priority-description">
        Climate change severely affects children, making them the most vulnerable group during extreme weather events such as floods, heatwaves, and storms. These conditions increase the risk of malnutrition, respiratory infections, waterborne diseases, and physical injuries. Prolonged exposure to unsafe environments also weakens their immunity and hampers healthy growth. AFLISH Group works to protect children from the consequences of climate change through urgent actions, providing access to healthcare, safe shelters, and resilient systems that safeguard their future.
      </p>
    </div>

    <div className="priority-block">
      <h3 className="priority-sub-heading">
        Children’s education is disrupted by climate change and disasters
      </h3>
      <p className="priority-italic-text">
        Extreme weather events prevent children from continuing their learning.
      </p>
      <p className="priority-description">
        Climate change intensifies emergencies such as floods, cyclones, and heatwaves, which often damage schools, displace families, and interrupt children’s education. The shortage of teachers, unsafe infrastructure, and absence of safe learning spaces make it difficult for children to maintain continuity in their studies. AFLISH Group is committed to ensuring climate-resilient schools and providing emergency learning solutions essential to safeguard children’s right to education and their long-term development.
      </p>
    </div>

  </div>
</section>

{/* Priority section ke just niche yeh ongoing initiatives wala section paste karein */}
<section className="resilience-ongoing-section">
  <div className="ongoing-container">
    
    <div className="ongoing-header">
      <h2>Ongoing Resilience Initiatives</h2>
      <p>
        Advancing humanitarian action through strengthening resilient villages, organizing capacity-building workshops, and promoting climate action with community-centred disaster resilience through local consultations and community-led preparedness initiatives.
      </p>
    </div>

    <div className="ongoing-cards-stack">
      
      {/* Card 1 */}
      <div className="ongoing-card-item card-green">
        <div className="card-content-wrapper">
          <div className="card-image-side">
            <img src="/images/GalleryPageImage77.png" alt="AFLISH Smart Lab" />
          </div>
          <div className="card-text-side">
            <h3>Climate Smart Community - Tech Lab</h3>
            <p className="card-intro">
              An innovative learning initiative developed by AFLISH Group to help communities understand disaster risks and build practical preparedness skills.
            </p>
            <div className="card-points">
              <h4>Key Learning Areas:</h4>
             <br/> <ul>
                <li>🌊 <strong>Flood Safety</strong> – Understanding flood risks, early warning signs, and evacuation procedures.</li>
                <li>🔥 <strong>Fire Safety</strong> – Learning how to prevent fire hazards and respond safely during emergencies.</li>
                <li>🌍 <strong>Earthquake Preparedness</strong> – Practicing essential safety protocols and emergency response.</li>
                <li>☀️ <strong>Climate Awareness</strong> – Learning about heat-related risks, preventive actions, and personal safety.</li>
                <li>🌱 <strong>Community Resilience</strong> – Building local capacity through awareness, preparedness training, and collaborative disaster response.</li>
                <li>🚑 <strong>Emergency First Aid</strong> – Promoting basic first aid skills and immediate medical response during emergencies and disasters.</li>
              </ul>
              <p className="resilience-awareness-note">
  Through these awareness initiatives, AFLISH Group empowers individuals, families, and communities with practical knowledge and essential life-saving skills, enabling them to respond confidently during emergencies while fostering a culture of preparedness, resilience, and sustainable community safety.
</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="ongoing-card-item card-blue">
        <div className="card-content-wrapper">
          <div className="card-image-side">
            <img src="/images/GalleryPageImage78.png" alt="AFLISH Partnership" />
          </div>
          <div className="card-text-side">
            <h3>MoU for Technological Engagement & Grassroots Impact</h3>
            <p className="card-intro">
              A landmark partnership by AFLISH Group that brings together modern technological innovation and social development for community wellbeing.
            </p>
            <div className="card-points">
              <h4>Through this partnership our joint focus would be on:</h4>
              <ul>
                <li>• Co-create futuristic technology-driven solutions to strengthen grassroots safety.</li>
                <li>• Develop innovative solutions for Education, Health, and Disaster Preparedness.</li>
                <li>• Foster joint research, innovation, and outreach to reach vulnerable families.</li>
              
  <li>• Co-create futuristic technology-driven solutions to strengthen grassroots safety.</li>

  <li>• Develop innovative solutions for education, healthcare, disaster preparedness, and emergency response.</li>

  <li>• Foster joint research, innovation, and outreach to support vulnerable communities.</li>

  <li>• Design AI-enabled early warning and community alert systems for disaster risk reduction.</li>

  <li>• Build digital platforms for efficient relief coordination, resource tracking, and volunteer management.</li>

  {/* <li>• Promote technology-based skill development and capacity-building programs for youth and local leaders.</li>

  <li>• Strengthen data-driven decision-making through GIS mapping, analytics, and real-time monitoring.</li>

  <li>• Support sustainable environmental conservation and climate resilience initiatives using smart technologies.</li>

  <li>• Encourage innovation, incubation, and collaborative projects that create measurable social impact.</li>

  <li>• Establish long-term partnerships with academic institutions, industries, startups, and government agencies for inclusive community development.</li> */}

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="ongoing-card-item card-red">
        <div className="card-content-wrapper">
          <div className="card-image-side">
            <img src="/images/GalleryPageImage79.png" alt="AFLISH Eco Project" />
          </div>
          <div className="card-text-side">
            <h3>Eco Retrofitting and Sustainable Infrastructure Project</h3>
            <p className="card-intro">
              A pilot intervention by AFLISH Group to strengthen community resilience through risk-smart programming and enhanced climate knowledge.
            </p>
            <div className="card-points">
              <p className="resilience-awareness-note">The primary objective is to enhance climate-resilient coping mechanisms, ensuring long-term preparedness. The goal is to empower communities to withstand climate shocks while sustaining development gains for a secure future.</p>
              <p style={{marginTop: '10px'}}>The project includes implementing eco-retrofitting solutions for water conservation, waste management, and energy efficiency to reduce carbon footprints while developing a friendly environment.</p>
         <p className="resilience-awareness-note" style={{marginTop: '10px'}}>   To ensure long-term environmental sustainability, AFLISH Group also promotes nature-based solutions, climate-smart infrastructure, and community-led conservation initiatives. By integrating green technologies with local participation, the project encourages resource-efficient development, strengthens environmental resilience, and creates safer, healthier, and more sustainable living spaces for present and future generations.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>



{/* Ongoing initiatives section ke just niche yeh innovations wala section paste karein */}
<section className="resilience-innovations-section">
  <div className="innovations-container">
    
    <div className="innovations-heading">
      <h2>KEY INNOVATIONS IN CLIMATE CHANGE ACTION AND RESILIENCE BUILDING:</h2>
    </div>

    <div className="innovations-grid">

      {/* Card 1 */}
      <div className="innovation-card">
        <div className="innovation-image">
          <img src="/images/GalleryPageImage81.png" alt="Model Resilient Village" />
        </div>
        <div className="innovation-content">
          <p>
            <strong>The Model Resilient Village Programme</strong> was initiated by AFLISH Group in response to severe climate risks and environmental shifts. This grassroots programme is implemented in collaboration with local disaster management authorities, rural bodies, and engineering experts to build structurally sound and climate-smart habitats.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="innovation-card">
        <div className="innovation-image">
          <img src="/images/GalleryPageImage82.png" alt="Capacity Building" />
        </div>
        <div className="innovation-content">
          <p>
            <strong>Strengthening of Community-Centric Risk Reduction (CCRR)</strong> centers at regional levels to mainstream sustainable adaptation agendas. AFLISH Group is working together with institutional partners to strengthen humanitarian efforts, realizing the critical need to protect vulnerable groups, women, and children during climate disruptions.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="innovation-card">
        <div className="innovation-image">
          <img src="/images/GalleryPageImage83.png" alt="Climate Resilience" />
        </div>
        <div className="innovation-content">
          <p>
            <strong>Building Climate Resilience in Vulnerable Communities:</strong> A flagship initiative by AFLISH Group designed to empower families across high-risk zones. This framework enables them to prepare for, survive, and rapidly recover from climate-induced shocks through proactive risk reduction, resource mapping, and secure livelihood transitions.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


{/* 
      <section className="resilience-overview">

        <div className="resilience-container">

          <div className="resilience-image">
            <img
              src="/images/community-resilience.jpg"
              alt="Community Resilience"
            />
          </div>

          <div className="resilience-content">

            <span>OUR APPROACH</span>

            <h2>
              Creating Long-Term Social &
              Economic Resilience
            </h2>

            <p>
              Resilience means enabling individuals and communities
              to adapt, recover, and thrive despite challenges such
              as poverty, climate change, disasters, health crises,
              and economic uncertainty.
            </p>

            <p>
              AFLISH Group focuses on strengthening local systems,
              supporting livelihoods, promoting education, and
              building community leadership for lasting impact.
            </p>

          </div>

        </div>

      </section>

      <section className="resilience-focus">

        <div className="section-heading">
          <span>FOCUS AREAS</span>
          <h2>How We Build Resilience</h2>
        </div>

        <div className="focus-grid">

          <div className="focus-card">
            <h3>Community Leadership</h3>
            <p>
              Training local leaders to drive development,
              decision-making, and social transformation.
            </p>
          </div>

          <div className="focus-card">
            <h3>Disaster Preparedness</h3>
            <p>
              Building awareness and preparedness plans to
              reduce risks during emergencies.
            </p>
          </div>

          <div className="focus-card">
            <h3>Livelihood Support</h3>
            <p>
              Strengthening income opportunities through
              skill development and entrepreneurship.
            </p>
          </div>

          <div className="focus-card">
            <h3>Climate Adaptation</h3>
            <p>
              Supporting communities in adopting sustainable
              and climate-resilient practices.
            </p>
          </div>

          <div className="focus-card">
            <h3>Social Protection</h3>
            <p>
              Connecting vulnerable families with support
              systems and welfare programs.
            </p>
          </div>

          <div className="focus-card">
            <h3>Capacity Building</h3>
            <p>
              Providing knowledge, tools, and resources
              for long-term community growth.
            </p>
          </div>

        </div>

      </section>

      <section className="resilience-impact">

        <div className="section-heading">
          <span>IMPACT</span>
          <h2>Stronger Communities. Better Futures.</h2>
        </div>

        <div className="impact-grid">

          <div className="impact-card">
            <h3>Prepared Communities</h3>
            <p>
              Better equipped to face emergencies and
              unexpected challenges.
            </p>
          </div>

          <div className="impact-card">
            <h3>Sustainable Growth</h3>
            <p>
              Increased opportunities for economic and
              social advancement.
            </p>
          </div>

          <div className="impact-card">
            <h3>Empowered Citizens</h3>
            <p>
              Individuals actively participating in
              shaping their community’s future.
            </p>
          </div>

        </div>

      </section> */}

      <Footer />
    </>
  );
};

export default ResiliencePage;