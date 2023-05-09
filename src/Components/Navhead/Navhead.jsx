import React from "react";
import Logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
import { FaUserCircle } from 'react-icons/fa'
import '../Navhead/Navhead.css'


const Navhead = () => {
  return (
    <header className='navhead pre-header'>
     
        <div>
          <img src={Logo} alt='logo' className='logo-image-home' />
        </div>
        <div>
          <Navbar />
        </div>
      

      <div className="login-home">
        {" "}
        <FaUserCircle className="login-home-icon" /> <p>Login</p>
      </div>
    </header>
  );
};

export default Navhead;
