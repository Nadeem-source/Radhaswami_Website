import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <img
          src="/images/photo-1529156069898-49953e39b3ac.avif"
          alt="about"
        />
      </div>

      <div className="about-right">
        <h2>About Organization</h2>

        <p>
          A globally inspired spiritual organization dedicated to spreading peace, 
          humanity, conscious living, and timeless divine wisdom.
        </p>

        <Link to="/about">
  <button>Read More</button>
</Link>
      </div>
    </section>
  )
}

export default About