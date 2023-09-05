import React from 'react'
import css from '../home-components/updates.css'
import image from '../home-components/kyc.png'
export default function Home() {
  return (
    <div>
      <div className="container flex col gap left-align">
  <div className="heading">
    <h1>LATEST UPDATES &amp; INFORMATIONS</h1>
  </div>
  <div className="middle flex">
    <div className="section1 flex col gap">
      <div className="exam-updates gray text-design">Exam Updates</div>
      <div className="result-updates gray text-design">Result Updates</div>
    </div>
    <div className="section2 flex col gap">
      <div className="circulars gray text-design">Circulars</div>
      <div className="counselling gray text-design">Counselling or Admission Updates </div>
    </div>
    <div className="section3">
      <img src={image}/>
    </div>
  </div>
</div>

    </div>
  )
}
