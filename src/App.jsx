import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Stats from './components/Stats/Stats'
import Donation from './components/Donation/Donation'
import Footer from './components/Footer/Footer'

function App() {
  return (
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
  )
}

export default App