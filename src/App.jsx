import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PageLoader from './components/PageLoader/PageLoader'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Stats from './components/Stats/Stats'
import Donation from './components/Donation/Donation'
import Footer from './components/Footer/Footer'
import DonationPage from "./pages/DonationPage";
import Team from './components/Team/Team'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import SchemesPage from './pages/SchemesPage'
import Partners from './pages/Partners'
import WelcomePopup from './components/WelcomePopup/WelcomePopup'
import TopMarquee from './components/TopMarquee/TopMarquee'
import CertificatesPage from './pages/CertificatesPage'
import MissionVisionPage from './pages/MissionVisionPage'
import GoverningCouncilPage from './pages/GoverningCouncilPage'
import FinancialsPage from './pages/FinancialsPage'
import OurStrategyPage from "./pages/OurStrategyPage";
import OurPresencePage from "./pages/OurPresencePage";
import EducationPage from "./pages/EducationPage";
import HealthAndNutrition from "./pages/HealthAndNutrition";
import EconomicWellBeing from "./pages/EconomicWellBeing";
import ChildProtection from "./pages/ChildProtection";
import HumanitarianPage from "./pages/HumanitarianPage";
import ResiliencePage from "./pages/ResiliencePage";

function App() {
  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const [hideMarquee, setHideMarquee] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 30) {
        setHideMarquee(true)
      }
      else {
        setHideMarquee(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])
  useEffect(() => {

    setLoading(true)

    const timer = setTimeout(() => {

      setLoading(false)

    }, 1200)

    return () => clearTimeout(timer)

  }, [location.pathname])

  return (
    <>{loading && <PageLoader />}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <TopMarquee hideMarquee={hideMarquee} />
              <Navbar hideMarquee={hideMarquee} />
              <WelcomePopup />
              <Header />
              <Hero />
              <About />
              <Services />
              <Gallery />
              <Stats />
              <Donation />
              <Footer />
            </>
          }
        />


        <Route path="/donation" element={<DonationPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/certificates" element={<CertificatesPage />} />
<Route
 path="/mission-vision"
 element={<MissionVisionPage />}
/>

<Route
 path="/governing-council"
 element={<GoverningCouncilPage />}
/>

<Route
 path="/financials"
 element={<FinancialsPage />}
/>
<Route
 path="/our-strategy"
 element={<OurStrategyPage />}
/>
<Route
  path="/our-presence"
  element={<OurPresencePage />}
/>
<Route
 path="/education"
 element={<EducationPage />}
/>
<Route
 path="/health-nutrition"
 element={<HealthAndNutrition />}
/>
<Route
 path="/economic-well-being"
 element={<EconomicWellBeing />}
/>
     <Route
  path="/child-protection"
  element={<ChildProtection />}
/>
<Route
 path="/humanitarian"
 element={<HumanitarianPage />}
/>
<Route
  path="/resilience"
  element={<ResiliencePage />}
/>
      </Routes>
    </>
  )
}
export default App