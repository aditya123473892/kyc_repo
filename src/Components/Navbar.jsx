import React from 'react'
import '../Components/Nav.css'
import { useState } from 'react'

export default function Navbar() {


  const[menuOpen,setMenuOpen]=useState(false)
  const Cross=()=>{
   setMenuOpen(!menuOpen)

  }
  return (
    <div><div className="nav">

        <div className="logo"> </div>
        <div>
            <ul className={menuOpen ?"open":""}>
                <li>Home</li>
                <li>Personal Mentor </li>
                <li>College Predictor</li>
                <li>Compare Colleges</li>
                <li>Ask Doubts</li>
                <li>About us</li>
                <button className='button'>College Search</button>
            </ul>
            
            
        </div>
       
        <button className="menubutton" onClick={Cross}>
          menu
        </button>
        
        
        </div></div>
  )
}
