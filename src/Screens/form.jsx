
import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rank: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        console.log("Registration successful");
       
      } else {
        // Registration failed, handle errors
        console.error("Registration failed");    }
    } catch (error) {
      console.error("Error during registration:", error);
      
    }
  };

  return (
    <div className="form-container">
    <h2>Enter Your Information</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rank">Rank:</label>
        <input
          type="text"
          className="form-control"
          id="rank"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          placeholder="Enter your rank"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          className="form-control"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <button type="submit" className="btnn btn-primary">
        Submit
      </button>
    </form>
  </div>
  );
};
