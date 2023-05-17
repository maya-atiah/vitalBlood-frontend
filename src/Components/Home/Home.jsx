import React from "react";
import "../Home/Home.css";
import Register from "../../assets/images/uregister.png";
import Donate from "../../assets/images/donate-home.png";
import Request from "../../assets/images/request.png";
import About from "../../assets/images/about-home.png";
import ImageHome from "./ImageHome";

const Home = () => {
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
          <div className="home-btn-hero-div">
            <button className='home-btn-hero'>Donate</button>
          </div>
        </div>
      </div>
      <div className='home-imp-container'>
        <div className='home-imp-title'>
          <h1>You are someone’s hero</h1>
          <h4>With a few steps you will make someone’s smile</h4>
        </div>
        <div className='steps-home-container'>
          <div className='details-imp-home'>
            <div>
              <img src={Register} />
            </div>
            <h4>Register</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
              interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
              nisl.
            </p>
          </div>
          <div className='details-imp-home'>
            <div>
              <img src={Donate} />
            </div>
            <h4>Donate</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
              interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
              nisl.
            </p>
          </div>
          <div className='details-imp-home'>
            <div>
              {" "}
              <img src={Request} />
            </div>
            <h4>Request</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
              interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
              nisl.
            </p>
          </div>
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
          <button className='home-btn'> Read more</button>
        </div>
      </div>
      <div>
        <ImageHome/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
