import React, { useEffect, useState } from 'react'
import './WelcomePopup.css'

const WelcomePopup = () => {

  const [showPopup, setShowPopup] = useState(false)
const [activeSlide, setActiveSlide] = useState(0)
  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setShowPopup(true)
  //   }, 800)

  //   return () => clearTimeout(timer)

  // }, [])
useEffect(() => {

  const alreadyShown =
    sessionStorage.getItem('aflishPopupShown')

  if (!alreadyShown) {

    const timer = setTimeout(() => {

      setShowPopup(true)

      sessionStorage.setItem(
        'aflishPopupShown',
        'true'
      )

    }, 800)

    return () => clearTimeout(timer)
  }

}, [])


useEffect(() => {

  const interval = setInterval(() => {

    setActiveSlide((prev) => (prev + 1) % 3)

  }, 3500)

  return () => clearInterval(interval)

}, [])
  return (

    <>
      {showPopup && (

        <div className="popup-overlay">

          <div className="welcome-popup">

            {/* CLOSE BUTTON */}

            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            {/* LOGO */}

            <div className="popup-slider">

  {/* SLIDE 1 */}

  {activeSlide === 0 && (

    <div className="popup-slide fade-slide">

      <img
        src="/images/LOGO.jpeg"
        alt="logo"
        className="popup-logo"
      />

      <h2>AFLISH GROUP OF COMPANIES</h2>

    </div>

  )}

  {/* SLIDE 2 */}

  {activeSlide === 1 && (

    <div className="popup-slide fade-slide">

      <h2>Secure Childhood</h2>

      <h3>Secure Future</h3>

      <p className="popup-text">

        Building brighter futures through
        education, care, protection,
        and empowerment.

      </p>

    </div>

  )}

  {/* SLIDE 3 */}

  {activeSlide === 2 && (

    <div className="popup-slide fade-slide">

      <div className="popup-years">

        <span>1.8+</span>

        <p>Years Of Togetherness</p>

      </div>

      <p className="popup-text">

        Empowering humanity through
        social welfare, healthcare,
        education, spiritual growth,
        and community development.

      </p>

      <button className="popup-btn">

        Join The Mission

      </button>

    </div>

  )}

</div>

            {/* FLOATING GLOW */}

            <div className="popup-glow popup-glow1"></div>
            <div className="popup-glow popup-glow2"></div>

          </div>

        </div>

      )}
    </>
  )
}

export default WelcomePopup