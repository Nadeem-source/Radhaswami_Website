import React from 'react'
import './SchemesPage.css'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const schemesData = [

  {
    id: 1,
    title: 'EDUCATION SUPPORT --> SCHEME',
    amount: '₹500 / Month',
    description:
      'Support underprivileged children with quality education, books, uniforms, and digital learning resources for a brighter future.',
  },

  {
    id: 2,
    title: 'FOOD & NUTRITION PROGRAM',
    amount: '₹1000 / Month',
    description:
      'Help families and children receive nutritious meals, clean drinking water, and essential daily food supplies.',
  },

  {
    id: 3,
    title: 'WOMEN EMPOWERMENT SCHEME',
    amount: '₹1500 / Month',
    description:
      'Empowering women through skill development, self-employment opportunities, awareness programs, and financial support.',
  },

  {
    id: 4,
    title: 'HEALTHCARE ASSISTANCE',
    amount: '₹2000 / Month',
    description:
      'Provide medical care, medicines, health checkups, emergency support, and wellness programs for needy communities.So please Donate to this scheme.',
  },

  {
    id: 5,
    title: 'CHILD WELFARE MISSION',
    amount: '₹2500 / Month',
    description:
      'Protect and support vulnerable children with education, shelter, emotional care, and life-improving opportunities.So please Donate to this scheme.',
  },

  {
    id: 6,
    title: 'SENIOR CITIZEN CARE',
    amount: '₹3000 / Month',
    description:
      'Help elderly people with healthcare support, food, emotional care, shelter assistance, and social welfare services.',
  },

]

const SchemesPage = () => {
  return (
    <>
      <Navbar scrollValue={70} />

      <section className="schemes-page">

        {/* TOP HEADING */}

        <div className="schemes-heading">

          <span>
            AFLISH DONATION SCHEMES
          </span>

          <h1>
            CHOOSE SCHEMES
            
            TO CREATE IMPACT
          </h1>

          <p>
            Your support helps transform lives through education,
            healthcare, nutrition, women empowerment, child welfare,
            and sustainable community development initiatives.
          </p>

        </div>

        {/* SCHEME GRID */}

        <div className="schemes-grid">

          {schemesData.map((item) => (

            <div
              className="schemes-card"
              key={item.id}
            >

              <div className="schemes-top">

                <h2>
                  {item.title}
                </h2>

                <span>
                  {item.amount}
                </span>

              </div>

              <p>
                {item.description}
              </p>

              <button>
                Support Now
              </button>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  )
}

export default SchemesPage