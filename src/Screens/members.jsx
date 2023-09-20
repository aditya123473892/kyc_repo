import React from "react";
import "./members.css";

export const Mem = () => {
  return (
    <div className="centered-names">
      <div className="team-box">
        <div className="heading" align="center"><br></br>Graphics And Designing Team</div>
        <div className="label">
          <p className="graphnames">
            Ananya Srivastava
            <br />
            Riya Arora
            <br />
            Suraj Kumar
            <br />
            Radhika Gupta
            <br />
            Ashad Muneer
          </p>
        </div>
      </div>

      <div className="team-box">
        <div className="heading">Development Team</div>
        <div className="label">
          <p className="devnames">
            Aditya Thakur
            <br />
            Yashika Mehndiratt
            <br />
            Anuj Mishra
          </p>
        </div>
      </div>

      <div className="team-box">
        <div className="heading">Content Team</div>
        <div className="label">
          <p className="contnames">
            Rishabh Bhajpai
            <br />
            Shreyash Sharma
            <br />
            Aditya Pandey
            <br />
            Ashish Kothari
          </p>
        </div>
      </div>
    </div>
  );
};
