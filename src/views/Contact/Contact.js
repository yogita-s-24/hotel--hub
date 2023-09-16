import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="container">Contact Us</h1>
      <form>
        <div className="form-container">
          <div className="contact">
            <label>Name*</label>
            <br /> <input type="text" />
            <br />
            <label>Email*</label>
            <br />
            <input type="email" />
            <br />
            <label>Phone*</label>
            <br /> <input type="text" />
            <br />
            <label>Subject*</label>
            <br /> <input type="text" />
            <br />
            <label>Comments*</label> 
            <br />
            <input type="text-message" className="comment" />
          </div>

          <div className="map">

            
          </div>
        </div>
      </form>
    </>
  );
}
