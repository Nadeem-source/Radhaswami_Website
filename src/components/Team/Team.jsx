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
imgWidth:"380px",
  imgHeight:"400px",
  imgBottom:"-19px",

  bgWidth:"400px",
  bgHeight:"210px",
  bgLeft:"-10px",
  bgbottom:"-10px",
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
imgWidth:"400px",
  imgHeight:"500px",
  imgBottom:"-59px",

  bgWidth:"400px",
  bgHeight:"210px",
  bgLeft:"-10px",
  bgbackground:"#c7c4c0",
  bgbottom:"-10px",
description1:
"Mr. Mohd Shahnawaz serves as Chief Executive Officer of AFLISH Group and oversees organizational operations, strategic execution and institutional development. He works closely with leadership teams to ensure excellence across programs and initiatives.",

description2:
"His focus remains on innovation, community empowerment and sustainable impact. Through effective leadership and collaboration, he supports projects that improve education, healthcare, livelihood opportunities and social welfare outcomes.He is dedicated to enhancing organizational efficiency through strategic planning, innovation and effective resource management. His leadership style emphasizes teamwork, transparency and continuous improvement across all operational areas. By fostering strong partnerships with stakeholders and communities, he helps drive impactful initiatives that create lasting social value. His commitment to excellence continues to strengthen AFLISH Group's mission of sustainable growth and community development."

},

{
id:3,
name:"MS. NUZHAT NAQVI",
role:"Director",
image:"/images/team/nuzhat1.png",
imgWidth:"570px",
  imgHeight:"470px",
  imgBottom:"-54px",

  bgWidth:"400px",
  bgHeight:"230px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Ms. Nuzhat Naqvi serves as Director of AFLISH Group and contributes significantly to organizational governance, planning and development activities. She actively supports initiatives that promote inclusive growth and community welfare.",

description2:
"Her work focuses on strengthening education programs, women empowerment initiatives and healthcare awareness campaigns. She remains dedicated to creating opportunities that improve the quality of life for underserved communities.She plays an important role in guiding organizational strategies that foster social inclusion, sustainable development and community participation. Her leadership encourages collaboration, innovation and effective program implementation across various initiatives. Through her dedication and compassionate approach, she helps strengthen outreach efforts that benefit women, children and marginalized groups. She remains committed to advancing AFLISH Group's vision of creating positive and lasting social impact.Her continuous efforts and visionary leadership contribute significantly to strengthening AFLISH Group's mission."
},

{
id:4,
name:"MR. MOHD KAIF",
role:"Director",
image:"/images/team/kaif2.png",

imgWidth:"585px",
  imgHeight:"420px",
  imgBottom:"-25px",

  bgWidth:"400px",
  bgHeight:"230px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Mohd Kaif serves as Director and plays an important role in strategic planning, administration and stakeholder engagement. He helps guide organizational initiatives with a strong focus on accountability and impact.",

description2:
"Through collaboration with communities, volunteers and partners, he supports programs that promote education, healthcare access and sustainable development. His efforts contribute to the successful implementation of social welfare projects.He is committed to fostering strong relationships with stakeholders, partners and community members to maximize the impact of organizational initiatives. His leadership supports efficient project management, transparent decision-making and sustainable growth. Through his dedication and proactive approach, he helps strengthen programs that create meaningful social and developmental outcomes for communities.He remains dedicated to advancing AFLISH Group's vision by driving initiatives that foster positive social change and long-term community empowerment."
},

{
id:5,
name:"MR. MD DANISH",
role:"Delhi Incharge",
image:"/images/team/danish1.png",
imgWidth:"600px",
  imgHeight:"520px",
  imgBottom:"-70px",

  bgWidth:"400px",
  bgHeight:"223px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Md Danish serves as Delhi Incharge and oversees field operations, program coordination and community outreach activities across the region. He works closely with local teams to ensure smooth execution of projects.",

description2:
"His responsibilities include stakeholder engagement, volunteer management and monitoring ongoing initiatives. He remains committed to strengthening AFLISH Group's presence and impact within communities.He plays a vital role in building strong connections with local communities, government bodies and partner organizations to enhance the effectiveness of various programs. His leadership ensures that projects are implemented efficiently and reach the intended beneficiaries on time. He actively supports awareness campaigns, volunteer engagement and capacity-building initiatives across the region. Through his dedication and hands-on approach, he helps strengthen grassroots participation and community development efforts. His commitment to service continues to contribute significantly to AFLISH Group's mission of creating sustainable social impact."
},

{
id:6,
name:"MS. SNEHA",
role:"Office Management Officer",
image:"/images/team/sneha2.png",
imgWidth:"580px",
  imgHeight:"430px",
  imgBottom:"-30px",

  bgWidth:"400px",
  bgHeight:"220px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Ms. Sneha serves as Office Management Officer and is responsible for administrative coordination, internal communication and operational support. She helps maintain organizational efficiency through structured management practices.She is committed to maintaining a productive and well-organized work environment that supports the organization's goals and objectives. Her expertise in office administration, documentation and coordination helps ensure the smooth functioning of daily operations. She works closely with various departments to facilitate effective communication and timely execution of tasks. Through her attention to detail and problem-solving abilities, she contributes to improved operational efficiency and workflow management. Her dedication, professionalism and positive attitude make her an integral part of AFLISH Group's continued growth and success.",

description2:
"Her dedication to professionalism and teamwork ensures smooth workflow across departments. She plays a vital role in supporting day-to-day activities and organizational growth."
},


