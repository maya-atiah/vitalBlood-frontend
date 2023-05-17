import React from "react";
import Logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import "../Navhead/Navhead.css";
import { Link } from "react-router-dom";
import NavbarMobile from "../Navbar/NavbarMobile";

const Navhead = () => {
  return (
    <header className='navhead pre-header'>
      <div>
        <img src={Logo} alt='logo' className='logo-image-home' />
      </div>
      <div className='nav-navbar'>
        <Navbar />
      </div>

      <Link to='/login' style={{ textDecoration: "none" }}>
        <div className='login-home'>
          {" "}
          <FaUserCircle className='login-home-icon' /> <p>Login</p>
        </div>
      </Link>
      <div className='nav-mobile'>
        {" "}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navhead;
