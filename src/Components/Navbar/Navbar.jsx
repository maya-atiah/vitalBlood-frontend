import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation(); // Import and use the useLocation hook

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const links = [
      "Home",
      "Request",
      "Donate",
      "Feed",
      "Volunteers",
      "About",
      "Contact",
    ];
    const matchingLink = links.find((link) =>
      currentPath.includes(link.toLowerCase())
    );
    setActiveLink(matchingLink || "");
  }, [location.pathname]);

  return (
    <div className='navbar'>
      <Link
        to='/'
        className={`navbar-divstyle ${activeLink === "Home" ? "active" : ""}`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Home")}
      >
        <div className='navbar-divstyle'>Home</div>
      </Link>
      <Link
        to='/request'
        className={`navbar-divstyle ${
          activeLink === "Request" ? "active" : ""
        }`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Request")}
      >
        <div className='navbar-divstyle'>Request </div>
      </Link>
      <Link
        to='/donate'
        className={`navbar-divstyle ${activeLink === "Donate" ? "active" : ""}`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Donate")}
      >
        <div className='navbar-divstyle'>Donate</div>
      </Link>

      <Link
        to='/feed'
        className={`navbar-divstyle ${activeLink === "Feed" ? "active" : ""}`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Feed")}
      >
        <div className='navbar-divstyle'>Feed </div>
      </Link>
      <Link
        to='/volunteers'
        className={`navbar-divstyle ${
          activeLink === "Volunteers" ? "active" : ""
        }`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Volunteers")}
      >
        <div className='navbar-divstyle'>Volunteers </div>
      </Link>
      <Link
        to='/about'
        className={`navbar-divstyle ${activeLink === "About" ? "active" : ""}`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("About")}
      >
        <div className='navbar-divstyle'>About Us </div>
      </Link>
      <Link
        to='/contact'
        className={`navbar-divstyle ${
          activeLink === "Contact" ? "active" : ""
        }`}
        style={{ textDecoration: "none" }}
        onClick={() => handleNavLinkClick("Contact")}
      >
        <div className='navbar-divstyle'>Contact Us </div>
      </Link>
    </div>
  );
};

export default Navbar;
