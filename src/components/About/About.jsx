import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <img
          src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200"
          alt="about"
        />
      </div>

      <div className="about-right">
        <h2>About Organization</h2>

        <p>
          This section is inspired by the original website but redesigned with
          luxury premium aesthetics and responsive layout.
        </p>

        <button>Read More</button>
      </div>
    </section>
  )
}

export default About