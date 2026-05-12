import React from 'react';
import './Stats.css';
import {
  FaUsers,
  FaHandsHelping,
  FaGlobeAsia,
  FaDonate,
} from 'react-icons/fa';
const Stats = () => {
  const statsData = [
    {
      icon: <FaUsers />,
      number: '5M+',
      title: 'Followers Worldwide',
    },
    {
      icon: <FaHandsHelping />,
      number: '1500+',
      title: 'Volunteers Connected',
    },
    {
      icon: <FaGlobeAsia />,
      number: '75+',
      title: 'Global Centers',
    },
    {
      icon: <FaDonate />,
      number: '₹500Cr+',
      title: 'Charity Support',
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>

      <div className="stats-container">
        <div className="stats-heading">
          <span>GLOBAL IMPACT</span>
          <h2>Serving Humanity With Devotion</h2>
          <p>
            Creating spiritual awareness and social harmony through dedication,
            charity, meditation, and global outreach programs.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;