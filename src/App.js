import React from 'react'
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Screens/Home';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      
      </div>
    
  )
}
export default App;

