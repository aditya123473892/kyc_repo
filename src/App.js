import React from 'react'
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
// import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer'
import Updates from './Components/home-components/Updates'
function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Home></Home>
      <Updates></Updates>
      <Footer></Footer>
      </div>
    
  )
}
export default App;

