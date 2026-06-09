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

      <ul className="nav-links">

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

            <li>
              <NavLink to="/financials">
                Financials
              </NavLink>
            </li>
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

    </nav>
  )
}

export default Navbar