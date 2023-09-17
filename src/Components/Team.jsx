import React from 'react'
import css from '../Components/team.css'
import image_3 from '../Components/ceo.png'
import image_4 from '../Components/coo.jpg'
import image_5 from '../Components/cmo.jpg'
import image_6 from '../Components/cto.jpg'

export default function Team() {
  return (
    <div>
      <div className="kyc_team  flex_3 col_3">
        <div className="h_2 flex_3 col_3">
          <h1>TEAM <span className='span_2'>KYC</span></h1>
          <p className='h_1'>"INOVATORS Turning Idea Into REALITIES"</p>
        </div>
        <div className="team_2 flex_3">
          <div className="image_3">
            <img src={image_3} />
          </div>
          <div className="CEO box_2 flex_3">
              <div className="info_2 flex_3 col_3">
                  <h2>Shreeyanshu Jaiswal</h2>
                  <h3><span className="span_2">C.E.O & Co-founder</span></h3>
                  <p>Innovation is my motivation</p>
                  <p>An M.B.B.S Grad working extra hours to revolutionize the edtech industry & bridge up the remainings. </p>
                  <p><span className="span_2">"Mentoring students & Innovating for the world is what I know better than A.I. will ever be."</span> </p>
              </div>
          </div>
        </div>
        <div className="COO box_2 flex_3">
            <div className="image_4">
              <img src={image_4}/>
            </div>
            <div className="info_2 flex_3 col_3">
                <h2>Sarthak Gupta</h2>
                <h3><span className="span_2">Co-founder & C.O.O</span></h3>
                <p>Engineer By Chance Entrepreneur by Choice.</p>
                <p>A B.Tech Grad with proficiency in human networking & operations.</p>
                <p><span className="span_2">"When it comes to scalability, networking & operations are the ones who take a lead."</span>  </p>
            </div>
        </div>
        <div className="CMO box_2 flex_3">
            <div className="image_5">
              <img src={image_5}/>
            </div>
            <div className="info_2 flex_3 col_3">
                <h2>Anish Sharma</h2>
                <h3><span className="span_2">Co-founder & C.M.O</span></h3>
                <p>Entrepreneurship is what flows in my veins.</p>
                <p>A B.tech Grad with excellence in marketting & trust building through content creation.</p>
                <p><span className="span_2">"People trust what they see, I am master at portraying what everyone wants to see."</span>  </p>
            </div>
        </div>
        <div className="CTO box_2 flex_3">
            <div className="image_6">
              <img src={image_6}/>
            </div>
            <div className="info_2 flex_3 col_3">
                <h2>Aditya Srivastava</h2>
                <h3><span className="span_2">C.T.O</span></h3>
                <p>Expressing myself through the codes is my way of living.</p>
                <p>A B.Tech Grad with an attitude of taking up tough tasks & building my way through it.</p>
                <p><span className="span_2">"The world has gone into metaverse & I know the codes to play with it."</span></p>
            </div>
        </div>
      
      </div>
    </div>
  )
}
