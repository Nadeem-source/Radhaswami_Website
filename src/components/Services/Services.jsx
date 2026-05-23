import './Services.css'

const Services = () => {

  const data = [
    {
      title: 'SPIRITUAL GUIDANCE',
      description:
        'Transforming lives through timeless spiritual wisdom, inner clarity, and purposeful living.',
    },

    {
      title: 'MEDITATION PROGRAMS',
      description:
        'Experience deep peace, mental balance, and elevated consciousness through guided meditation practices.',
    },

    {
      title: 'COMMUNITY WELFARE',
      description:
        'Creating meaningful social impact through compassion-driven initiatives, support, and human service.',
    },

    {
      title: 'GLOBAL HUMANITY',
      description:
        'Uniting people across the world with the values of peace, humanity, harmony, and spiritual growth.',
    },
    {
  title: 'YOUTH EMPOWERMENT',
  description:
    'Empowering young minds with leadership, education, confidence, and opportunities for a brighter future.',
},
{
  title: 'WOMEN SUPPORT PROGRAMS',
  description:
    'Supporting women through awareness, skill development, social equality, and self-growth initiatives.',
},
  ]

  return (
    <section id="services" className="services">

      <h2>OUR SERVICES</h2>

      <div className="service-grid">

        {data.map((item, index) => (

          <div className="service-card" key={index}>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Services
