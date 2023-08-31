import React from 'react'
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Screens/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
      </div>
    
  )
}
export default App;

