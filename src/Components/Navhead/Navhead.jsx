import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import "../Navhead/Navhead.css";
import { Link } from "react-router-dom";
import NavbarMobile from "../Navbar/NavbarMobile";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const Navhead = (props) => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const token = secureLocalStorage.getItem("token");
    try {
      const res = await axios.get(
        "http://localhost:8000/api/user/getuserbyid",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  console.log("user", user);

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload()
   
    props.setIsLoggedIn(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <header className='navhead pre-header'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <div>
          <img src={Logo} alt='logo' className='logo-image-home' />
        </div>
      </Link>
      <div className='nav-navbar'>
        <Navbar />
      </div>
      {props.isLoggedIn == false ? (
        <Link to='/login' style={{ textDecoration: "none" }}>
          <div className='login-home'>
            <button className='btn-login'>
              <FaUserCircle className='login-home-icon' />
              <div>Login</div>
            </button>
          </div>
        </Link>
      ) : (
        <div className='login-home-user-profile'>
          <div className='login-home'>
            <button className='btn-login' onClick={handleLogout}>
              <BiLogOut className='login-home-icon' />
              <div>Logout</div>
            </button>
          </div>
          <div>
            <Link to='/userProfile' style={{ textDecoration: "none" }}>
              {user && user.details_id.image ? (
                <img
                  className='img-navhead'
                  src={user.details_id.image}
                  alt='User Image'
                />
              ) : (
                <FaUserCircle className='login-home-icon-user' />
              )}
            </Link>
          </div>
        </div>
      )}

      <div className='nav-mobile'>
        <NavbarMobile
          isLoggedin={props.isLoggedIn}
          setIsLoggedIn={props.setIsLoggedIn}
          user={props.user}
        />
      </div>
    </header>
  );
};

export default Navhead;
