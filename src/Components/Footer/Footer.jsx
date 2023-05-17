import React from "react";
import "../Footer/Footer.css";
import Logo from "../../assets/images/logo.png";
import { FaPhone } from 'react-icons/fa'
import {FaRegEnvelopeOpen} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-div'>
        {" "}
        <img src={Logo} alt='logo' className='footer-logo' />
      </div>
      <div className='footer-container-details'>
        <div className='footer-title1'>
          <div>Join the Donation</div>
          <div>Request</div>
          <div>Donate</div>
          <div>Feed</div>
          <div>Volunteers</div>
        </div>
        <div className='footer-title1'>
          <div>Quick Links</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className='footer-title2'>
          <div>Get in Touch</div>
          <div className='footer-social-contact'>
            {" "}
            <div>
              <FaPhone />
            </div>
            <div> +961 3 096 433</div>
          </div>
          <div className='footer-social-contact'>
            <div>
              <FaRegEnvelopeOpen />
            </div>
            <div>maya.atiah.99@gmail.com</div>
          </div>
        </div>

        <div className='footer-title1-mobile'>
        
          <div className='footer-social-contact-mobile'>
            {" "}
            <div>
              <FaPhone />
            </div>
        
            <div>
              <FaRegEnvelopeOpen />
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
