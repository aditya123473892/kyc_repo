import React from 'react';
import '../Screens/contactus.css'
//import qrCodeImage from '../path-to-your-qr-code-image.png';

export default function Contact() {


  const pageStyle = {
    backgroundColor: '#f0f0f8', // Replace with your desired background color
    top: '0px',
    padding: '20px',

  };
  const formStyle = {
    border: '1px solid black', // Dark solid border
    padding: '20px',
  };
  return (
    <div className="containerr " style={pageStyle}>
      <div className="col-md-12">
        <h2 className="text-center">Enroll Now</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="submit.php" method="POST" className=" p-4 rounded" style={formStyle}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="whatsapp" className="form-label">
                WhatsApp Number:
              </label>
              <input type="tel" className="form-control" id="whatsapp" name="whatsapp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="rank" className="form-label">
                JEE Main Rank:
              </label>
              <input type="text" className="form-control" id="rank" name="rank" required />
            </div>
            <div className="mb-3">
              <label htmlFor="percentile" className="form-label">
                JEE Main Percentile:
              </label>
              <input type="text" className="form-control" id="percentile" name="percentile" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mentor" className="form-label">
                Mentor's College:
              </label>
              <input type="text" className="form-control" id="mentor" name="mentor" required />
            </div>
            <div className="mb-3">
              <label htmlFor="preferred-college" className="form-label">
                Preferred College:
              </label>
              <input type="text" className="form-control" id="preferred-college" name="preferred-college" required />
            </div>
            <div className="mb-3">
              <label htmlFor="doubts" className="form-label">
                Basic Doubts:
              </label>
              <textarea className="form-control" id="doubts" name="doubts" rows="4" required></textarea>
            </div>
            <div className="mb-3">

            </div>
            <div className="mb-3">
              <label htmlFor="qr-code" className="form-label">
                QR Code Image:
              </label>
              <div>
                <img alt="QR Code" className="img-fluid" />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btnn ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
