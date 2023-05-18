import React, { useState } from 'react';
import '../Navbar/NavbarMobile.css';
import { FaAlignRight, FaRegTimesCircle } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const NavbarMobile = () => {

  const [open, setOpen] = useState(false);
  
  const hamburgerIcon = (
    <FaAlignRight className='hamburger ' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <AiOutlineClose className='hamburger' onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

   const animatedForm = { opacity: 0,y:-30 };
   const animatedTo = { opacity: 1, y:0};
  return (
    <div>
      {open ? closeIcon : hamburgerIcon}
      <div className='navbar-mobile-container '>
        {open && (
          <div className='navlink-mobile'>
            <div className='one'>
              <Link
                to='/'
                className='navbar-divstyle'
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Home{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/donate' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Donate{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/request' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Request{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/feed' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Feed{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/volunteers' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Volunteers{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/about' style={{ textDecoration: "none" }}>
                <motion.div
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  About Us{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/contact' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='navbar-divstyle'
                >
                  Contact Us{" "}
                </motion.div>
              </Link>
            </div>
            <div className='one'>
              <Link to='/login' style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => closeMobileMenu()}
                  initial={animatedForm}
                  animate={animatedTo}
                  className='login-home-mobile'
                >
                  {" "}
                  {/* <FaUserCircle className='login-home-icon' /> */}
                  Login
                </motion.div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMobile
