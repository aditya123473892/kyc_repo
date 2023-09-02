import React from 'react'
import css from '../Components/footer.css'
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faWhatsapp, faTwitter, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default function footer() {
  return (
    <div>
      <footer className="footer">
  <div className="container flex spaced-between">
    <div className="image flex">
      <img src="../kyc.png" />
    </div>
    <div className="middle flex col">
      <div className="navbar flex">
        <ul className="flex col left-align">
          <li>ABOUT</li>
          <li>TERMS OF USE</li>
        </ul>
        <ul className="flex col left-align">
          <li>PRIVACY POLICY</li>
          <li>CONTACT US</li>
        </ul>
        <ul className="flex col left-align">
          <li>HELPS</li>
          <li>FAQS</li>
        </ul>
      </div>
      <div className="line">
        <hr />
      </div>
    </div>
    <div className="links flex col left-align">
      <p>GET OUR</p>
      <p>ASSISTANCES</p>
      {/* <ul className="social-icons flex">
      <FontAwesomeIcon icon={faCoffee} />
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul> */}
    </div>
  </div>
  <div className="contact-info flex">
    <p>Copyright ©2021-2022 knowyourcolleges.com-All rights reserved</p>
    <p>Privacy Policy</p>
  </div>
</footer>
    </div>
  )
}
