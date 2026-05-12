import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-card"
      >
        <h2 className="gradient-text">Welcome To Divine Peace</h2>

        <p>
          Experience spiritual wisdom with elegant modern digital experience.
        </p>
      </motion.div>
    </section>
  )
}

export default Hero