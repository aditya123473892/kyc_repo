import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-page">
      <main className="divpoc-hero-section">
        <div className="divpoc-hero-section-bg">
          <div className="divpoc-hero-bg-h-wrapper">
            <div className="lhiwxm7rvuy3bpa26-intersectsv">
              <img
                className="lhiwxm7rvuy3bpa26-intersectsv-icon"
                alt=""
                src="/lhiwxm7rvuy3bpa26intersectsvg.svg"
              />
            </div>
            <div className="lhiwx1a4oe8tlu2pm-intersect-1">
              <img
                className="lhiwx1a4oe8tlu2pm-intersect-1-icon"
                alt=""
                src="/lhiwx1a4oe8tlu2pmintersect1svg.svg"
              />
            </div>
          </div>
        </div>
        <div className="divhero-abs-img-left-desktop">
          <div className="divcontactusflag">
            <div className="divcontent">
              <div className="lfiafs8ixu1y9c4bb-vectorsvg">
                <img
                  className="lfiafs8ixu1y9c4bb-vectorsvg-icon"
                  alt=""
                  src="/lfiafs8ixu1y9c4bbvectorsvg.svg"
                />
              </div>
              <div className="contact-us">Contact Us</div>
              
            </div>
          </div>
        </div>
        <div className="divpoc-hero-inner">
          <div className="divpoc-hero-left">
            <div className="divpoc-hero-text">
              <div className="ppoc-hero-title">
                <b className="college-admission-made-container">
                  <span className="happy-students-txt-container">
                    <span>{`College Admission Made  `}</span>
                    <span className="easy">easy</span>
                  </span>
                </b>
              </div>
              <div className="ppoc-hero-description" />
              <div className="a-platform-that-container">
                <span className="happy-students-txt-container">
                  <span>{`A platform that connect You with Mentors `}</span>
                  <b>“Directly”</b>
                  <span>{` from your dream colleges. Connect & Ask your every doubt’ Get Clarity  on your college selections.`}</span>
                </span>
              </div>
              <Button className="link" variant="primary">
                Get Started
              </Button>
            </div>
            <div className="divpoc-hero-blocks">
              <div className="divpoc-hero-separator" />
              <div className="divpoc-hero-separator1" />
              <div className="divpoc-hero-blocks-child" />
              <b className="happy-students">
                <span className="happy-students-txt-container">
                  <span>{`HAPPY `}</span>
                  <span className="students">STUDENTS</span>
                </span>
              </b>
            </div>
            <div className="divpoc-hero-left-child" />
          </div>
          <img className="img1-icon" alt="" src="/img1.svg" />
        </div>
        <img
          className="divpoc-hero-section-child"
          alt=""
          src="/rectangle-12.svg"
        />
        <div className="flex-container">
          <div className="divbannercopy">
            <div className="ph2d-6a82b601">
              <div className="get-your-queries-container">
                <span className="happy-students-txt-container">
                  <span>{`Get your queries `}</span>
                  <span className="easy">cleared directly</span>
                  <span> from your</span>
                  <span className="easy"> college senior</span>
                </span>
              </div>
            </div>
            <Button className="link1" variant="primary" size="lg">
              Need counseling
            </Button>
          </div>
        </div>
      </main>
      <a className="divhero-abs-img-right-desktop" />
    </div>
  );
};

export default Home;
