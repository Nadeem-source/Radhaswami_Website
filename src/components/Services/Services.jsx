import './Services.css'

const Services = () => {

  const data = [
    {
      title: 'Spiritual Guidance',
      description:
        'Transforming lives through timeless spiritual wisdom, inner clarity, and purposeful living.',
    },

    {
      title: 'Meditation Programs',
      description:
        'Experience deep peace, mental balance, and elevated consciousness through guided meditation practices.',
    },

    {
      title: 'Community Welfare',
      description:
        'Creating meaningful social impact through compassion-driven initiatives, support, and human service.',
    },

    {
      title: 'Global Humanity',
      description:
        'Uniting people across the world with the values of peace, humanity, harmony, and spiritual growth.',
    },
  ]

  return (
    <section id="services" className="services">

      <h2>Our Services</h2>

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
// The Story of AFLISH Group of Companies :-

// Beginning of a Vision
// AFLISH Group of Companies was born from a simple but powerful thought:
// “Every person deserves financial support, equal opportunities, and a better future.”
// In today’s world, many people struggle to get loans, credit cards, financial approvals, healthcare assistance, business opportunities, and even proper guidance. Thousands of hardworking individuals are rejected by banks due to low income, poor documentation, or lack of financial awareness.
// The founders of AFLISH Group of Companies observed these problems closely and decided to create an organization that would bridge the gap between people and opportunities.
// Thus, AFLISH Group of Companies was established to become a trusted support system for society.

// AFLISH Group of Companies is not just a company; it is a mission to support people, uplift communities, and create opportunities for every individual who dreams of a better future.
// With dedication, innovation, and a people-first approach, AFLISH Group of Companies continues to move forward with the vision of becoming a trusted name in financial support, social welfare, and economic development across India.

// AFLISH Group of Companies is a fast-growing private company incorporated on 21st July, 2024 under the Ministry of Corporate Affairs (MCA), Government of India.
// The company is registered with the Corporate Identification Number (CIN): U68200DL2024PTC434374 and is registered under RoC-Delhi II as a Non-Government group of Companies.
// authorities :
// Mr. I.N. Naqvi (Managing Director)
// Mr. Mohd Kaif (Director)
// Ms. Nuzhat Naqvi (Director)

// Their mission is to create opportunities for people who are financially weak, neglected by banking systems, or struggling to achieve their dreams.

// Vision Statement
// “To become India’s most trusted company  for social welfare, financial empowerment, and economic development.”
// AFLISH Group of Companies envisions a future where every family has access to financial stability, business opportunities, healthcare support, and educational growth.

// The primary objective of AFLISH Group of Companies is:
// “To uplift society economically, socially, and financially by providing accessible services and opportunities to every individual.”
// The company aims to help people in different sectors of life and become a platform where individuals can find support, solutions, and growth opportunities.

// Services Offered by AFLISH Group of Companies

// 1. Loan Assistance Services
// AFLISH Group of Companies helps individuals who face difficulties in obtaining loans from banks or financial institutions.

// Services Include:
// Personal Loan Assistance
// Business Loan Guidance
// Vehicle Loan Support
// Property Loan Assistance
// Financial Consultation
// Loan Waiver Support Awareness
// The company aims to help people fulfill their dreams of business growth, home ownership, and financial stability.

// 2. Credit Card Services
// Many individuals are unable to access banking facilities or credit cards due to limited financial records.

// AFLISH Group of Companies supports eligible individuals by guiding them regarding:
// Credit Card Assistance
// Financial Documentation
// Banking Awareness
// Credit Management Support

// 3. E-Commerce Sector
// The company also works in the field of e-commerce by promoting digital business opportunities and online growth.
// Objectives:
// Supporting small businesses
// Promoting online selling
// Encouraging digital entrepreneurship
// Helping youth generate income online

// 4. Property & Real Estate Services
// AFLISH Group of Companies assists people in property-related guidance and investment opportunities.
// Services:
// Property Consultation
// Real Estate Assistance
// Investment Guidance
// Affordable Property Solutions

// 5. Franchise Partner Opportunities
// The company believes in creating entrepreneurs and employment opportunities across India.
// Franchise Benefits:
// Business Growth Opportunities
// Independent Income Source
// Brand Partnership
// Regional Expansion 

// 6. Vehicle Loan Support
// The company helps individuals achieve their dream of owning vehicles through vehicle loan support and financial guidance.
// Vehicle Categories:
// Two-Wheelers
// Cars
// Commercial Vehicles
// Business Transport 

// 7. Social Welfare Activities
// AFLISH Group of Companies also focuses on:
// Education Support
// Healthcare Awareness
// Economic Development
// Employment Opportunities
// Financial Awareness Programs
// The company believes that social progress is the foundation of a stronger nation.