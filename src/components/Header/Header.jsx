import './Header.css'
import { motion } from 'framer-motion'
import { useState } from "react";

const Header = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [ratings, setRatings] = useState({
  experience: 0,
  ui: 0,
  content: 0
});
  return (
    <header className="header">
      <div className="hero-slider">

        <div className="hero-slide slide1"></div>

        <div className="hero-slide slide2"></div>

        <div className="hero-slide slide3"></div>

      </div>
      <div className="overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="header-content"
      >
        <h1>
          SPIRITUALITY FOR <span>HUMANITY</span>
        </h1>

        <p>
          Elevating Human Consciousness Through Timeless Spiritual Wisdom & Modern Divine Living.
          Where Spiritual Wisdom Meets Modern Humanity, Creating a Life of Peace,
          Purpose & Inner Excellence.Inspiring Millions To Embrace Spiritual Awakening, Inner Peace,
          And A Higher Way Of Living.
        </p>

        <div className="header-buttons">
          <button>Explore More</button>
          <button className="secondary-btn">Join Community</button>
        </div>
      </motion.div>
      <div
        className="feedback-tab"
        onClick={() => setShowFeedback(true)}
      >
        Feedback
      </div>
      {
showFeedback && (

<div className="feedback-overlay">

<div className="feedback-popup">

<button
className="close-btn"
onClick={()=>setShowFeedback(false)}
>
✕
</button>

<h2>We Value Your Feedback</h2>

<input
type="email"
placeholder="Email Address"
/>

<textarea
placeholder="Share your feedback..."
></textarea>

<button className="submit-btn">
Submit
</button>

</div>

</div>

)
}

{/* WhatsApp */}

<a
href="https://wa.me/918709834695"
target="_blank"
rel="noreferrer"
className="floating-whatsapp"
>
<i className="fa-brands fa-whatsapp"></i>
</a>

{/* Chat */}

<div
className="floating-chat"
>
💬 Chat
</div>

    </header>
    
  )
}

export default Header