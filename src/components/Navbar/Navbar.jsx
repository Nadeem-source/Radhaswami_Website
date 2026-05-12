import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Radha Swami</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#donation">Donation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="donate-btn">Donate Now</button>

      <div className="mobile-menu">
        <FaBars />
      </div>
    </nav>
  )
}

export default Navbar