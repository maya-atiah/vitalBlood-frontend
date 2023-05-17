import React, { useState } from "react";
import ContactImage from "../../assets/images/hands.svg";
import "../Contact/Contact.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Contact = () => {

  const [value, setValue] = useState();
  
  return (
    <div className='contact-container'>
      <div className='image-contact-container'>
        {" "}
        <img src={ContactImage}/>
        {/* <h1>With a few steps you will make someone’s smile</h1> */}
      </div>
      <div className='form-contact-container'>
        {" "}
        <h2>
          <span>Fill</span> the form
        </h2>
        <form className='form-details-container'>
          <div>
            <label>First Name</label>
            <input placeholder='Enter your First Name'></input>
          </div>
          <div>
            <label>Last Name</label>
            <input placeholder='Enter your Last Name'></input>
          </div>
          <div>
            <label>Phone Number</label>
            <PhoneInput
              placeholder='Enter phone number'
              value={value}
              onChange={setValue}
              defaultCountry='LB'
            />
          </div>
          <div>
            <label>Email</label>
            <input placeholder='Enter your Email'></input>
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder='Write your message'></textarea>
          </div>
          <div>
            <button className='contact-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
