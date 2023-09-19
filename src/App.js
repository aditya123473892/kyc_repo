import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Team from './Components/Team';
import { Mem } from './Screens/members';
import { Lab } from './Screens/About';

import Updates from './Components/home-components/Updates';
import Navbar from './Components/Navbar';
import Mentorship from './Components/Mentorship';
import Contact from './Screens/Contact';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Lab} /> 
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      
        
        <Footer />
       
      </div>
    </Router>
  );

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
