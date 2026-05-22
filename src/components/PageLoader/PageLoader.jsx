import React from 'react'
import './PageLoader.css'

const PageLoader = () => {
  return (

    <div className="page-loader">

      <div className="loader-content">

        {/* ROTATING RING */}

        <div className="loader-ring"></div>

        {/* LOGO */}

        <img
          src="/images/LOGO.jpeg"
          alt="logo"
          className="loader-logo"
        />

        {/* TEXT

        <h2>
          AFLISH GROUP
        </h2>

        <p>
          Empowering Humanity
        </p> */}

      </div>

    </div>

  )
}

export default PageLoader