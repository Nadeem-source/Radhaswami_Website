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
  '/images/GalleryPageImage7.png',
  '/images/GalleryPageImage8.png',
  '/images/GalleryPageImage9.png',
  '/images/GalleryPageImage10.png',
  '/images/GalleryPageImage11.png',
  '/images/GalleryPageImage12.png',
  '/images/GalleryPageImage13.png',
  '/images/GalleryPageImage14.png',
  '/images/GalleryPageImage15.png',
  '/images/GalleryPageImage16.png',
  '/images/GalleryPageImage17.png',
  '/images/GalleryPageImage18.png',
  '/images/GalleryPageImage19.png',
  '/images/GalleryPageImage20.png',
  '/images/GalleryPageImage21.png',
  '/images/GalleryPageImage21.png',
  '/images/GalleryPageImage22.png',
  '/images/GalleryPageImage23.png',
  '/images/GalleryPageImage24.png',
  '/images/GalleryPageImage25.png',
  '/images/GalleryPageImage26.png',
  '/images/GalleryPageImage27.png',
  '/images/GalleryPageImage28.png',
  '/images/GalleryPageImage29.png',
  '/images/GalleryPageImage30.png',
  '/images/GalleryPageImage31.png',
  '/images/GalleryPageImage32.png',
  '/images/GalleryPageImage33.png',
  '/images/GalleryPageImage34.png',
  '/images/GalleryPageImage35.png',
  '/images/GalleryPageImage36.png',
  '/images/GalleryPageImage37.png',
  '/images/GalleryPageImage38.png',
  '/images/GalleryPageImage39.png',
  '/images/GalleryPageImage40.png',
  '/images/GalleryPageImage41.png',
  '/images/GalleryPageImage42.png',
  '/images/GalleryPageImage43.png',
  '/images/GalleryPageImage44.png',
  '/images/GalleryPageImage45.png',
  '/images/GalleryPageImage46.png',
  '/images/GalleryPageImage47.png',
  
  '/images/GalleryPageImage48.png',
  '/images/GalleryPageImage49.png',
  '/images/GalleryPageImage50.png',
  '/images/GalleryPageImage51.png',
  '/images/GalleryPageImage52.png',
  '/images/GalleryPageImage53.png',
  '/images/GalleryPageImage54.png',
  '/images/GalleryPageImage55.png',
  '/images/GalleryPageImage56.png',
  '/images/GalleryPageImage57.png',
  '/images/GalleryPageImage58.png',
  '/images/GalleryPageImage59.png',
  '/images/GalleryPageImage60.png',
  '/images/GalleryPageImage61.png',
  '/images/GalleryPageImage62.png',
  '/images/GalleryPageImage63.png',
  '/images/GalleryPageImage64.png',
  '/images/GalleryPageImage65.png',
  '/images/GalleryPageImage66.png',
  '/images/GalleryPageImage67.png',
  '/images/GalleryPageImage68.png',
  '/images/GalleryPageImage69.png',
  '/images/GalleryPageImage71.png',
  '/images/GalleryPageImage72.png',
  '/images/GalleryPageImage73.png',
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