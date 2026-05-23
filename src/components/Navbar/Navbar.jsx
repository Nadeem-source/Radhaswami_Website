import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ scrollValue = 650 }) => {
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

    <nav className={scrolled ? "navbar active-navbar" : "navbar"}>

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
        <li>
  <NavLink
    to="/partners"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >

    Partners
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