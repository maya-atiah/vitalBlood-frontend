import React from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link
        to='/'
        className='navbar-divstyle'
        style={{ textDecoration: "none" }}
      >
        <div className='navbar-divstyle'>Home </div>
      </Link>
      <Link to='/donate' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Donate </div>
      </Link>
      <Link to='/request' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Request </div>
      </Link>
      <Link to='/feed' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Feed </div>
      </Link>
      <Link to='/volunteers' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Volunteers </div>
      </Link>
      <Link to='/about' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>About Us </div>
      </Link>
      <Link to='/about' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Contact Us </div>
      </Link>
    </div>
  );
};

export default Navbar;
