import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
const [scrolled, setScrolled] = useState(false)

useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 650) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

  }

  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)

}, [])

  const navigate = useNavigate()

  return (

    <nav className={scrolled ? "navbar active-navbar" : "navbar"}>

      {/* LOGO */}

      <div className="logo">
        <img src="/images/LOGO.jpeg" alt="" />
        <h2>AFLISH GROUP</h2>
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

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scheme"
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