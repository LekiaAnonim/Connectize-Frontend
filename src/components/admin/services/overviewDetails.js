import React from 'react'
import { Bookmark, Location } from '../../../icon'

export default function OverviewDetails() {
  return (
    <div className='bg-white p-4 rounded pb-5'>
        <div className='d-flex align-items-center justify-content-around'>
            <img src='images/BMWProfilePic.png'/>
            <div>
                <h5> Senior Process Engineer - Oil Refinery</h5>
                <div className='my-2'>
                    <button className='rounded-pill px-2 border border-none'>Engineering</button>
                    <button className='rounded-pill mx-2 px-2 border border-none'>Chemical Engineering</button>
                    <button className='rounded-pill px-2 border border-none'>Industrial Engr</button>
                </div>
                <div className='d-flex'>
                    <div className='me-2'><Location/></div>
                    <p> PetroEnergy Corp - Houston, TXtv</p>
                </div>
            </div>
            <div style={{marginTop:"-10%"}}><Bookmark/></div>
        </div>
        <div className='mt-5'>
            <div>
                <h5>Qualifications</h5>
                <ul>
                    <li>Bachelor's degree in Chemical Engineering or related field.</li>
                    <li>Minimum of 7 years of experience in process engineering within the oil and gas industry.</li>
                    <li>Expertise in process simulation tools and software.</li>
                    <li>Proven track record in process optimization and troubleshooting.</li>
                    <li>In-depth knowledge of refinery operations, equipment, and safety protocols.</li>
                    <li>Strong communication and leadership skills.</li>
                </ul>
            </div>
            <div>
                <h5>Responsibility</h5>
                <ul>
                    <li>Analyze and optimize refinery processes to improve efficiency and reduce environmental impact.</li>
                    <li>Collaborate with cross-functional teams to implement process improvements.</li>
                    <li>Conduct process simulations and modeling to identify bottlenecks and enhance performance.</li>
                    <li>Provide technical support and troubleshooting for refinery operations.</li>
                    <li>Ensure compliance with safety regulations and industry standards.</li>
                </ul>
            </div>
            <div>
                <p>
                    Join PetroEnergy Corp and be part of a team committed to driving innovation and sustainability in the energy sector. Apply now to contribute to the future of our dynamic and growing company.
                    To apply, please submit your resume and cover letter to careers@petroenergy.com with the subject line "Senior Process Engineer Application - [Your Full Name]." Applications will be accepted until [closing date].
                </p>
            </div>
        </div>
    </div>
  )
}

