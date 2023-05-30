import axios from "axios";
import React, { useRef, useState } from "react";
import "../Login/Signup.css";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ onBackToLoginClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [marital_status, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [id_number, setid_Number] = useState("");
  const [blood_type, setblood_type] = useState("");
  const [nationality, setnationality] = useState("");
  const [emergency_number, setemergency_number] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [type, setType] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitted, setISSubmitted] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const errRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const fetchRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        className: "toast error",
      });
      setErrMsg("Passwords do not match");
      confirmPasswordRef.current.focus();
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        {
          firstName,
          lastName,
          email,
          password,
          location,
          phoneNumber,
          marital_status,
          gender,
          id_number,
          blood_type,
          nationality,
          emergency_number,
          type,
        }
      );

      secureLocalStorage.setItem("token", response.data.token);
      secureLocalStorage.setItem("loggedIn", true);

      toast.success("Successfully registered! You can login now", {
        className: "toast success",
      });

      setErrMsg("Successfully registered! You can login now");
      setISSubmitted(true);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setLocation("");
      setMaritalStatus("");
      setPhone("");
      setemergency_number("");
      setid_Number("");
      setType("");
      setnationality("");
      setGender("");
      setTimeout(() => setErrMsg(""), 3000);

      const path = localStorage.getItem("path");

      if (path === "request") {
      navigate("/request");
      localStorage.removeItem("path");
      window.location.reload();
    } else if (path === "donate") {
      navigate("/donate");
      localStorage.removeItem("path");
      window.location.reload();
    } else if (path === "feed") {
      navigate("/feed");
      localStorage.removeItem("path");
      window.location.reload();
    } else {
      navigate("/");
      window.location.reload();
    }
  
    } catch (error) {
      toast.error(error.response.data.message, {
        className: "toast error",
      });
      setErrMsg(error.response.data.message);
      setTimeout(() => setErrMsg(""), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        className: "toast error",
      });
      setErrMsg("Passwords do not match");
      confirmPasswordRef.current.focus();
      return;
    }

    fetchRegister();
  };
  return (
    <>
      <ToastContainer position='top-center' />
      <form className='form-signup' onSubmit={handleSubmit}>
        <div>
          {" "}
          <span className='signup'>SignUp</span>
        </div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live='assertive'
        >
          {errMsg}
        </p>
        <div className='signup-form-container'>
          <div className='signup-details'>
            {" "}
            <input
              type='text'
              placeholder='First Name'
              className='form-input-signup'
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type='text'
              placeholder='Last Name'
              className='form-input-signup'
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className='signup-details'>
            {" "}
            <input
              type='email'
              placeholder='Email address'
              className='form-input-signup'
              required
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='number'
              placeholder='Phone Number'
              className='form-input-signup'
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className='signup-details'>
            <input
              type='password'
              placeholder='Password'
              className='form-input-signup'
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{" "}
            <input
              type='password'
              placeholder='Confirm Password'
              className='form-input-signup'
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (password !== e.target.value) {
                  setErrMsg("Passwords do not match");
                } else {
                  setErrMsg("");
                }
              }}
              value={confirmPassword}
              ref={confirmPasswordRef}
            />
          </div>
          <div className='signup-details'>
            {" "}
            <select
              className='select-signup'
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value=''>Type of User</option>
              <option value='individual'>Individual</option>
              <option value='organization'>Organization</option>
            </select>
            <input
              type='text'
              placeholder='Location'
              className='form-input-signup'
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />{" "}
          </div>
          <div className='signup-details'>
            {" "}
            <select
              className='select-signup'
              onChange={(e) => setMaritalStatus(e.target.value)}
              value={marital_status}
            >
              <option value=''>Select Marital Status</option>
              <option value='Single'>Single</option>
              <option value='Married'>Married</option>
              <option value='Divorced'>Divorced</option>
            </select>
            <select
              className='select-signup'
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value=''>Gender</option>
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
            </select>
          </div>
          <div className='signup-details'>
            {" "}
            <input
              type='number'
              placeholder='Id-Number'
              className='form-input-signup'
              required
              onChange={(e) => setid_Number(e.target.value)}
              value={id_number}
            />
            <select
              className='select-signup'
              onChange={(e) => setblood_type(e.target.value)}
              value={blood_type}
            >
              <option value='0'>BLood Type</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
            </select>
          </div>
          <div className='signup-details'>
            {" "}
            <input
              type='text'
              placeholder='nationality '
              className='form-input-signup'
              required
              onChange={(e) => setnationality(e.target.value)}
              value={nationality}
            />
            <input
              type='number'
              placeholder='Emergency Number'
              className='form-input-signup'
              required
              onChange={(e) => setemergency_number(e.target.value)}
              value={emergency_number}
            />
          </div>
        </div>
        <div onClick={() => onBackToLoginClick()} className='dont-have'>
          Back to login?
        </div>
        <button className='form--submit'>Sign up</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signup;
