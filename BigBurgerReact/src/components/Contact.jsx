import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact with Us</h1>
        <form>
          <label>Name Surname</label>
          <input
            type="text"
            name="name"
            placeholder="Please Enter Your Name and Surname..."
          />
          <label>Email</label>
          <input
            type="email"
            name="nemail"
            placeholder="Please Enter Your Email Adress..."
          />
          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Please Enter Your Message..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
