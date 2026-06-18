import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({
  scrollValue = 650,
  hideMarquee,
  alwaysTop = false,
  navbarClass
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false);
const [aboutOpen,setAboutOpen] = useState(false);
const [serviceOpen,setServiceOpen] = useState(false);
const [partnerOpen,setPartnerOpen] = useState(false);
const [homeOpen,setHomeOpen] = useState(false);
const [overviewOpen,setOverviewOpen] = useState(false);
const [missionAndVisionOpen,setMissionAndVisionOpen] = useState(false);
const [educationOpen,setEducationOpen] = useState(false);
const [healthAndNutritionOpen,setHealthAndNutritionOpen] = useState(false);
const [economicWellBeingOpen,setEconomicWellBeingOpen] = useState(false);
const [childProtectionOpen,setChildProtectionOpen] = useState(false);
const [galleryOpen,setGalleryOpen] = useState(false);
const [schemeOpen,setSchemeOpen] = useState(false);
const [teamOpen,setTeamOpen] = useState(false);
const [contactOpen,setContactOpen] = useState(false);
const [donationOpen,setDonationOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > scrollValue) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [scrollValue])

  const navigate = useNavigate()

  return (

    <nav
      className={`
navbar ${navbarClass || ""}
${scrolled ? 'active-navbar' : ''}
${hideMarquee ? 'navbar-top' : ''}
${alwaysTop ? 'navbar-top' : ''}
`}
    >
      {/* LOGO */}

      <div className="logo">
        <img src="/images/LOGO.jpeg" alt="" />
        <div className="logo-text">

          <h2>AFLISH GROUP</h2>

          <span className="typing-text">
            Empowering Humanity
          </span>

        </div>
      </div>

      {/* NAV LINKS */}

      <ul className="nav-links desktop-links">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Home
          </NavLink>
        </li>

        <li className="dropdown">

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>
          <ul className="dropdown-menu">

            <li>
              <NavLink to="/overview">
                Overview
              </NavLink>
            </li>

            <li>
              <NavLink to="/mission-vision">
                Mission & Vision
              </NavLink>
            </li>

            {/* <li>
              <NavLink to="/governing-council">
                Governing Council
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink to="/financials">
                Financials
              </NavLink>
            </li> */}
            {/* 
  <li>
    <NavLink to="/certificates">
      Certificates
    </NavLink>
  </li> */}

          </ul>

        </li>

        <li className="dropdown">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Services
          </NavLink>


          <ul className="dropdown-menu">

            {/* <li>
              <NavLink to="/our-strategy">
                Our Strategy
              </NavLink>
            </li>

            <li>
              <NavLink to="/our-presence">
                Our Presence
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/education">
                Education
              </NavLink>
            </li>

            <li>
              <NavLink to="/health-nutrition">
                Health And Nutrition
              </NavLink>
            </li>
             <li>
              <NavLink to="/economic-well-being">
                Economic well being
              </NavLink>
            </li>
             <li>
              <NavLink to="/child-protection">
                Child Protection
              </NavLink>
            </li>
             <li>
              <NavLink to="/humanitarian">
                Humanitarian
              </NavLink>
            </li>
             <li>
              <NavLink to="/resilience">
                Resilience
              </NavLink>
            </li>
            
          </ul>
        </li>
        <li>
          <NavLink
            to="/schemes"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Scheme
          </NavLink>
          </li>

        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Gallery
          </NavLink>
        </li>
        <li  className="dropdown">
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Partners
          </NavLink>
          
          <ul className="dropdown-menu">

            <li>
              <NavLink to="/about">
                  Corporate Partnership
              </NavLink>
            </li>

            <li>
              <NavLink to="/mission-vision">
                Institutional Partnership
              </NavLink>
            </li>

            <li>
              <NavLink to="/governing-council">
                Engagement with Government
              </NavLink>
            </li>
          </ul>
        
        
        </li>

        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Team
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >

            Contact
          </NavLink>
        </li>

      </ul>

      {/* BUTTON */}

      <div className="nav-btns">

        <button
          className="donate-btn"
          onClick={() => navigate('/donation')}
        >

          Donate Now
        </button>

      </div>
<div 
className="mobile-menu"
 onClick={() => setMenuOpen(!menuOpen)}
 >
  ☰
</div>
  <ul className={`mobile-nav-links ${menuOpen ? "show-menu" : ""}`}>
  <li>
 <NavLink
  to="/"
  onClick={() =>{
     setMenuOpen(false);
    setHomeOpen(false);
  }}
 >
  Home
 </NavLink>
</li>
  <li>

<div className="mobile-menu-row">

<NavLink
to="/about"
onClick={() => setMenuOpen(false)}
>
About
</NavLink>

<span
onClick={() => setAboutOpen(!aboutOpen)}
>
▼
</span>

</div>


{aboutOpen && (
<ul className="dropdown-menu-mobile">

<li>
<NavLink to="/overview"
 onClick={() => {
  setMenuOpen(false);
setOverviewOpen(false);
}}
>
Overview
</NavLink>
</li>

<li>
<NavLink to="/mission-vision"
 onClick={() =>{
   setMenuOpen(false);
  setMissionAndVisionOpen(false);
  }}
  >
Mission & Vision
</NavLink>
</li>

</ul>
)}

</li>
  
  <li className="dropdown">

<div className="mobile-menu-row">

<NavLink
to="/services"
onClick={() => setMenuOpen(false)}
>
Services
</NavLink>

<span
onClick={() => setServiceOpen(!serviceOpen)}
>
▼
</span>

</div>

{serviceOpen && (
<ul className="dropdown-menu-mobile">
<li>
<NavLink to="/education"
 onClick={() =>{
   setMenuOpen(false);
  setEducationOpen(false);
  }}
  >
Education
</NavLink>
</li>

<li>
<NavLink to="/health-nutrition"
 onClick={() =>{ 
  setMenuOpen(false);
setHealthAndNutritionOpen(false);
}}
>
Health And Nutrition
</NavLink>
</li>
<li>
<NavLink to="/economic-well-being"
 onClick={() =>{
   setMenuOpen(false);
  setEconomicWellBeingOpen(false);
  }}
  >
Economic Well Being
</NavLink>
</li>

<li>
<NavLink to="/child-protection"
 onClick={() => {
  setMenuOpen(false);
setChildProtectionOpen(false);
}}
>
Child Protection
</NavLink>
</li>
</ul>
)}

</li>
<li>
 <NavLink
  to="/gallery"
  onClick={() =>{
     setMenuOpen(false);
    setGalleryOpen(false);
  }}
 >
  Gallery
 </NavLink>
</li>
<li>

<div className="mobile-menu-row">

<NavLink
to="/partners"
onClick={() => setMenuOpen(false)}
>
Partners
</NavLink>

<span
onClick={() => setPartnerOpen(!partnerOpen)}
>
▼
</span>

</div>

{partnerOpen && (

<ul className="dropdown-menu-mobile">

<li>
<NavLink
to="/about"
onClick={() =>{
   setMenuOpen(false);
  setPartnerOpen(false);
  }}
>
Corporate Partnership
</NavLink>
</li>

<li>
<NavLink
to="/partners"
onClick={() =>{
   setMenuOpen(false);
  setPartnerOpen(false);
  }}
>
Institutional Partnership
</NavLink>
</li>

</ul>

)}

</li>
<li>
 <NavLink
  to="/schemes"
  onClick={() =>{
 setMenuOpen(false);
setSchemeOpen(false);
}}
 >
  Schemes
 </NavLink>
</li>
<li>
 <NavLink
  to="/team"
  onClick={() => {
    setMenuOpen(false);
  setTeamOpen(false);
}}
 >
  Team
 </NavLink>
</li>
<li>
 <NavLink
  to="/contact"
  onClick={() => {
    setMenuOpen(false);
  setContactOpen(false);
  }}
 >
  Contact
 </NavLink>
</li>
<li>
<NavLink
to="/donation"
onClick={() => {
  setMenuOpen(false);
  setDonationOpen(false);
  }}
>
Donate Now
</NavLink>
</li>
  </ul>
    </nav>
  )
}

export default Navbar