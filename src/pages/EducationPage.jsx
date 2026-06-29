import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EducationPage.css";
import Slider from "react-slick";
const SliderComponent = Slider.default || Slider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EducationPage = () => {
  const [openIndex, setOpenIndex] = useState(1);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
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
    
      <Navbar
       hideMarquee={true}
        scrollValue={60}
         />

      <section className="education-hero">

        <div className="education-overlay"></div>

        <div className="education-content">

          <span>EDUCATION FOR EVERY CHILD</span>

          <h1>
            Empowering Future Generations<br/>
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
      <p>
        Education not only improves academic outcomes but also helps children develop critical thinking, communication and problem-solving skills. These abilities enable young learners to make informed decisions, adapt to changing environments and contribute meaningfully to their communities. By fostering creativity and innovation, education lays the groundwork for lifelong learning and personal growth.
      </p>

       <p>
        AFLISH Group also focuses on creating supportive learning environments where children feel safe, encouraged and motivated to achieve their goals. Through partnerships with schools, communities and volunteers, we work to strengthen educational opportunities and ensure that learners receive the guidance and resources they need to succeed.
       </p>

      <p>
        We recognize that lasting change requires collective effort. By engaging parents, educators and local stakeholders, we promote awareness about the importance of education and encourage active participation in every child's learning journey. Together, we aim to build stronger communities where every child has the opportunity to learn, grow and thrive.
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
  onClick={() => toggleAccordion(1)}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion(1);
    }
  }}
>

  <div
    className="pillar-top"
  >

    <img
      src="/images/educationpage-studyingImage.png"
      alt=""
    />

    <h3>
      EARLY CHILDHOOD CARE AND DEVELOPMENT
    </h3>

    <span className="pillar-icon">
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
  onClick={() => toggleAccordion(2)}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion(2);
    }
  }}
>

  <div
    className="pillar-top"
    
  >

    <img
      src="/images/classroomstudyingimage-educationpage.png"
      alt=""
    />

    <h3>
      SCHOOL EDUCATION SUPPORT
    </h3>

    <span className="pillar-icon">
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
  onClick={() => toggleAccordion(3)}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion(3);
    }
  }}
>
  <div
    className="pillar-top"
    
  >

    <img
      src="/images/digitallabimage-educationpage.png"
      alt=""
    />

    <h3>
      SKILL DEVELOPMENT AND AWARENESS
    </h3>

    <span className="pillar-icon">
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
<section className="education-overview">

  <div className="education-container">

    <div className="overview-header">
      <span>EDUCATION IN INDIA</span>
      <h2>Current Educational Landscape</h2>
    </div>

    <div className="overview-content">

      <p>
        Education remains one of the most powerful drivers of
        social and economic development. India has made
        significant progress in expanding access to education
        across urban and rural communities over the past decades.
      </p>

      <p>
        Today, millions of students are enrolled in schools across
        the country, supported by a large network of educational
        institutions and dedicated teachers. Continuous efforts
        have improved literacy levels, increased school
        participation and strengthened access to learning
        opportunities for children from diverse backgrounds.
      </p>

      <p>
        Despite these achievements, challenges remain in ensuring
        consistent attendance, reducing dropout rates and
        providing equal learning opportunities for every child.
        Greater focus on digital learning, skill development and
        quality education is essential for preparing future
        generations for a rapidly evolving world.
      </p>

      <div className="overview-highlight">
        <strong>Our Vision:</strong> Every child should have
        access to safe, inclusive and quality education that
        empowers them to reach their full potential and contribute
        positively to society.
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
<section className="education-donate-band">

  <div className="education-container donate-band-inner">

    <div>
      <span>JOIN THE MISSION</span>
      <h2>Help Children Continue Learning With Confidence</h2>
      <p>
        Your support can help us provide learning material, mentoring
        and access to opportunities for children who need it most.
      </p>
    </div>

    <a href="/donation">Donate Now</a>

  </div>

</section>

<section className="education-impact">

  <div className="education-impact-container">

    <div className="impact-left">

      <span>WHY EDUCATION MATTERS</span>

      <h2>
        Transforming Lives Through Learning
      </h2>

      <p>
  Education creates opportunities, strengthens communities and helps children develop the confidence needed to achieve their dreams.

  By supporting access to quality education, we empower children with knowledge, life skills and values that prepare them for a successful future.

  Every contribution helps provide learning resources, mentorship and educational support that can transform a child's life.

  Our mission is to ensure that children from underserved communities have equal opportunities to learn, grow and build brighter futures.

  Together, we can create lasting impact by nurturing young minds and empowering the next generation through education.
</p>
    </div>

    <div className="impact-right">

      <div className="impact-box">
        <h3>Access</h3>
        <p>
          Ensuring every child has the opportunity to learn & get education.
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
          Building skills that create brighter futures of poor children .
        </p>
      </div>

    </div>

  </div>

</section>
      

      {/* <section className="education-focus">

        <div className="focus-cards-container">

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

      </section> */}

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
