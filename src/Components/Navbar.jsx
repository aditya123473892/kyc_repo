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

        <div className="logo"> YOUR LOGO</div>
        <div>
            <ul className={menuOpen ?"open":""}>
                <li>Home</li>
                <li>College  Predictor </li>
                <li> CCP </li>
                <li>College Search</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            
            
        </div>
        
        <button className="menubutton" onClick={Cross}>
          menu
        </button>
        
        </div></div>
  )
}
