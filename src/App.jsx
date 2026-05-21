import React from 'react';
import { Routes, Route } from "react-router-dom";
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


function App() {
  return (
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
      
    </Routes>
  )
}
export default App