import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = ({ onSignupClick }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState("");
 

  const errRef = useRef();
  const navigate = useNavigate();

  const fetchLogin = async () => {
  
    axios
      .post("https://vital-blood.onrender.com/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        secureLocalStorage.setItem("token", res.data.token);
        secureLocalStorage.setItem("loggedIn", true);
        setErrMsg("you are loggedin ");

         setTimeout(() => setErrMsg(""), 3000);
         toast.success("You are successfullylogged in ", {
           className: "toast success",
         });
        //**checking the path */
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

       
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          className: "toast error",
        });
        setErrMsg(error.response.data.message);
        setTimeout(() => setErrMsg(""), 3000);
        // errRef.current.focus();
      })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchLogin({ email, password });
  };

  return (
    <>
      <form className='form-signin' onSubmit={handleSubmit}>
        <div>
          {" "}
          <span className='signup'>Login</span>
        </div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live='assertive'
        >
          {errMsg}
        </p>
        <div>
          <input
            type='email'
            placeholder='Email address'
            className='form--input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='form--input'
          />
        </div>
        <div onClick={() => onSignupClick()} className='dont-have'>
          Signup!
        </div>
        <button className='form--submit'>Sign in</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signin;
