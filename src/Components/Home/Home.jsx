import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Register from "../../assets/images/uregister.png";
import Donate from "../../assets/images/donate-home.png";
import Request from "../../assets/images/request.png";
import About from "../../assets/images/about-home.png";
import ImageHome from "./ImageHome";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";

const Home = () => {

      const [loading, setLoading] = useState(true);

   useEffect(() => {
     // Simulate loading for 3 seconds
     setTimeout(() => {
       setLoading(false);
     }, 1000);
   }, []);

   if (loading) {
     return <Loader />;
  } 
  
  return (
    <div className='home-container'>
      <div className='image-container'>
        <div className='home-titile-details'>
          <h3>Donate blood, save life </h3>
          <div>
            <h1>VITAL BLOOD</h1>
          </div>
          <div>
            <h2>“ Together, we can make a difference in someone's life.”</h2>
          </div>
          <div className='home-btn-hero-div'>
            <Link to='/donate' style={{ textDecoration: "none" }}>
              <button className='home-btn-hero'>Donate</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='home-imp-container'>
        <div className='home-imp-title'>
          <h1>You are someone’s hero</h1>
          <h4>With a few steps you will make someone’s smile</h4>
        </div>
        <div className='steps-home-container'>
          <Link to='/login' style={{ textDecoration: "none" }}>
            <div className='details-imp-home'>
              <div>
                <img src={Register} />
              </div>
              <h4>Register</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
                interdum enim. Morbi dui sem, ultrices ut lectus ac, porta
                mollis nisl.
              </p>
            </div>
          </Link>
          <Link to='/donate' style={{ textDecoration: "none" }}>
            <div className='details-imp-home'>
              <div>
                <img src={Donate} />
              </div>
              <h4>Donate</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
                interdum enim. Morbi dui sem, ultrices ut lectus ac, porta
                mollis nisl.
              </p>
            </div>
          </Link>
          <Link to='/request' style={{ textDecoration: "none" }}>
            <div className='details-imp-home'>
              <div>
                {" "}
                <img src={Request} />
              </div>
              <h4>Request</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
                interdum enim. Morbi dui sem, ultrices ut lectus ac, porta
                mollis nisl.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='home-about-container'>
        <div>
          <img src={About} />
        </div>
        <div className='home-about-description'>
          {" "}
          <h1>Lorem ipsum dolor </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
            interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
            nisl. pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
            interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
            nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
            interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
            nisl.
          </p>
          <Link to='/about' style={{ textDecoration: "none" }}>
            {" "}
            <button className='home-btn'> Read more</button>
          </Link>
        </div>
      </div>
      <div>
        <ImageHome />
      </div>
      <div className='start-saving-lives'>
        <h2>Start Saving Lives</h2>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <button className='home-btn-bottom'>Register</button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
