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
  const [user, setUser] = useState({
    _id: "64649e6d56aef2a0ad30655d",
    details_id: {
      _id: "64649e6d56aef2a0ad30655b",
      firstName: "layla",
      lastName: "AS",
      email: "layla@gmail.com",
      password: "$2a$10$XIjRasCX5rtOvJwhPEq4m.ODupYHt37Qq3nwjl6CVF2cHjEMO2BTG",
      phoneNumber: 1233,
      location: "beirut",
      marital_status: "single",
      gender: "female",
      id_number: 123456,
      blood_type: "O+",
      nationality: "lebanese",
      emergency_number: 124,
      user_id: "64649e6d56aef2a0ad30655d",
      image:'https://firebasestorage.googleapis.com/v0/b/vital-blood.appspot.com/o/files%2Ftestp.jpeg%20%20%20%20%20%20%202023-5-19%2014%3A59%3A16?alt=media&token=bf6c8315-e6ac-4abc-9366-80728ed4e66a',
      is_deleted: false,
      __v: 0,
    },
    type: "individual",
  });

  const fetchUser = async () => {
    const token = secureLocalStorage.getItem("token");
    try {
      const res = await axios.get(
        "http://localhost:5000/api/user/getuserbyid",
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
    window.location.reload();
    props.setIsLoggedIn(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <header className='navhead pre-header'>
      <div>
        <img src={Logo} alt='logo' className='logo-image-home' />
      </div>
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
              {user.details_id.image ? (
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
        />
      </div>
    </header>
  );
};

export default Navhead;
