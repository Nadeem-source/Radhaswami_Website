import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ChildProtection.css";
import Slider from "react-slick";
const SliderComponent = Slider.default || Slider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const ChildProtection = () => {
  // 2. Active Index track karne ke liye state (Total 6 original partners hain)
  const [activeIndex, setActiveIndex] = useState(0);

  // Partners data array taaki code clean rahe aur dynamic shift ho sake
  const partnerLogos = [
  "/images/GalleryPageImage38.png",
  "/images/GalleryPageImage39.png",
  "/images/GalleryPageImage40.png",
  "/images/GalleryPageImage41.png",
  "/images/GalleryPageImage42.png",
  "/images/GalleryPageImage43.png",
];
const settings = {
  dots: true,
  infinite: true,

  speed: 800,

  slidesToShow: 5,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 1500,

  pauseOnHover: true,

  arrows: false
};
  return (
    <>
      <Navbar
        hideMarquee={true}
        scrollValue={60}

      />

      {/* HERO */}

      <section className="cp-hero">

        <div className="cp-overlay"></div>

        <img
          src="/images/GalleryPageImage65.png"
          alt=""
          className="cp-hero-img"
        />

        <div className="cp-content">

          <span>CHILD PROTECTION</span>

          <h1>
            Ensuring Every Child
            Grows Up Safe,<br/> Protected
            & Full Of Hope
          </h1>

          <p>
            AFLISH Group works to safeguard children
            from abuse, neglect, exploitation and
            social vulnerability while ensuring access
            to education, healthcare and opportunities.
          </p>

        </div>

      </section>
      <section className="cp-breadcrumb">
        <div className="cp-breadcrumb-container">

          <a href="/">🏠</a>

          <span>›</span>

          <span>Child Protection</span>

        </div>
      </section>
      {/* ABOUT */}
      <section className="cp-about">

        <div className="cp-about-container">

          <h2>
            PROTECTING CHILDREN,
            SECURING THEIR FUTURE
          </h2>

          <h3>
            BUILDING A SAFE, INCLUSIVE AND HOPEFUL ENVIRONMENT FOR EVERY CHILD    </h3>

          <p>
            AFLISH Group is committed to protecting children from abuse, neglect, exploitation, violence, child labour, trafficking and all forms of social vulnerability. Through community engagement, awareness campaigns, education, counselling support and collaborative initiatives, we work to ensure every child grows in a safe, nurturing and empowering environment.

            Our child protection initiatives focus on prevention, intervention and rehabilitation, while strengthening families and communities to safeguard children's rights and wellbeing. We actively promote child safety, emotional resilience and equal opportunities through capacity-building programs, advocacy efforts and sustainable community-driven solutions.

            By partnering with educators, parents, social institutions and local stakeholders, we create protective ecosystems that enable children to learn, thrive and reach their full potential. Our vision is to build a society where every child is valued, protected and empowered to lead a life of dignity, confidence and hope.
            Together with communities, institutions and stakeholders, AFLISH Group strives to create a future where every child is protected, respected and given the opportunity to live a safe, healthy and fulfilling life.
          </p>


        </div>

      </section>
      <section className="cp-initiatives">

        <h2>
          AFLISH CHILD PROTECTION INITIATIVES
        </h2>

        <div className="cp-cards">

          <div className="cp-card purple">

            <div className="cp-icon">
              🛡️
            </div>

            <h3>
              Child Safety Awareness
            </h3>

            <p>
              Conduct awareness programs in schools,
              communities and institutions to prevent
              abuse, violence and exploitation.
            </p>

          </div>

          <div className="cp-card yellow">

            <div className="cp-icon">
              👨‍👩‍👧
            </div>

            <h3>
              Well Family Support
            </h3>

            <p>
              Strengthening families through counselling,
              parenting guidance and community support online and offline.
            </p>

          </div>

          <div className="cp-card blue">

            <div className="cp-icon">
              ❤️
            </div>

            <h3>
              Psycho-Social Wellbeing
            </h3>

            <p>
              Providing emotional support,
              counselling and mental wellbeing
              services for children with family members too.
            </p>

          </div>

          <div className="cp-card orange">

            <div className="cp-icon">
              📚
            </div>

            <h3>
              Education & Protection
            </h3>

            <p>
              Ensuring access to education while
              protecting children from labour,
              exploitation and exclusion in the society of modern era.
            </p>

          </div>

        </div>

      </section>
      {/* COVERAGE SECTION (NEW) */}
      <section className="cp-coverage">
        <div className="cp-coverage-container">
          <h2 className="cp-coverage-title">1.1 Coverage</h2>
          <p className="cp-coverage-sub">
            <strong>30,250+ children</strong> were protected from various forms of harm in 2025-26.
          </p>

          {/* Red Highlight Strip */}
          <div className="cp-coverage-strip">
            We have specific programme interventions on child protection in 11 states reaching out to around three million children.
          </div>
        </div>
      </section>

      <section className="cp-services-intro">

        <h2>KEY CHILD PROTECTION SERVICES</h2>

        <p><b>
          AFLISH Group believes every child deserves a safe,
          nurturing and empowering environment to grow,
          learn and thrive. Through community engagement,
          awareness programs, education support,
          counseling services and emergency interventions,
          we work to protect children from abuse,
          neglect, exploitation and social vulnerability.

          Our child protection initiatives focus on
          strengthening families, promoting children's rights,
          ensuring access to education and healthcare,
          preventing child labour and trafficking,
          and building resilient communities that safeguard
          the future of every child.
        </b></p>

      </section>
      <div className="cp-initiative-container">
        <section className="cp-initiative">

          <div className="cp-initiative-image">

            <img
              src="/images/child-support.jpg"
              alt=""
            />

          </div>

          <div className="cp-initiative-content">

            <h3>
              Child Safety & Community Protection Initiative
            </h3>

            <p>
              AFLISH Group works directly with communities,
              schools, families and local institutions
              to identify risks faced by vulnerable children
              and create protective support systems.

              Our programs focus on preventing abuse,
              child labour, trafficking, neglect and violence
              through awareness campaigns,
              family counseling, educational assistance
              and community participation.
            </p>

            <p>
              We empower children with life skills,
              confidence and access to opportunities,
              helping them build a secure future while ensuring
              their rights, dignity and well-being remain protected.
              AFLISH Group works directly with communities, schools, families and local institutions to identify risks faced by vulnerable children and create protective support systems.
            </p>

            <p>
              Our programs focus on preventing abuse, child labour, trafficking, neglect and violence through awareness campaigns, family counseling, educational assistance and community participation.

              We empower children with life skills, confidence and access to opportunities, helping them build a secure future while ensuring their rights, dignity and well-being remain protected.
            </p>

            {/* <p>
Through strategic partnerships with government bodies, educators and social organizations, we strengthen child protection networks and improve access to essential support services.
</p> */}
            {/* 
    <p>
Our initiatives encourage safe learning environments, emotional well-being and inclusive development, ensuring that every child feels valued, heard and respected.

By engaging parents, caregivers and community leaders, we promote a culture of responsibility and collective action toward safeguarding children from all forms of harm.
</p>

    <p>
We also support early intervention and rehabilitation efforts for children facing difficult circumstances, helping them recover, grow and reintegrate into society with confidence.

Through continuous advocacy, awareness and capacity-building programs, AFLISH Group remains committed to creating lasting positive change in the lives of children and their communities.

Together, we strive to build a future where every child can live free from fear, access equal opportunities and realize their full potential in a safe and nurturing environment.
    </p> */}

          </div>

        </section>
      </div>
      {/* PROGRAMS */}


      <div className="cp-program-system-container">
        <section className="cp-program-system">

          <div className="cp-program-system-content">
            <h3>Strengthening Child Protection Systems</h3>

            <p>
              AFLISH Group works closely with communities,
              schools, local authorities, healthcare workers
              and families to establish strong child protection
              systems that safeguard children from abuse,
              neglect, exploitation and violence.

              We focus on early identification of risks,
              timely intervention and coordinated support
              mechanisms that ensure every child receives
              the care, protection and opportunities they
              deserve.
            </p><br />

            <p>
              Through community-based protection
              networks, we encourage collective responsibility
              towards child safety and well-being.

              Our initiatives include awareness campaigns,
              capacity-building workshops, child rights
              education, stakeholder training programs and
              community engagement activities that strengthen
              protective environments for children.

              AFLISH Group also collaborates with government
              institutions, schools, civil society organizations
              and local leaders to improve reporting mechanisms,
              promote child-friendly practices and ensure that
              vulnerable children have access to essential
              support services.

              By building resilient protection systems and
              empowering communities, we strive to create a
              future where every child can learn, grow.
              {/* and
  thrive in a safe, inclusive and nurturing
  environment. */}
            </p>
          </div>

          <div className="cp-program-system-image">
            <img src="/images/GalleryPageImage25.png" alt="" />
          </div>

        </section>
      </div>

      <div className="cp-program-digital-container">
        <section className="cp-program-digital">

          <div className="cp-program-digital-image">
            <img src="/images/GalleryPageImage26.png" alt="" />
          </div>

          <div className="cp-program-digital-content">

            <h3>Digital & Online Child Safety</h3>

            <p>
              As children increasingly engage online,
              AFLISH Group promotes digital awareness,
              cyber safety education and responsible
              internet practices.

              We empower children and parents with the
              knowledge needed to prevent cyberbullying,
              online exploitation and digital threats.We conduct workshops, awareness sessions and community outreach programs to help young people navigate the digital world safely and confidently.

              By encouraging responsible digital behavior, privacy protection and critical thinking, we equip children with essential skills for the modern age.

              {/* Our efforts also focus on guiding parents, teachers and caregivers to identify online risks and provide timely support when needed.

Through digital literacy initiatives, we strive to create a safer and more secure online environment where children can learn, connect and thrive responsibly.
      */}
            </p>

          </div>

        </section>
      </div>





      <div className="cp-program-community-container">
        <section className="cp-program-community">


          <div className="cp-program-community-content">

            <h3>
              Community Based Child Support
            </h3>

            <p>
              Our community-driven initiatives provide
              counseling, educational assistance,
              emotional support and protection services
              for vulnerable children.

              By working closely with families and local
              stakeholders, we ensure every child receives
              care, dignity and opportunities for a brighter
              future.

              We identify children who are at risk and
              connect them with appropriate support systems
              to address their immediate and long-term needs.

              Through awareness campaigns and community
              engagement programs, we promote child rights,
              safety and overall well-being.

              Our team works to strengthen family and
              community support networks that help create
              protective environments for children.

              We also facilitate access to quality education,
              healthcare services and life-skills development
              programs that empower children to reach their
              full potential.

              Special attention is given to children facing
              poverty, neglect, discrimination or other
              challenging circumstances.

              By fostering resilience, confidence and
              self-esteem, we help children overcome barriers
              and build a strong foundation for the future.

              Through collaboration with schools, community
              leaders and partner organizations, we create
              sustainable solutions that improve children's lives.

              {/* Our goal is to ensure that every child grows up
in a safe, supportive and nurturing environment
where they can learn, thrive and succeed. */}
            </p>
            {/* 
    <p>
Our initiatives encourage safe learning environments, emotional well-being and inclusive development, ensuring that every child feels valued, heard and respected.

By engaging parents, caregivers and community leaders, we promote a culture of responsibility and collective action toward safeguarding children from all forms of harm.
</p>

    <p>
We also support early intervention and rehabilitation efforts for children facing difficult circumstances, helping them recover, grow and reintegrate into society with confidence.

Through continuous advocacy, awareness and capacity-building programs, AFLISH Group remains committed to creating lasting positive change in the lives of children and their communities.

Together, we strive to build a future where every child can live free from fear, access equal opportunities and realize their full potential in a safe and nurturing environment.
    </p> */}

          </div>
          <div className="cp-program-community-image">

            <img
              src="/images/GalleryPageImage27.png"
              alt=""
            />

          </div>


        </section>
      </div>





      <div className="cp-program-preventing-container">
        <section className="cp-program-preventing">

          <div className="cp-program-preventing-image">
            <img src="/images/GalleryPageImage29.png" alt="" />
          </div>

          <div className="cp-program-preventing-content">

            <h3>Preventing Child Marriage</h3>

            <p>
              AFLISH Group is committed to safeguarding
              the rights, dignity and future of children
              by addressing issues that threaten their
              well-being, including child marriage, child
              labour, abuse, neglect and exploitation.
              Through community-based interventions,
              awareness campaigns and stakeholder engagement
              , we work to create safe and supportive
              environments where every child can grow,
              learn and thrive.
            </p>
            <p>
              In collaboration with local communities,
              educational institutions, government bodies
              and grassroots organizations, AFLISH Group
              promotes child rights awareness and
              strengthens child protection mechanisms at
              the community level. Our initiatives focus
              on identifying vulnerable children,
              preventing harmful practices and ensuring
              timely support for those at risk.

            </p>
            <p>
              Through capacity-building programs, life-skills education, adolescent empowerment initiatives and community sensitization activities, we encourage families and community leaders to prioritize education, health and equal opportunities for children, especially girls.

              {/* Our interventions have reached thousands of children, parents, teachers and community members across various regions, helping reduce vulnerabilities and strengthen protective networks. By fostering collective responsibility and community participation, AFLISH Group continues to contribute towards building child-friendly communities where children are protected from violence, discrimination and harmful social practices.

We remain dedicated to empowering children with knowledge, confidence and opportunities, ensuring that every child enjoys a safe childhood and a brighter future.
      */}
            </p>

          </div>

        </section>
      </div>






      <div className="cp-program-promoting-container">
        <section className="cp-program-promoting">

          <div className="cp-program-promoting-content">
            <h3>Promoting Psycho-Social Wellbeing and Child Protection</h3>

            <p>
              AFLISH Group is dedicated to promoting the psycho-social well-being, safety and holistic development of children, particularly those facing vulnerability, distress and social challenges. We recognize that children require not only physical protection but also emotional support, guidance and nurturing environments to reach their full potential.

              Through community outreach programmes, awareness campaigns and child-focused interventions, AFLISH Group works to strengthen the emotional resilience and mental well-being of children. We engage with parents, teachers, caregivers and community leaders to create supportive ecosystems that protect children from neglect, abuse, exploitation and other forms of harm.

              To promote positive mental health, AFLISH Group conducts counselling sessions, life-skills education programmes, child-friendly workshops and awareness initiatives that help children develop confidence, emotional strength and healthy coping mechanisms. We also provide guidance and support to families to ensure children receive care and protection within their homes and communities.

              Our child protection initiatives focus on early identification of risks, community-based support systems and timely referral mechanisms for children requiring special cares.
              {/* Through collaboration with local stakeholders and 
institutions, we strive to ensure that vulnerable 
children receive appropriate support services and
 protection. */}

              {/* By fostering safe spaces, promoting emotional well-being and strengthening community-based child protection systems, AFLISH Group remains committed to creating an environment where every child can learn, grow and thrive with dignity, security and hope for a brighter future. */}

            </p>
          </div>

          <div className="cp-program-promoting-image">
            <img src="/images/GalleryPageImage30.png" alt="" />
          </div>

        </section>
      </div>

      <section className="cp-uncrc-section-container">
      <div className="cp-uncrc-section">

        <h2>
          PROMOTING PSYCHO-SOCIAL WELLBEING OF CHILDREN
        </h2>

        <p>
          AFLISH Group is committed to promoting the emotional,
          psychological and social well-being of children,
          especially those facing vulnerability, distress,
          exclusion and challenging life circumstances.
          We believe that every child deserves a safe,
          supportive and nurturing environment where they
          can grow with confidence, dignity and hope.
        </p>

        <h3>
          WHY PSYCHO-SOCIAL WELLBEING MATTERS?
        </h3>

        <p>
          Emotional health plays a vital role in a child's
          overall development. Children experiencing stress,
          neglect, violence, discrimination or social
          isolation often face challenges that affect
          their learning, relationships and future growth.
          AFLISH Group works to strengthen resilience,
          confidence and emotional stability among children
          through community-based support systems.
        </p>

        <h3>
          AFLISH GROUP AND CHILD PROTECTION
        </h3>

        <p>
          Through counselling support, awareness campaigns,
          life-skills education, child-friendly workshops
          and community engagement programmes, AFLISH Group
          promotes positive mental health and child
          protection. We work closely with families,
          teachers, caregivers and local stakeholders to
          create safe spaces where children feel heard,
          respected and protected.

          Our initiatives help identify vulnerable children,
          provide timely support and connect families with
          appropriate services whenever required. By
          strengthening child protection systems and
          promoting psycho-social wellbeing, AFLISH Group
          strives to ensure that every child has the
          opportunity to learn, thrive and achieve their
          full potential.
        </p>

      </div>
<div className="cp-child-champions">

    <h2>CHILD CHAMPIONS</h2>

    <p>
        At AFLISH Group, children remain at the center of
        everything we do. We believe every child possesses
        unique strengths, talents and leadership potential
        that can contribute positively to their families,
        schools and communities.
    </p>

    <p>
        Through our child participation initiatives,
        leadership programmes and awareness campaigns,
        we encourage children to express their views,
        build confidence and actively engage in issues
        that affect their lives. We create opportunities
        for children to become advocates for education,
        health, safety, equality and community development.
    </p>

    <p>
        AFLISH Group empowers young leaders through
        life-skills education, capacity-building sessions,
        mentorship and community engagement activities.
        By nurturing responsible and informed child
        champions, we help build a future where children
        become agents of positive social change and
        inspire others to create safer, healthier and
        more inclusive communities.
    </p>

</div>
</section>

<section className="aflish-youth-leaders">

  <h2>EMPOWERING YOUNG CHANGE MAKERS</h2>

  <div className="aflish-youth-grid">

    <div className="aflish-youth-card card1">
      <img src="/images/GalleryPageImage33.png" alt="" />

      <h3>Aarav Kumar</h3>

      <ul>
        <li>Youth Education Ambassador</li>
        <li>Promotes school enrolment drives</li>
        <li>Supports awareness campaigns</li>
        <li>Advocates for children's rights</li>
      </ul>
    </div>

    <div className="aflish-youth-card card2">
      <img src="/images/GalleryPageImage32.png" alt="" />

      <h3>Priya Sharma</h3>

      <ul>
        <li>Community Child Protection Volunteer</li>
        <li>Leads awareness sessions</li>
        <li>Encourages girls' education</li>
        <li>Promotes safe communities</li>
      </ul>
    </div>

    <div className="aflish-youth-card card3">
      <img src="/images/GalleryPageImage35.png" alt="" />

      <h3>Rohan Verma</h3>

      <ul>
        <li>Young Climate Advocate</li>
        <li>Participates in resilience programmes</li>
        <li>Supports environmental awareness</li>
        <li>Inspires youth leadership</li>
      </ul>
    </div>
<div className="aflish-youth-card card4">
  <img src="/images/GalleryPageImage36.png" alt="" />

  <h3>Ananya Singh</h3>

  <ul>
    <li>Girls Education Champion</li>
    <li>Encourages school attendance</li>
    <li>Supports gender equality campaigns</li>
    <li>Promotes leadership among girls</li>
  </ul>
</div>

<div className="aflish-youth-card card5">
  <img src="/images/GalleryPageImage37.png" alt="" />

  <h3>Vikram Patel</h3>

  <ul>
    <li>Community Awareness Volunteer</li>
    <li>Conducts child safety workshops</li>
    <li>Supports family engagement programmes</li>
    <li>Advocates child protection rights</li>
  </ul>
</div>

<div className="aflish-youth-card card6">
  <img src="/images/GalleryPageImage43.png" alt="" />

  <h3>Sana Khan</h3>

  <ul>
    <li>Youth Development Leader</li>
    <li>Promotes life-skills education</li>
    <li>Supports child participation initiatives</li>
    <li>Inspires positive social change</li>
  </ul>
</div>
  </div>

</section>
<section className="aflish-impact-section">

    <h2>OUR APPROACH & IMPACT</h2>

    <p>
        AFLISH Group believes that children and young people
        are not only beneficiaries of development but also
        powerful agents of positive change. Through our
        child participation programmes, leadership
        initiatives and community engagement activities,
        we empower children to understand their rights,
        build confidence and actively contribute to the
        development of their communities.
    </p>

    <p>
        We provide children with opportunities to express
        their views on education, health, safety, child
        protection, environmental sustainability, digital
        safety and social inclusion. Through awareness
        campaigns, workshops, mentoring programmes and
        community platforms, AFLISH Group helps young
        leaders strengthen their voices and become
        responsible changemakers.
    </p>

    <p>
        Our child champions and youth leaders actively
        participate in community outreach activities,
        awareness drives and social initiatives that
        benefit children and families. Their leadership
        inspires peers, promotes positive behaviour and
        strengthens local efforts towards child rights
        and community development.
    </p>

    <div className="aflish-impact-stats">

        <div className="aflish-stat-card">
            <h3>1500+</h3>
            <span>Child Champions Mentored</span>
        </div>

        <div className="aflish-stat-card">
            <h3>2000+</h3>
            <span>Community Engagement Activities</span>
        </div>

        <div className="aflish-stat-card">
            <h3>12000+</h3>
            <span>Children & Families Reached</span>
        </div>

        <div className="aflish-stat-card">
            <h3>100+</h3>
            <span>Awareness Campaigns Conducted</span>
        </div>

    </div>

</section>
<section className="aflish-child-leadership">

  <div className="aflish-leadership-card partnership-card">

    <h2>PARTNERING WITH CHILDREN</h2>

    <p>
      AFLISH Group believes that children are not merely beneficiaries
      of development programmes but active participants and leaders
      of positive social change. Through child participation platforms,
      youth forums, awareness campaigns and community engagement
      initiatives, we encourage children to voice their opinions,
      share their experiences and contribute to decisions affecting
      their lives and communities.
    </p>

    {/* <p>
      We work closely with child groups, schools and community networks
      to strengthen leadership skills, confidence and civic engagement
      among young people. By creating safe and inclusive spaces,
      AFLISH Group empowers children to become advocates for education,
      child protection, gender equality, health, environmental
      sustainability and social justice.
    </p> */}

  </div>


  <div className="aflish-leadership-card dream-card">

    <h2>THE YOUNG LEADERS ACCELERATOR PROGRAMME</h2>

    <p>
      AFLISH Group’s Young Leaders Accelerator Programme focuses on
      nurturing promising young changemakers and supporting them in
      transforming ideas into meaningful community action. Selected
      children and youth receive mentorship, leadership development
      training, communication skills support and opportunities to
      design child-led initiatives addressing local challenges.
    </p>

    {/* <p>
      Through innovative projects, awareness drives and community
      outreach activities, young leaders learn to identify social
      issues, develop solutions and inspire positive change.
      The programme strengthens confidence, responsibility and
      leadership capabilities while encouraging children to become
      active contributors to safer, healthier and more inclusive
      communities.
    </p> */}

  </div>

</section>

{/* AFLISH SUCCESS / ACHIEVEMENTS SECTION */}
<section className="cp-success-section">
  <div className="cp-success-container">
    <h2>
      WE HAVE ACHIEVED CONSIDERABLE SUCCESS EVER SINCE WE EMBARKED ON THE CHILD CHAMPION JOURNEY
    </h2>

    <ul className="cp-success-list">
      <li>Aflish Group was honored for pioneering child protection initiatives across multiple states.</li>
      <li>Our child safety campaigns served as a benchmark for community-led development.</li>
      <li>Aflish Youth Ambassadors represented child rights at national and regional leadership forums.</li>
      <li>Successfully formed active Child Protection Committees in over 50+ vulnerable blocks.</li>
      <li>Empowered thousands of young minds to stand against social exploitation and child labor.</li>
    </ul>
  </div>
</section>

{/* AFLISH PARTNERS LOGO SLIDER SECTION */}
<section className="cp-partners-section">
  <div className="cp-partners-container">
    <h2>
      SUPPORT AND COLLABORATION OF OUR PARTNERS HAVE BROUGHT CHILD CHAMPIONS CAMPAIGN ITS DUE SUCCESS.
    </h2>
    
    <div className="cp-slider-wrapper">

  <SliderComponent {...settings}>

    <div className="cp-logo-item">
    <img src="/images/GalleryPageImage38.png" alt="" />
  </div>

  <div className="cp-logo-item">
    <img src="/images/GalleryPageImage39.png" alt="" />
  </div>

  <div className="cp-logo-item white-card">
    <img src="/images/GalleryPageImage40.png" alt="" />
  </div>
  <div className="cp-logo-item">
    <img src="/images/GalleryPageImage41.png" alt="" />
  </div>

  <div className="cp-logo-item">
    <img src="/images/GalleryPageImage42.png" alt="" />
  </div>

  <div className="cp-logo-item">
    <img src="/images/GalleryPageImage39.png" alt="" />
  </div>
  </SliderComponent>

</div>

    {/* Navigation Indicator Dots */}
    {/* <div className="cp-slider-dots"> */}
      {/* <span className="cp-dot"></span>
      <span className="cp-dot"></span>
      <span className="cp-dot"></span>
      <span className="cp-dot active"></span>
      <span className="cp-dot"></span>
      <span className="cp-dot"></span> */}
    {/* </div> */}
  </div>
</section>
{/* AFLISH DO YOUR PART / CTA SECTION */}
<div className="cp-action-block-section-container">
<section className="cp-action-block-section">
  <div className="cp-action-block-container">
    <h2>
      DO YOUR PART, TAKE A STAND AND SHOW YOUR SUPPORT TO THE CHILD CHAMPIONS.
    </h2>
    
    {/* Center Icon matching original look */}
    <div className="cp-action-icon">
      🤝
    </div>
    
    <p className="cp-action-subtext">
      Encourage change by supporting this campaign.
    </p>
    
    {/* Action Button */}
    <Link to="/donation">
  <button className="cp-action-btn">
    JOIN US NOW
  </button>
</Link>
  </div>
</section>
</div>
      {/* IMPACT */}

      {/* <section className="cp-impact">

        <div className="impact-card">
          <h3>5000+</h3>
          <p>Children Reached</p>
        </div>

        <div className="impact-card">
          <h3>200+</h3>
          <p>Awareness Sessions</p>
        </div>

        <div className="impact-card">
          <h3>100+</h3>
          <p>Community Programs</p>
        </div>

        <div className="impact-card">
          <h3>50+</h3>
          <p>Partner Volunteers</p>
        </div>

      </section> */}

      {/* CTA */}

      {/* <section className="cp-cta">

        <h2>
          Together We Can Protect Childhood
        </h2>

        <p>
          Join us in creating a safer and brighter
          future for every child.
        </p>

        <button>
          Support A Child
        </button>

      </section> */}

      <Footer />
    </>
  );
};

export default ChildProtection;