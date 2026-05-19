import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="header">
<div className="hero-slider">

  <div className="hero-slide slide1"></div>

  <div className="hero-slide slide2"></div>

  <div className="hero-slide slide3"></div>

</div>
      <div className="overlay"></div>

       <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="header-content"
      >
        <h1>
          Spirituality For <span>Humanity</span>
        </h1>

        <p>
          Elevating Human Consciousness Through Timeless Spiritual Wisdom & Modern Divine Living.
          Where Spiritual Wisdom Meets Modern Humanity, Creating a Life of Peace,
           Purpose & Inner Excellence.Inspiring Millions To Embrace Spiritual Awakening, Inner Peace,
            And A Higher Way Of Living.
        </p>

        <div className="header-buttons">
          <button>Explore More</button>
          <button className="secondary-btn">Join Community</button>
        </div>
      </motion.div>
    </header>
  )
}

export default Header