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

function App() {
  const [loading, setLoading] = useState(false)

const location = useLocation()
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
            <Navbar />
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
    </Routes>
    </>
  )
}
export default App