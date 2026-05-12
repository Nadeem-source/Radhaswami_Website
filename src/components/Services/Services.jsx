import './Services.css'

const Services = () => {
  const data = [
    'Spiritual Guidance',
    'Meditation Programs',
    'Community Welfare',
    'Global Humanity',
  ]

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {data.map((item, index) => (
          <div className="service-card" key={index}>
            <h3>{item}</h3>
            <p>
              Modern UI card with hover animation and luxury glassmorphism
              effect.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services