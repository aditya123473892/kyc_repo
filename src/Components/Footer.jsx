import React from 'react'
import css from '../Components/footer.css'
 import image from '../Components/kyc.png'
 import { FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";




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
            <div className="social-icons flex">
              <FaLinkedin fontSize={"2rem"}/>
              <FaWhatsapp fontSize={"2rem"}/>
              <FaTwitter fontSize={"2rem"}/>
              <FaEnvelope fontSize={"2rem"}/>
              {/* <FaWhatsapp color="#011f2b" size="1.5rem" />
              <FaTwitter color="#011f2b" size="1.5rem" />
              <FaEnvelope color="#011f2b" size="1.5rem" /> */}
              
            </div>
            {/* <ul className="social-icons flex">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin color="#011f2b" size="1.5rem" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin color="#011f2b" size="1.5rem" />

                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin color="#011f2b" size="1.5rem" />

                </a>
              </li>
              <li>
                <a href="mailto:example@example.com">
                  <FaLinkedin color="#011f2b" size="1.5rem" />

                </a>
              </li>
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