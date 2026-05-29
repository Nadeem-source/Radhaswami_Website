// src/components/Team/Team.jsx

import React from 'react'
import './Team.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const teamData = [
    // {
    //     id: 1,
    //     name: 'MR. MOHD SHAHNAWAZ',
    //     role: 'C. E. O.',
    //     image: '/images/team/shanewaz.jpg',
    // },

    {
        id: 1,
        name: 'MS. NUZHAT NAQVI',
        role: 'Director',
        image: '/images/team/NuzhatNaqvi.jpg',
    },

    {
        id: 2,
        name: 'MR. MOHD KAIF',
        role: 'Director',
        image: '/images/team/Kaif.jpg',
    },
    {
        id: 3,
        name: 'MR. MD DANISH',
        role: 'Delhi Incharge',
        image: '/images/team/Danish.jpg',
    },
    {
        id: 4,
        name: 'MS. SNEHA',
        role: 'Office Management Officer',
        image: '/images/team/Sneha.jpg',
    },
    {
        id: 5,
        name: 'MS. AQSA',
        role: 'Office  ->  Assistant',
        image: '/images/team/AQSA.png',
    },
    {
        id: 6,
        name: 'MR. MOHD AAMIR',
        role: 'Media In-Charge',
        image: '/images/team/aMIR.png',
    },

    {
        id: 7,
        name: 'MR. MOHD GULZAR',
        role: 'District Co-Ordinator (Moradabad)',
        image: '/images/team/gulzar.jpg',
    },
    {
        id: 8,
        name: 'MR. UMAIR AHMAD SHAMSI',
        role: 'District Co-Ordinator (Rampur)',
        image: '/images/team/Umair.png',
    },
    {
        id: 9,
        name: 'MR. MOHD FAIZ KHAN',
        role: 'District Co-Ordinator (Bareilly)',
        image: '/images/team/faiz.jpg',
    },



]

const Team = () => {
    return (
        <>
            <Navbar scrollValue={60} />

            <section className="team-section">

                <div className="team-top-blur left-blur"></div>
                <div className="team-top-blur right-blur"></div>

                <div className="team-wrapper">

                    {/* HEADER */}

                    <div className="team-header">

                        <span>
                            OUR LEADERSHIP TEAM
                        </span>

                        <h1>
                            DEDICATED PEOPLE BEHIND OUR MISSION
                        </h1>

                        <p>
                           Our leadership team is committed to empowering communities, promoting humanity, and creating meaningful impact through service, compassion, and responsible leadership.
                        </p>

                    </div>
                    
                    <div className="top-leaders">
                        {/* CHAIRMAN */}
                        <div className="chairman-card">

                            <div className="founder-left">

                                <img
                                    src="/images/team/Sir.jpg"
                                    alt=""
                                />

                            </div>

                            <div className="founder-right">

                                <div className="founder-badge">
                                    CHAIRMAN • AFLISH GROUP
                                </div>

                                <h2>
                                    MR. ISHHAQUE NAQVI
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
                                impactful ventures across India in social welfare sector.
                            </p>

                                <button>
                                    View Profile
                                </button>

                            </div>
                        </div>
                        {/* CEO */}
<div className="chairman-card">

    <div className="founder-left">

        <img
            src="/images/team/shanewaz.jpg"
            alt=""
        />

    </div>

    <div className="founder-right">

        <div className="founder-badge">
            CEO • AFLISH GROUP
        </div>

        <h2>
            MR. MOHD SHAHNAWAZ
        </h2>

        <h4>
            Chief Executive Officer & Strategic Leader
        </h4>

        <p>
            Mr. Mohd Shahnawaz leads AFLISH GROUP with a strong vision
            focused on innovation, management, and operational excellence.
        </p>

        <p>
            He is committed to empowering communities and driving
            impactful growth through leadership and dedication and supporting
    social welfare initiatives, community development, and
    charitable programs across different regions.
        </p>

        <button>
            View Profile
        </button>

    </div>

</div>
                    </div>
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
                                            {member.name}
                                        </span>

                                        <div className="dot"></div>

                                    </div>

                                    <h3>
                                        {member.role}
                                    </h3>

                                    <p>
                                        AFLISH GROUP OF COMPANIES
                                    </p>

                                    <button>
                                        View Profile
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Team