import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Register from "../../assets/images/uregister.png";
import Donate from "../../assets/images/donate-home.png";
import Request from "../../assets/images/request.png";
import About from "../../assets/images/about-home.png";
import ImageHome from "./ImageHome";
import Loader from "../../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (props) => {
    // Handle form submission logic here
  
    navigate("/donate");
  };

  const handleRedirect = () => {
    // Handle redirect logic here
   navigate("/feed");
   
  };
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handlescroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (showPopup) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [showPopup]);

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
      {showPopup && (
        <div className='popup'>
          <div className='popup-inner-donate'>
            <div className='popup-inner-donate-container'>
              <BsFillBalloonHeartFill className='icon-user-profile-heart' />
              <div className='first-text'>
                <p className='first-text-h1'> Submit a Donation form</p>
                <button onClick={handleFormSubmit}>Form</button>
              </div>
              <div className='second-text'>or</div>
              <div className='first-text'>
                <p className='first-text-h1'>Donate for a pending request</p>

                <button onClick={handleRedirect}>Feed</button>
              </div>
              <BsFillBalloonHeartFill className='icon-user-profile-heart' />
            </div>
            <div onClick={() => setShowPopup(false)} className='popup-close'>
              <AiOutlineClose />
            </div>
          </div>
        </div>
      )}
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
            {/* <Link to='/donate' style={{ textDecoration: "none" }}> */}
            <button className='home-btn-hero' onClick={handleShowPopup}>
              Donate
            </button>
            {/* </Link> */}
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
                <img src={Register} alt='Register' />
              </div>
              <h4>Register</h4>
              <p>
                To register as a donor, simply fill out the required information
                in our registration form. We value your privacy and ensure that
                your personal details are kept confidential. By becoming a
                registered donor, you can play a vital role in helping those in
                urgent need of blood transfusions.
              </p>
            </div>
          </Link>
          <Link to='/donate' style={{ textDecoration: "none" }}>
            <div className='details-imp-home'>
              <div>
                <img src={Donate} alt='Donate' />
              </div>
              <h4>Donate</h4>
              <p>
                Our platform offers two convenient ways to donate. You can fill
                out a donation form, providing your information to be matched
                with relevant requests.Alternatively, you can browse the "Feed"
                section to view active donation requests and click "Donate" for
                matching requests, notifying the requester of your willingness
                to help.
              </p>
            </div>
          </Link>
          <Link to='/request' style={{ textDecoration: "none" }}>
            <div className='details-imp-home'>
              <div>
                {" "}
                <img src={Request} alt='Request' />
              </div>
              <h4>Request</h4>
              <p>
                Once you submit the request while being logged into your
                account, it will be directly added to our feed. The feed serves
                as a platform for connecting donors with those in need. When
                your request is added to the feed, an email notification is sent
                to all users registered on our website.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='home-about-container'>
        <div>
          <img src={About} alt='About Vital BLood' />
        </div>
        <div className='home-about-description'>
          {" "}
          <h1>Our Mission </h1>
          <p>
            Our blood donation website aims to connect donors and recipients,
            providing two ways to donate. Users can either fill out a donation
            form, saving their data for matching with requests, or browse the
            feed to find relevant donation requests. Communication is
            facilitated through user profiles, allowing requesters to accept or
            reject requests. Our messaging system notifies users of new requests
            and updates on their offers. Privacy and security of user
            information are a top priority. Join our community and help save
            lives through the power of blood donation.
          </p>
          <Link to='/about' style={{ textDecoration: "none" }}>
            {" "}
            <button className='home-btn' onClick={handlescroll}>
              {" "}
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div>
        <ImageHome />
      </div>
      <div className='start-saving-lives'>
        <h2>Start Saving Lives</h2>
        {props.isLoggedIn === false ? (
          <Link to='/login' style={{ textDecoration: "none" }}>
            <button className='home-btn-bottom' onClick={handlescroll}>
              Register
            </button>
          </Link>
        ) : (
          <h4 className='volunteer'>
            You are a volunteer <BsFillBalloonHeartFill />{" "}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Home;
