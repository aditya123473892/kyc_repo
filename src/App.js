import React from 'react'
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
// import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer'
import Team from './Components/Team'
import { Mem } from './Screens/members';
import { Lab } from './Screens/About';
import Updates from './Components/home-components/Updates'
import { Desktop } from './Screens/aktuform';
import Navbar from './Components/Navbar'
import Mentorship from './Components/Mentorship'
function App() {
  return (
    <div>
       <Navbar></Navbar> 
      <Home></Home>
      <Mem></Mem>
      <Lab></Lab>
      <Updates></Updates>
      <Team></Team>
      <Desktop></Desktop>
      <Footer></Footer>
      <Mentorship></Mentorship>
    </div>
    
  )
}
export default App;

