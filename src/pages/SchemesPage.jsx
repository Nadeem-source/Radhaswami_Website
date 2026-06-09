import React from 'react'
import './SchemesPage.css'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const schemesData = [

  {
    id: 1,
    icon: "🎓",
    title: 'EDUCATION SUPPORT SCHEME',
    amount: '₹500 / Month',
    description:
      'Support underprivileged children with quality education, books, uniforms, and digital learning resources for a brighter future.This scheme is a powerful lifeline that transforms the lives of underprivileged children by providing them access to quality education.By investing in this scheme,donors do not just fund schooling; they break the vicious cycle of generational poverty for entire families. Every contribution ensures that bright, young minds are never forced to drop out due to financial hardships or lack of resources.This initiative bridges the socioeconomic gap, turning marginalized children into the confident leaders, innovators, and doctors of tomorrow.Your support helps build modern , safe learning environment where every child ,regardless of their background , has an equal righr to dream.Transparent reporting and regular updates ensure that donors can watch the direct progress of the students they choose to sponsor. Joining hands with an Education Support Scheme is an investment in human potential and the most noble way to shape a brighter, more equitable future.',
  },

  {
    id: 2,
    icon: "🍔",
    title: 'FOOD & NUTRITION PROGRAM',
    amount: '₹1000 / Month',
    description:
      'Help families and children receive nutritious meals, clean drinking water, and essential daily food supplies. This is government initiative also aimed at eradicating hunger and malnutrition across the country.The primary goal of these programs is to ensure food security and improve the health of vulnerable populations.This scheme heavily target the first 1000 , days of a child life to prevent stuning ,wasting and anemia.Join the Cause because together we can turn compassion into action - donate today to ensure no one goes to sleep on an empty stomach.Beyond immediate relief ,we educate communities on affordable nutrition and healthy eating habits.A small contribution from you can sponsor a days worth of healthy meals for a child in need.Every single dollar/rupee donated goes directly into sourcing ingredients, cooking, and distributing meals.We partner with local vendors and farmers to source fresh ingredients while minimizing food waste.A well-fed community is a thriving community ;proper nutrition improves focus, education, and work capabilities. By offering balanced diets,we aim to prevent growth stuning and health deficiencies in growing children.Our program primarily focuses on nourishing underprivileged children,struggling families, and the elderly. ',
  },

  {
    id: 3,
    icon: "👩‍💼",
    title: 'WOMEN EMPOWERMENT SCHEME',
    amount: '₹1500 / Month',
    description:
      'Empowering women through skill development, self-employment opportunities, awareness programs, and financial support.Our mission is to provide women with the tools, education, and resources they need to achieve financial independence and leadership.By investing in a woman ,you are investing in her entire family and community, creating a lasting ripple effect of positive. Your donations fund vocational training programs,digital literacy courses, and entrepreneurship workshops for underprivileged women. We help women start their own micro-businesses,giving them the confidence and means to support themselves sustainably.We provide mentorship, legal awareness, and psychological support to help women overcome societal barriers and thrive. A significant portion of our funds goes toward securing higher education and specialized scholarships for young girls from marginalized backgrounds.Every rupee you donate directly funds training materials , mentors salaries and setup kits for new women entrepreneurs.True equality begins with opportunity. Your generosity bridges the gap  between a woman potential  and her success.Whether big or small your contribution directly helps a woman reclaim her voice,her rights, and her financial freedom. ',
  },

  {
    id: 4,
    icon: "🏥",
    title: 'HEALTHCARE ASSISTANCE',
    amount: '₹2000 / Month',
    description:
      'Provide medical care, medicines, health checkups, emergency support, and wellness programs for needy communities.So please Donate to this scheme.Our Healthcare Assistance Program is dedicated to making quality medical care accessible and affordable for everyone in our community.We provide financial support and resources to individuals and families facing unexpected medical expenses.From routine check-ups to critical treatments, this scheme ensures that financial constraints never stand in the way of your health.We partner with top-tier hospitals and medical professionals to offer you the best possible care and guidance. Our streamlined application process ensures you get the medical aid you need without unnecessary delays or paperwork.This initiative offers comprehensive coverage options, including diagnostic tests,surgeries, and essential medications.We believe that quality healthcare is a fundamental right, not a luxury reserved for a few.Everyday, countless underprivileged families face medical crises they simply cannot afford.Your generous donations directly fund life-saving treatments, surgeries, and essential medicines for those in desperate need.Even a small contribution can buy a week worth of life- saving medication for a child or an elderly patient. ',
  },

  {
    id: 5,
    icon: "👶",
    title: 'CHILD WELFARE MISSION',
    amount: '₹2500 / Month',
    description:
      'Protect and support vulnerable children with education, shelter, emotional care, and life-improving opportunities.So please Donate to this scheme. Our this mission is dedicated to providing a safe, secure, and bright future for every underprivileged child.The primary goal of this scheme is to ensure quality education, proper nutrition, and essential healthcare for orphaned and marginalized children. We stand firmly against child exploitation, actively working to protect their basic rights and emotional well-being.Your generous contribution can bridge the gap for a child by funding their school tuition, books, uniforms.Your contribution is not just a financial gift, it is a powerful seed of hope, opportunity, and for love for a young life.We maintain 100% transparency, ensuring that every single penny you donate goes directly toward a child well-being.Join hands with us today , your kindness has the power to rewrite a child story and put a smile back on their face.Beyond basic support, the mission focuses on creating a nurturing environment where children can develop confidence, skills and aspirations for a successful future. We organize educational workshops, mentorship programs and recreational activities that encourage personal growth and emotional well-being. Our dedicated team works closely with families, schools and community partners to ensure holistic development for every child.',
  },

  {
    id: 6,
    icon: "👴",
    title: 'SENIOR CITIZEN CARE',
    amount: '₹3000 / Month',
    description:
      'Help elderly people with healthcare support, food, emotional care, shelter assistance, and social welfare services.This scheme is dedicated to improving the quality of life for senior citizens who require care, support and companionship in their daily lives. Many elderly individuals face challenges such as loneliness, health issues and financial insecurity, making community support essential for their well-being. Through this initiative, we provide access to medical checkups, essential medicines and emergency healthcare assistance. We also organize awareness programs that promote healthy and active aging. The scheme supports elderly individuals with nutritious meals, safe shelter and emotional counseling services. Regular engagement activities help reduce social isolation and encourage meaningful participation in community life. Our volunteers work closely with senior citizens to understand their needs and provide personalized support whenever possible.By strengthening care networks and social protection measures, we aim to ensure dignity, respect and security for every elderly person. Transparent implementation and community involvement help maximize the impact of every contribution received. Your support can bring comfort, hope and a better future to senior citizens who deserve care, compassion and respect.',
  },

]


