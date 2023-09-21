import React from 'react'
import css from '../Components/footer.css'
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faWhatsapp, faTwitter, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import image from '../Components/kyc.png'

export default function footer() {
  return (
    <div>
      <footer className="footer">
  <div className="container_ flex_ spaced-between_">
    <div className="image_ flex_">
      <img src={image} />
    </div>
    <div className="middle_ flex_ col_">
      <div className="navbar_ flex_">
        <ul className="flex_ col_ left-align_">
          <li>ABOUT</li>
          <li>TERMS OF USE</li>
        </ul>
        <ul className="flex_ col_ left-align_">
          <li>PRIVACY POLICY</li>
          <li>CONTACT US</li>
        </ul>
        <ul className="flex_ col_ left-align_">
          <li>HELPS</li>
          <li>FAQS</li>
        </ul>
      </div>
      <div className="line_">
        <hr />
      </div>
    </div>
    <div className="links_ flex_ col_ left-align_">
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
  <div className="contact-info flex_">
    <p>Copyright ©2021-2022 knowyourcolleges.com-All rights reserved</p>
    <p>Privacy Policy</p>
  </div>
</footer>
    </div>
  )
}
