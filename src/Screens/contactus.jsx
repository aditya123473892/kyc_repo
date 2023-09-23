import React from 'react'
import css from './contactus.css'
import axios from 'axios';
import { useState } from 'react';
export default function Contactme() {
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', {
        email,
        mobileno,
      });
  
      if (response.data === "exist") {
        console.log('User already exists');
      } else if (response.data === "success") {
        alert("registration succesful")
        console.log('Registration successful');
        // You can also redirect the user to a login page or perform other actions here.
      } else {
        console.log('Registration failed with an unknown response:', response.data);
      }
    } catch (error) {
      console.log('Axios Error:', error);
      alert('registration unnsucessful')
    }
  }
  return (
    <div className='container_8'>
      <div className="contactme flex_8">
        <div className="form_8 flex_8 col_8">
            <img src="" alt="" />
            <p>Fill your details & get assisted by Team KYC</p>
            <input type="text" placeholder='Name' />
            <input   type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input   type="number"
            placeholder="mobileno."
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}/>
            <input type="number" placeholder='Rank'/>
            <input type="submit" value="Submit" onClick={submit}/>
        </div>
        <div className="content_8 flex_8 col_8">
            <h1>WE'LL <apn className="span_8">REACH</apn> </h1>
            <h1>YOU SOON</h1>
        </div>
      </div>
    </div>
  )
}
