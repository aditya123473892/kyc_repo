import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="footer">
  <div className="container flex spaced-between">
    <div className="image flex">
      <img src="kyc.png" alt />
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
      <h1>GET OUR</h1>
      <h1>ASSISTANCES</h1>
      <ul className="social-icons flex">
        <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
        <li><a href="#"><i className="fa-brands fa-whatsapp" /></a></li>
        <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-envelope" /></a></li>
      </ul>
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