{
id:7,
name:"MS. AQSA",
role:"Office Assistant",
image:"/images/team/AQSA1.png",
imgWidth:"400px",
  imgHeight:"425px",
  imgBottom:"-10px",

  bgWidth:"400px",
  bgHeight:"240px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Ms. Aqsa works as Office Assistant and supports administrative functions, documentation processes and coordination activities within the organization. She contributes to maintaining effective operational systems.",

description2:
"Through her commitment and attention to detail, she assists various departments in achieving organizational objectives. Her support helps ensure timely execution of daily responsibilities and programs.She plays an important role in supporting office operations by assisting with record management, communication and administrative coordination. Her organized approach helps ensure that daily tasks are completed efficiently and in a timely manner. She works closely with team members to maintain smooth workflow and effective collaboration across departments. Her dedication to accuracy and professionalism contributes to the overall productivity of the organization. Through her consistent efforts and willingness to assist, she helps strengthen AFLISH Group's operational effectiveness and service delivery."
},

{
id:8,
name:"MR. MOHD AAMIR",
role:"Media In-Charge",
image:"/images/team/aMIR1.png",
imgWidth:"400px",
  imgHeight:"440px",
  imgBottom:"-30px",

  bgWidth:"400px",
  bgHeight:"245px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Mohd Aamir serves as Media In-Charge and manages public relations, digital communications and branding initiatives for AFLISH Group. He works to enhance awareness about the organization's activities and achievements.",

description2:
"His expertise in media outreach and content development helps strengthen public engagement and visibility. He actively supports campaigns that promote social impact and community participation.He is responsible for developing effective communication strategies that strengthen the organization's public image and outreach efforts. Through creative content creation and digital engagement initiatives, he helps connect AFLISH Group with a wider audience. His expertise in media management supports awareness campaigns, event promotions and community engagement activities. He works closely with various teams to ensure consistent branding and impactful messaging across all platforms. His dedication to innovation and communication continues to enhance the visibility and influence of AFLISH Group's social initiatives."
},

{
id:9,
name:"MR. MOHD GULZAR",
role:"District Coordinator (Moradabad)",
image:"/images/team/gulzar1.png",
imgWidth:"100%",
  imgHeight:"440px",
  imgBottom:"-40px",

  bgWidth:"400px",
  bgHeight:"200px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Mohd Gulzar serves as District Coordinator for Moradabad and supervises community development programs within the district. He works closely with local stakeholders to address social and developmental challenges.",

description2:
"His leadership supports effective implementation of welfare initiatives, volunteer engagement and beneficiary outreach activities. He remains committed to creating meaningful and lasting impact.He plays a key role in coordinating local initiatives and ensuring that development programs effectively address the needs of the community. His ability to engage with stakeholders, volunteers and beneficiaries helps strengthen the impact of various welfare activities. He actively supports awareness campaigns, educational programs and social development projects across the district. Through his dedication and leadership, he promotes community participation and sustainable growth. His continuous efforts contribute significantly to improving the lives of underserved individuals and families within the region."
},

{
id:10,
name:"MR. UMAIR AHMAD SHAMSI",
role:"District Coordinator (Rampur)",
image:"/images/team/Umair2.png",
imgWidth:"520px",
  imgHeight:"650px",
  imgBottom:"-161px",

  bgWidth:"400px",
  bgHeight:"190px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Umair Ahmad Shamsi serves as District Coordinator for Rampur and oversees local program implementation and community engagement efforts. He actively participates in planning and monitoring district-level initiatives.",

description2:
"His work focuses on improving access to educational, social and welfare opportunities for local communities. He is dedicated to strengthening grassroots participation and sustainable development.He works closely with community members, local institutions and volunteers to ensure the successful execution of development programs across the district. His leadership helps strengthen coordination, monitoring and outreach activities that benefit underserved communities. He actively supports initiatives related to education, healthcare awareness and social welfare. Through his commitment and proactive approach, he encourages greater community participation and local empowerment. His efforts contribute to building sustainable solutions that promote long-term social and economic progress within the region."
},

{
id:11,
name:"MR. MOHD FAIZ KHAN",
role:"District Coordinator (Bareilly)",
image:"/images/team/faiz2.png",
imgWidth:"570px",
  imgHeight:"420px",
  imgBottom:"-30px",

  bgWidth:"400px",
  bgHeight:"198px",
  bgLeft:"-10px",
  bgbackground:"white",
  bgbottom:"-10px",
description1:
"Mr. Mohd Faiz Khan serves as District Coordinator for Bareilly and is responsible for coordinating field activities, volunteer networks and community programs. He supports the successful execution of development initiatives throughout the district.",

description2:
"Through active engagement with local communities and stakeholders, he promotes awareness, participation and social progress. His efforts contribute to the achievement of AFLISH Group's mission and vision.He plays a crucial role in strengthening coordination between volunteers, community leaders and local stakeholders to ensure effective program delivery. His dedication to community service helps expand the reach and impact of various welfare and development initiatives. He actively supports awareness campaigns, educational activities and social empowerment programs across the district. Through his leadership and commitment, he encourages active community participation and sustainable growth. His continuous efforts contribute to creating positive social change and improving the quality of life for individuals and families in the region."
}
]
const Team = () => {
    return (
        <>
            <Navbar
scrollValue={60}
alwaysTop={true}

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

  <div className="breadcrumb3-container">

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