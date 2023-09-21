import React, { useState } from 'react';
import '../Components/Nav.css';
import { Link } from 'react-router-dom';
// import { FaOutdent } from "react-icons/fa6";
// import 'boxicons'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const[icon,setIcon] = useState("menu");

  const Cross = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
    menuOpen ? setIcon("x"):setIcon("menu");
  };
  
  return (
    <div>
      <div className="nav">
        <div className="logo"></div>
        <div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/personalmentor" className="nav-link">
                Personal Mentor
              </Link>
            </li>
            <li>
              <Link to="/collegepredictor" className="nav-link">
                College Predictor
              </Link>
            </li>
            <li>
              <Link to="/compare-colleges" className="nav-link">
                Compare Colleges
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
               Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li>
              <button  className=" button">
                College Search
              </button>
            </li>
          </ul>
        </div>
        <button className="menubutton" onClick={Cross}>
          {/* <FaOutdent /> */}
        <box-icon className="menu-icon" name={icon} color="white" size="md"></box-icon>
        </button>
      </div>
    </div>
  );
}