import axios from 'axios';
import React, { useRef, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';

const Signin = ({ onSignupClick }) => {


   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();
  
   const fetchLogin = async () => {
     axios
       .post(
         "http://localhost:8000/api/user/login",
         { email, password }
       )
       .then((res) => {
         secureLocalStorage.setItem("token", res.data.token);
        //  secureLocalStorage.setItem("role", res.data.role);
         secureLocalStorage.setItem("loggedIn", true);
         setErrMsg("you are loggedin ");

         setTimeout(() => setErrMsg(""), 3000);
         window.location.reload();
       })
       .catch((error) => {
        setErrMsg(error.response.data.message);
        setTimeout(() => setErrMsg(""), 3000);
         // errRef.current.focus();
       });
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     await fetchLogin({ email, password });
   };


  return (
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
        Don't hava an account?
      </div>
      <button className='form--submit'>Sign in</button>
    </form>
  );
};

export default Signin
