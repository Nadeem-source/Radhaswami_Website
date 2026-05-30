import './TopMarquee.css'
import { Link } from 'react-router-dom'
const TopMarquee = ({ hideMarquee }) => {

  return (
<div
 className={
   hideMarquee
   ? "top-marquee marquee-hide"
   : "top-marquee"
 }
>
    <div className="top-marquee">


      {/* MOVING TEXT */}

      <div className="marquee-wrapper">
<div className="marquee-fade"></div>
        <div className="marquee-track">

          <span>
            🌍 Together We Can Build A Better Future of Society.
          </span>

          <span>
            ❤️ Donate For Child Education & Healthcare
          </span>

          <span>
            🤝 1.8+ Years Of Humanity & Social Welfare
          </span>

          <span>
            🌟 Secure Childhood • Secure Future
          </span>

          <span>
            💜 Empowering Communities Through Service.
            Aflish Group of Services is registered under
             sections 12A & 80G of the Income Tax Act,
              1961 and CSR-1 registered under the
               Ministry of Corporate Affairs for
                undertaking CSR activities. 
                <Link to="/certificates" className="certificate-link">
  Click Here 
</Link> to visit all certificates

          </span>

        </div>

      </div>
      {/* FIXED CONTACT */}

      <div className="top-contact">

        <span>📞 +91 9654121110</span>

        <span>✉ Aflishservices@gmail.com</span>

      </div>

    </div>
</div>
  )
}

export default TopMarquee