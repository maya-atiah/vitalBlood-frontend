import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Loader from "../../Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  
  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleBackToLoginClick = () => {
    setIsLogin(true);
  };

  

   useEffect(() => {
     // Simulate loading for 3 seconds
     setTimeout(() => {
       setLoading(false);
     }, 2000);
   }, []);

   if (loading) {
     return <Loader />;
   }

  return (
    <>
      <ToastContainer/>
      <div className='login-container'>
        <div className='login-subContainer'>
          {isLogin ? (
            <Signin onSignupClick={handleSignupClick} />
          ) : (
            <Signup
              onBackToLoginClick={handleBackToLoginClick}
              setIsLogin={setIsLogin}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
