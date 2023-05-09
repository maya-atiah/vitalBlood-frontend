import React from "react";
import "../Home/Home.css";
import HeroImage from "../../assets/images/homeimage.png";
import { FaUserCheck } from "react-icons";
import Register from "../../assets/images/uregister.png";
import Donate from "../../assets/images/donate-home.png";
import Request from "../../assets/images/request.png";
import About from "../../assets/images/about-home.png";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='image-container'>
        <div className='home-titile-details'>
          <div>
            <h1>VITAL BLOOD</h1>
          </div>
          <div>
            <h2>“ Together, we can make a difference in someone's life.”</h2>
          </div>
          <div>
            <button className='home-btn'>Donate</button>
          </div>
        </div>
        <img src={HeroImage} alt='hero' className='image-top-home' />
      </div>
      <div className='home-imp-container'>
        <div className='home-imp-title'>
          <h1>You are someone’s hero</h1>
          <h3>With a few steps you will make someone’s smile</h3>
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
        <div className="home-about-description">
          {" "}
          <h1>Lorem ipsum dolor </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
            interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
            nisl. pulvinar dui nibh, vel rutrum turpis congue non. Nulla vitae
            interdum enim. Morbi dui sem, ultrices ut lectus ac, porta mollis
            nisl.
          </p>
          <button className='home-btn'> Read more</button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
