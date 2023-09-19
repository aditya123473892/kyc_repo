import React from 'react'
import css from '../Components/mentorship.css'
export default function Mentorship() {
  return (
    <div className='mentorship flex_4 col_4'>
        <div className="frame flex_4">
            <div className="video_conference flex_4 col_4">
                <img src="" alt="" />
                <p>Complete counseling mentorship</p>
            </div>
            <div className="building flex_4 col_4">
                <img src="" alt="" />
                <p>Get Your College</p>
            </div>
            <div className="support flex_4 col_4">
                <img src="" alt="" />
                <p>One on One Support</p>
            </div>
            <div className="updates flex_4 col_4">
                <img src="" alt="" />
                <p>News & Update</p>
            </div>
        </div>
        <div className="benefits flex_4 col_4">
            <h1>BENEFITS OF <span className="span_4">PERSONAL MENTORSHIP</span></h1>
            <ul>
                <li>Direct mentorship from the mentor of the colleges you re targeting</li>
                <li>Best college preference list according to your rank</li> 
                <li>Live sessions to resolve your doubts </li>
                <li>Updates of all the important notices and deadlines of college admissions</li>
                <li>Most Authentic & Real Life Information of All Colleges. </li>
            </ul>
        </div>
        <div className="enroll_now">
            <button>ENROLL NOW</button>
        </div>
    </div>
  )
}
