import React from 'react'
import css from '../Components/home.css'
import image from '../Components/image.png'
import image2 from '../Components/image-2.png'
import { Lab } from '../Screens/About'
import Updates from '../Components/home-components/Updates'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
      <div>
        <div className="container_1">
  <div className="section_1 flex_1">
    <div className="content_1 flex_1 col_1 left_align_1">
      <div className="heading_1 flex_1 col_1 left_align_1">
        <h1 className='h_1'>COLLEGE</h1>
        <h1 className='h_1'>ADMISSION</h1>
        <h1 className='h_1'>MADE <span className='span_1'>EASY</span></h1>
      </div>
      <div className="info_1">A platform that connects You with Mentors "DIRECTLY" from your dream colleges.Connect and ask every doubt' Get Clarity on your college selections</div>
      <button className="getstarted">Get Started</button>
    </div>
    <div className="image_1">
      <img src={image} />
    </div>
  </div>
  <div className="section_2 flex_1 col_1 left_align_1">
    <hr className="hr_1"/>
    <h2>HAPPY <span className='span_1'>STUDENTS</span></h2>
    <div className="reviews flex_1">
      <div className="review" />
      <div className="review" />
    </div>
  </div>
  <div className="section_3 flex_1">
    <div className="queries flex_1 col_1">
      <h1 className='h_1'>Get your queries</h1>
      <h1 className='h_1'><span className='span_1'>cleared directly</span></h1>
      <h1 className='h_1'>from your <span className='span_1'>college</span></h1>
      <h1 className='h_1'><span className='span_1'>seniors</span></h1>
      <button  className="needCounselling" > <Link to="f/contact"></Link></button>
     
    </div>
  <div className="img_2">
  <img src={image2} />
</div>
  </div></div>
 
 <Updates />


    </div>
    )
  }
  
