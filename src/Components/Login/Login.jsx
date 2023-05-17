import React, { useState } from "react";
import "../Login/Login.css";
import Signin from "./Signin";
import Signup from "./Signup";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleBackToLoginClick = () => {
    setIsLogin(true);
  };

  return (
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
  );
};

export default Login;
