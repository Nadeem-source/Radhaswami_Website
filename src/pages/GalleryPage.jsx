import React from 'react'
import './GalleryPage.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const images = [
  '/images/GalleryPageImage1.png',
  '/images/GalleryPageImage2.png',
  '/images/GalleryPageImage3.png',
  '/images/GalleryPageImage4.png',
  '/images/GalleryPageImage5.jpg',
  '/images/GalleryPageImage6.jpg',
]

const GalleryPage = () => {
  return (
    <>
     <Navbar scrollValue={60} alwaysTop={true} />

      <section className="gallery-page">

        <div className="gallery-page-heading">

          <span>SOCIAL EMPOWERMENT</span>

          <h1>
            AFLISH COMMUNITY GALLERY
            
          </h1>

          <p>
            Moments of empowerment, education, social welfare,
            leadership programs, and community support initiatives.
          </p>

        </div>

        <div className="gallery-page-grid">

          {images.map((img, index) => (
            <div className="gallery-page-card" key={index}>
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