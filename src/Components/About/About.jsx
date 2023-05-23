import React, { useEffect, useState } from "react";
import "../About/About.css";
import { FaUserPlus, FaTint, FaMobileAlt, FaSmileBeam } from "react-icons/fa";
import Loader from "../../Loader/Loader";
const About = () => {

  const [loading, setLoading] = useState(true);

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
    <div className='about-container'>
      <div className='about-title-container'>
        <div className='about-title'>
          <h1>What is this all about ?</h1>
        </div>
        <div className='about-sub-title'>
          <h3>
            We solve the problem of blood emergencies by connecting blood donors
            directly with people in blood need.
          </h3>
        </div>
      </div>
      <div className='about-details'>
        <h3>
          <span>About</span> VitalBlood
        </h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae interdum
          enim. Morbi dui sem, ultrices ut lectus ac, porta mollis nisl. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui
          nibh, vel rutrum turpis congue non. Nulla vitae interdum enim. Morbi
          dui sem, ultrices ut lectus ac, porta mollis nisl. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aenean pulvinar dui nibh, vel
          rutrum turpis congue non. Nulla vitae interdum enim. Morbi dui sem,
          ultrices ut lectus ac, porta mollis nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean pulvinar dui nibh, vel rutrum
          turpis congue non. Nulla vitae interdum enim. Morbi dui sem, ultrices
          ut lectus ac, porta mollis nisl.
        </p>
      </div>

      <div className='about-more-details'>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaUserPlus /> <h4>Register</h4>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh,
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaTint /> <h4>Post Blood request</h4>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh,
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaMobileAlt /> <h4>Get notified</h4>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh,
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaSmileBeam /> <h4>Save a Life</h4>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
