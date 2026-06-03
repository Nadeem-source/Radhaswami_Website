// src/components/Team/Team.jsx

import React from 'react'
import './Team.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";


const allMembers = [
{
id:1,
name:"MR. ISHHAQUE NAQVI",
role:"Chairman",
image:"/images/team/sir1.png",
imgWidth:"400px",
  imgHeight:"400px",
  imgBottom:"0px",

  bgWidth:"430px",
  bgHeight:"210px",
  bgLeft:"-30px",
  bgbottom:"0px",
  bgbackground:"#c7c4c0",
description1:
"Mr. Ishhaque Naqvi serves as the Chairman of AFLISH Group and provides visionary leadership for the organization's long-term development. He plays a key role in shaping strategic goals, strengthening governance practices and promoting sustainable growth across all initiatives.",

description2:
"With extensive experience in business leadership and social development, he is committed to empowering communities through education, healthcare, skill development and humanitarian service. His dedication continues to inspire innovation, transparency and positive social transformation.He actively promotes a culture of integrity, accountability and excellence throughout the organization. Under his guidance, AFLISH Group has expanded its outreach and strengthened its commitment to sustainable community development. His strategic vision encourages innovation, collaboration and long-term social impact across diverse sectors. Through his leadership, the organization continues to build meaningful partnerships and create opportunities for positive change."

},

{
id:2,
name:"MR. MOHD SHAHNAWAZ",
role:"Chief Executive Officer",
image:"/images/team/shehnawaz1.png",
imgWidth:"340px",
  imgHeight:"500px",
  imgBottom:"-40px",

  bgWidth:"410px",
  bgHeight:"190px",
  bgLeft:"-1px",
  bgbackground:"#c7c4c0",
  bgbottom:"40px",
description1:
"Mr. Mohd Shahnawaz serves as Chief Executive Officer of AFLISH Group and oversees organizational operations, strategic execution and institutional development. He works closely with leadership teams to ensure excellence across programs and initiatives.",

description2:
"His focus remains on innovation, community empowerment and sustainable impact. Through effective leadership and collaboration, he supports projects that improve education, healthcare, livelihood opportunities and social welfare outcomes."
},

{
id:3,
name:"MS. NUZHAT NAQVI",
role:"Director",
image:"/images/team/nuzhat1.png",
imgWidth:"570px",
  imgHeight:"470px",
  imgBottom:"-28px",

  bgWidth:"290px",
  bgHeight:"195px",
  bgLeft:"60px",
  bgbackground:"white",
  bgbottom:"50px",
description1:
"Ms. Nuzhat Naqvi serves as Director of AFLISH Group and contributes significantly to organizational governance, planning and development activities. She actively supports initiatives that promote inclusive growth and community welfare.",

description2:
"Her work focuses on strengthening education programs, women empowerment initiatives and healthcare awareness campaigns. She remains dedicated to creating opportunities that improve the quality of life for underserved communities."
},

{
id:4,
name:"MR. MOHD KAIF",
role:"Director",
image:"/images/team/kaif2.png",

imgWidth:"585px",
  imgHeight:"420px",
  imgBottom:"0px",

  bgWidth:"350px",
  bgHeight:"194px",
  bgLeft:"40px",
  bgbackground:"white",
  bgbottom:"50px",
description1:
"Mr. Mohd Kaif serves as Director and plays an important role in strategic planning, administration and stakeholder engagement. He helps guide organizational initiatives with a strong focus on accountability and impact.",

description2:
"Through collaboration with communities, volunteers and partners, he supports programs that promote education, healthcare access and sustainable development. His efforts contribute to the successful implementation of social welfare projects."
},

{
id:5,
name:"MR. MD DANISH",
role:"Delhi Incharge",
image:"/images/team/danish1.png",
imgWidth:"570px",
  imgHeight:"520px",
  imgBottom:"-30px",

  bgWidth:"350px",
  bgHeight:"233px",
  bgLeft:"0",
  bgbackground:"white",
  bgbottom:"41px",
description1:
"Mr. Md Danish serves as Delhi Incharge and oversees field operations, program coordination and community outreach activities across the region. He works closely with local teams to ensure smooth execution of projects.",

description2:
"His responsibilities include stakeholder engagement, volunteer management and monitoring ongoing initiatives. He remains committed to strengthening AFLISH Group's presence and impact within communities."
},

{
id:6,
name:"MS. SNEHA",
role:"Office Management Officer",
image:"/images/team/sneha2.png",
imgWidth:"840px",
  imgHeight:"330px",
  imgBottom:"70px",

  bgWidth:"320px",
  bgHeight:"190px",
  bgLeft:"40px",
  bgbackground:"white",
  bgbottom:"70px",
description1:
"Ms. Sneha serves as Office Management Officer and is responsible for administrative coordination, internal communication and operational support. She helps maintain organizational efficiency through structured management practices.",

description2:
"Her dedication to professionalism and teamwork ensures smooth workflow across departments. She plays a vital role in supporting day-to-day activities and organizational growth."
},


{
id:7,
name:"MS. AQSA",
role:"Office Assistant",
image:"/images/team/AQSA1.png",
imgWidth:"100%",
  imgHeight:"325px",
  imgBottom:"95px",

  bgWidth:"220px",
  bgHeight:"180px",
  bgLeft:"80px",
  bgbackground:"white",
  bgbottom:"95px",
description1:
"Ms. Aqsa works as Office Assistant and supports administrative functions, documentation processes and coordination activities within the organization. She contributes to maintaining effective operational systems.",

description2:
"Through her commitment and attention to detail, she assists various departments in achieving organizational objectives. Her support helps ensure timely execution of daily responsibilities and programs."
},

{
id:8,
name:"MR. MOHD AAMIR",
role:"Media In-Charge",
image:"/images/team/aMIR1.png",
imgWidth:"400px",
  imgHeight:"440px",
  imgBottom:"0px",

  bgWidth:"330px",
  bgHeight:"194px",
  bgLeft:"30px",
  bgbackground:"white",
  bgbottom:"70px",
description1:
"Mr. Mohd Aamir serves as Media In-Charge and manages public relations, digital communications and branding initiatives for AFLISH Group. He works to enhance awareness about the organization's activities and achievements.",

description2:
"His expertise in media outreach and content development helps strengthen public engagement and visibility. He actively supports campaigns that promote social impact and community participation."
},

{
id:9,
name:"MR. MOHD GULZAR",
role:"District Coordinator (Moradabad)",
image:"/images/team/gulzar1.png",
imgWidth:"100%",
  imgHeight:"440px",
  imgBottom:"0px",

  bgWidth:"380px",
  bgHeight:"175px",
  bgLeft:"1px",
  bgbackground:"white",
  bgbottom:"70px",
description1:
"Mr. Mohd Gulzar serves as District Coordinator for Moradabad and supervises community development programs within the district. He works closely with local stakeholders to address social and developmental challenges.",

description2:
"His leadership supports effective implementation of welfare initiatives, volunteer engagement and beneficiary outreach activities. He remains committed to creating meaningful and lasting impact."
},

{
id:10,
name:"MR. UMAIR AHMAD SHAMSI",
role:"District Coordinator (Rampur)",
image:"/images/team/Umair2.png",
imgWidth:"460px",
  imgHeight:"320px",
  imgBottom:"65px",

  bgWidth:"380px",
  bgHeight:"170px",
  bgLeft:"-20px",
  bgbackground:"white",
  bgbottom:"72px",
description1:
"Mr. Umair Ahmad Shamsi serves as District Coordinator for Rampur and oversees local program implementation and community engagement efforts. He actively participates in planning and monitoring district-level initiatives.",

description2:
"His work focuses on improving access to educational, social and welfare opportunities for local communities. He is dedicated to strengthening grassroots participation and sustainable development."
},

{
id:11,
name:"MR. MOHD FAIZ KHAN",
role:"District Coordinator (Bareilly)",
image:"/images/team/faiz2.png",
imgWidth:"450px",
  imgHeight:"420px",
  imgBottom:"10px",

  bgWidth:"390px",
  bgHeight:"198px",
  bgLeft:"-20px",
  bgbackground:"white",
  bgbottom:"70px",
description1:
"Mr. Mohd Faiz Khan serves as District Coordinator for Bareilly and is responsible for coordinating field activities, volunteer networks and community programs. He supports the successful execution of development initiatives throughout the district.",

description2:
"Through active engagement with local communities and stakeholders, he promotes awareness, participation and social progress. His efforts contribute to the achievement of AFLISH Group's mission and vision."
}
]
const Team = () => {
    return (
        <>
            <Navbar
scrollValue={60}
alwaysTop={true}
navbarClass="navbar-light"
/>
<section className="team-hero">

    <div className="team-hero-overlay"></div>

    <div className="team-hero-content">

        <h1>
            Our Leadership Team
        </h1>

        <p>
            Dedicated professionals driving innovation,
            social impact and community development
            across India.
        </p>

    </div>

</section>
            <section className="team-section">  
                <div className="team-section-container">
                    <section className="breadcrumb-section">

  <div className="breadcrumb-container">

    <Link to="/" className="breadcrumb-home">
      🏠
    </Link>

    <span className="breadcrumb-arrow">&gt;</span>

    <span className="breadcrumb-current">
      Team
    </span>

  </div>

</section>
{/* <section className="team-intro">

  <div className="team-intro-container">

    <h2>OUR LEADERSHIP TEAM</h2>

    <p>
      AFLISH Group's leadership team brings together experienced
      professionals committed to social welfare, education,
      healthcare, community development and humanitarian service.
    </p>

    <p>
      Through strategic planning, innovation and dedicated service,
      our team works to empower communities and create sustainable
      social impact across India.
    </p>

  </div>

</section> */}
                    {/* TEAM GRID */}

                    <section className="team-members-section">

  <div className="team-members-container">

    <h2>Meet Our Team</h2>

    <p>
      Dedicated professionals working together to create
      positive change and social transformation.
    </p>

  </div>

  {allMembers.map((member) => (

    <div
  className={`team-member-card card-${member.id}`}
  key={member.id}
>

      <div className="member-image">

  <div
    className="member-image-bg"
    style={{
      width: member.bgWidth,
      height: member.bgHeight,
      left: member.bgLeft,
      bottom: member.bgbottom,
      background:member.bgbackground
    }}
  ></div>

  <img
    src={member.image}
    alt={member.name}
    style={{
      width: member.imgWidth,
      height: member.imgHeight,
      bottom: member.imgBottom
    }}
  />

</div>

      <div className="member-details">

        <div className="member-badge">
          {member.role}
        </div>

        <h2>{member.name}</h2>

        <h4>
          AFLISH GROUP OF COMPANIES
        </h4>

        <p>
          {member.description1}
        </p>

        <p>
          {member.description2}
        </p>

      </div>

    </div>

  ))}

</section>                        

                    

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Team