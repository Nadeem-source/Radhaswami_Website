import React from 'react'
import './GalleryPage.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const images = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
]

const GalleryPage = () => {
  return (
    <>
      <Navbar />

      <section className="gallery-page">

        <div className="gallery-heading">

          <span>SOCIAL EMPOWERMENT</span>

          <h1>
            AFLISH Community
            Gallery
          </h1>

          <p>
            Moments of empowerment, education, social welfare,
            leadership programs, and community support initiatives.
          </p>

        </div>

        <div className="gallery-grid">

          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="gallery" />
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  )
}

export default GalleryPage