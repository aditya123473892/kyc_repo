import React from 'react'
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
// import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer'
import { Lab } from './Screens/About';
import Updates from './Components/home-components/Updates'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div>
       <Navbar></Navbar> 
      <Home></Home>
      <Lab></Lab>
      <Updates></Updates>
      <Footer></Footer>
      </div>
    
  )
}
export default App;

