import React from 'react';
import './AnnualReport2025.css'

const AnnualReport2025 = () => {
    return(
<section className="annual-report-strip">
    <div className="annual-report-left">
      <span className="annual-title">ANNUAL REPORT 2025 &nbsp;</span>
      <span className="annual-subtitle">
        Empowering Communities. 
        {/* Creating Sustainable Impact. */}
      </span>
    </div>
    <a
      href="/pdfs/AFLISH-Annual-Report-2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="annual-readmore"
    >
      Read More
    </a>
  </section>

    )};
  

export default AnnualReport2025;
