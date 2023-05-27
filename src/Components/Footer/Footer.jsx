import React from "react";
import "../Footer/Footer.css";
import Logo from "../../assets/images/logo.png";
import { FaPhone } from 'react-icons/fa'
import {FaRegEnvelopeOpen} from 'react-icons/fa'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-div'>
        {" "}
        <img src={Logo} alt='logo' className='footer-logo' />
      </div>
      <div className='footer-container-details'>
        <div className='footer-title1'>
          <div className='footer-first'>Join the Donation</div>
          <Link to='/request' style={{ textDecoration: "none" }}>
            <div className='footer-a'>Request</div>
          </Link>
          <Link to='/donate' style={{ textDecoration: "none" }}>
            <div className='footer-a'>Donate</div>
          </Link>
          <Link to='/feed' style={{ textDecoration: "none" }}>
            <div className='footer-a'>Feed</div>
          </Link>
          <Link to='/volunteers' style={{ textDecoration: "none" }}>
            <div className='footer-a'>Volunteers</div>
          </Link>
        </div>
        <div className='footer-title1'>
          <div className='footer-first'>Quick Links</div>
          <Link to='/about' style={{ textDecoration: "none" }}>
            <div className='footer-a'>About Us</div>
          </Link>
          <Link to='/contact' style={{ textDecoration: "none" }}>
            <div className='footer-a'>Contact Us</div>
          </Link>
        </div>
        <div className='footer-title2'>
          <div className='footer-first'>Get in Touch</div>
          <div className='footer-social-contact'>
            {" "}
            <div>
              <FaPhone />
            </div>
            <div>
              {" "}
              <a
                style={{ textDecoration: "none" }}
                className='footer-a'
                target='_blank'
                href='https://wa.me/'
              >
                +961 3 096 433
              </a>
            </div>
          </div>
          <div className='footer-social-contact'>
            <div>
              <FaRegEnvelopeOpen />
            </div>
            <div>
              {" "}
              <a
                href='mailto:maya.atiah.99@gmail.com'
                style={{ textDecoration: "none" }}
                className='footer-a'
              >
                maya.atiah.99@gmail.com
              </a>
            </div>
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
