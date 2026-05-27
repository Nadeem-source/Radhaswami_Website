import React from 'react'
import '../pages/ServicesPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const ServicesPage = () => {
  return (
    <>
      <Navbar scrollValue={60} />

      <section className="services-page">

        <div className="services-page-heading">

          <span>Services Offered by AFLISH Group of Companies </span>

          <h1>
            Empowering Society
            Through Innovation
          </h1>

        </div>

        <div className="services-page-grid">
  <div className="services-page-card">
            <h2>Social Welfare Activities</h2>
  <p>
AFLISH Group of Companies also focuses on: 
 Education Support 
 Healthcare Awareness 
  Economic Development 
  Employment Opportunities 
  Financial Awareness Programs 
The company believes that social progress is the foundation of a stronger nation.
 AFLISH Group of Companies is dedicated to uplifting communities through impactful social welfare initiatives focused on education, healthcare, empowerment, and sustainable development for a better future.

  </p>

          </div>
          <div className="services-page-card">

  <h2>Education Empowerment Programs</h2>

  <p>
AFLISH Group of Companies is committed to transforming lives through quality education initiatives. 
We support underprivileged students with scholarships, digital learning access, skill development workshops, career guidance, and modern educational resources. 
Our mission is to empower future generations with knowledge, confidence, and opportunities for sustainable success.
  </p>

</div>

<div className="services-page-card">

  <h2>Healthcare & Medical Support</h2>

  <p>
We actively promote healthier communities through medical awareness campaigns, free health check-up drives, blood donation programs, mental wellness initiatives, and healthcare accessibility projects. 
AFLISH believes that quality healthcare is a fundamental right for every individual regardless of background.
  </p>

</div>

<div className="services-page-card">

  <h2>Women & Youth Development</h2>

  <p>
Our organization works towards empowering women and youth through leadership training, entrepreneurship support, financial literacy programs, vocational education, and confidence-building initiatives. 
We aim to create self-reliant individuals who contribute positively to society and economic growth.
  </p>

</div>

<div className="services-page-card">

  <h2>Community Welfare & Relief Services</h2>

  <p>
AFLISH Group actively participates in humanitarian and social welfare activities including food distribution, disaster relief assistance, clothing support, clean water initiatives, and community development projects. 
Our vision is to build a compassionate and inclusive society through meaningful action.
  </p>

</div>

<div className="services-page-card">

  <h2>Employment & Skill Development</h2>

  <p>
We create opportunities for individuals through professional skill development programs, employment guidance, startup mentorship, digital training, and career enhancement workshops. 
AFLISH focuses on building financially independent communities with long-term economic stability.
  </p>

</div>

<div className="services-page-card">

  <h2>Financial Awareness & Social Responsibility</h2>

  <p>
AFLISH Group promotes financial awareness by educating communities about savings, responsible investments, entrepreneurship, and economic planning. 
Our social responsibility initiatives encourage sustainable growth, ethical leadership, and stronger community participation for a better future.
  </p>

</div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default ServicesPage

