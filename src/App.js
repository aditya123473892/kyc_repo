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
import { Desktop } from './Screens/aktuform';
import Collegepredictor from './Screens/Collegepredictor'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Lab} />
          <Route path='/contact' component={Contact} />
          <Route path='/collegepredictor' component={Collegepredictor} />
        </Switch>
        <Footer />
        <Home />
        <Mem />
        <Lab />
        <Updates />
        <Team />
        <Desktop />
        <Mentorship />
      </div>
    </Router>
  );
}

export default App;