const SchemesPage = () => {
  return (
    <>
      <Navbar scrollValue={70} alwaysTop={true} />
      <section className="schemes-hero">

        <div className="schemes-hero-overlay"></div>

        <div className="schemes-hero-content">

          <span>AFLISH DONATION SCHEMES</span>

          <h1>
            Together We Can
            <br />
            Change Lives
          </h1><br />

          <p>
            Support education, healthcare, food distribution,
            women empowerment and child welfare programs.
          </p>

        </div>

      </section>
      <section className="scheme-section">
        <div className="scheme-section-container">
          <section className="breadcrumb2-section">

            <div className="breadcrumb-container">

              <Link to="/" className="breadcrumb-home">
                🏠
              </Link>

              <span className="breadcrumb-arrow">&gt;</span>

              <span className="breadcrumb-current">
                Schemes
              </span>

            </div>

          </section>
        
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
              className={`schemes-card scheme-${item.id}`}
              key={item.id}
            >

              <div className="schemes-top">
                <div className="schemes-header">
                  <div className="scheme-price">
                    {item.amount}
                  </div>

                  <div className="scheme-icon">
                    {item.icon}
                  </div>

                  <h2>
                    {item.title}
                  </h2>

                </div>
              </div>
              <p>
                {item.description}
              </p>

              <div className="scheme-progress">

                <div
                  className="progress-fill"
                  style={{ width: "70%" }}
                ></div>

              </div>

              <p className="progress-text"
                style={{ color: "purple" }}>
                70% Goal Achieved
              </p>

              <button>
                Support Now
              </button>

            </div>

          ))}

        </div>

      </section>
</div>
      </section>
      <Footer />
    </>
  )
}

export default SchemesPage