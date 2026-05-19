// src/components/Team/Team.jsx

import React from 'react'
import './Team.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const teamData = [
    {
        id: 1,
        name: 'Mr. Md Danish',
        role: 'Delhi Incharge',
        image: '/images/team/Danish.png',
    },

    {
        id: 2,
        name: 'Ms. Nuzhat Navi',
        role: 'Director',
        image: '/images/team/NuzhatNaqvi.jpeg',
    },

    {
        id: 3,
        name: 'Mr. Mohd Kaif',
        role: 'Director',
        image: '/images/team/Kaif.jpeg',
    },

    {
        id: 4,
        name: 'Mr. Mohd Aamir',
        role: 'Media In-Charge',
        image: '/images/team/aMIR.png',
    },

    {
        id: 5,
        name: 'Ms. Aqsa',
        role: 'Office Assistant',
        image: '/images/team/AQSA.png',
    },

    {
        id: 6,
        name: 'Mr. Umair Ahmad Shamsi',
        role: 'District Co-Ordinator (Rampur)',
        image: '/images/team/Umair.png',
    },

    {
        id: 7,
        name: 'Mr. Mohd Faiz Khan',
        role: 'District Co-Ordinator (Bareilly)',
        image: '/images/team/Faiz.jpeg',
    },

    {
        id: 8,
        name: 'Ms. Sneha',
        role: 'Office Management Officer',
        image: '/images/team/Sneha.jpeg',
    },

    {
        id: 9,
        name: 'Mr. Mohd Gulzar',
        role: 'District Co-Ordinator (Moradabad)',
        image: '/images/team/Gulzar.png',
    },
]

const Team = () => {
    return (
        <>
            <Navbar />

            <section className="team-section">

                <div className="team-top-blur left-blur"></div>
                <div className="team-top-blur right-blur"></div>

                <div className="team-wrapper">

                    {/* HEADER */}

                    <div className="team-header">

                        <span>
                            AFLISH FOUNDATION TEAM
                        </span>

                        <h1>
                            Meet Our Leadership
                        </h1>

                        <p>
                            Dedicated professionals building impactful initiatives,
                            empowering communities, and creating meaningful social change.
                        </p>

                    </div>

                    {/* CHAIRMAN */}

                    

                    {/* TEAM GRID */}

                    <div className="foundation-grid">

                        {teamData.map((member) => (

                            <div
                                className="foundation-card"
                                key={member.id}
                            >

                                <div className="foundation-image">

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                    />

                                </div>

                                <div className="foundation-content">

                                    <div className="top-row">

                                        <span>
                                            AFLISH GROUP
                                        </span>

                                        <div className="dot"></div>

                                    </div>

                                    <h3>
                                        {member.name}
                                    </h3>

                                    <p>
                                        {member.role}
                                    </p>

                                    <button>
                                        View Profile
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
<div className="founder-card">

                        <div className="founder-left">

                            <img
                                src="/images/team/Chairman.jpeg"
                                alt=""
                            />

                        </div>

                        <div className="founder-right">

                            <div className="founder-badge">
                                Chairman • AFLISH GROUP
                            </div>

                            <h2>
                                Mr. Ishhaque Naqvi
                            </h2>

                            <h4>
                                Visionary Entrepreneur & Technology Leader
                            </h4>

                            <p>
                                Mr. Ishhaque Naqvi is the Chairman of Aflish Services
                                Private Limited, recognized for leadership in
                                entrepreneurship, technology, and strategic business growth.
                            </p>

                            <p>
                                With expertise in Economics, Business Administration,
                                and Information Technology, he has successfully led
                                impactful ventures across India.
                            </p>

                            <button>
                                View Profile
                            </button>

                        </div>

                    </div>
            </section>

            <Footer />
        </>
    )
}

export default Team