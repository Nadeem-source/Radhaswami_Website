import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header-content"
      >
        <h1>
          Spirituality For <span>Humanity</span>
        </h1>

        <p>
          A premium spiritual organization inspired homepage with ultra luxury
          modern UI, smooth animation and professional design system.
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