import React from 'react'
import './Collegepredictor.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Collegepredictor() {
  return (
    <div className='choice_7 flex_7 col_7'>
      <div className="heading_7">
        <h1>PREDICT <span className="span_7">YOUR COLLEGE</span> ACCORDING TO YOUR RANK</h1>
      </div>
      <div className="section_7 flex_7 col_7">
      <div className="type flex_7 col_7">
            <h1>SELECT YOUR <span className="span_7">COUNSELLING</span> TYPE</h1>
            <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
            UPTAC/AKTU
              </Link></button>
              
            <button className="aktu">
            <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
            JOSSA(JEE MAINS)
              </Link></button>
              </button>
            <button className="aktu">
            <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
            JOSSA(JEE ADVANCE)
              </Link></button></button>
      </div>
      </div>
    </div>
  )
}