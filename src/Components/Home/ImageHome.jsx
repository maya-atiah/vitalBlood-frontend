import React, { useState } from 'react'
import Event1 from '../../assets/images/event_1.jpg';
import Event2 from '../../assets/images/event2.png';
import '../Home/ImageHome.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const ImageHome = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate=useNavigate()

    const handleShowPopup = () => {
      setShowPopup(true);

    };
  
   const handlescroll = () => {
     window.scrollTo(0, 0);
   };
  
  const handleRedirect = () => {
    // Handle redirect logic here
   
    navigate('/feed')
    handlescroll();
  };

   const handleFormSubmit = () => {
     // Handle form submission logic here
  
    navigate('/donate')
     handlescroll();
   };
  
  return (
    <div className='imagehome-container'>
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
      <div className='title-imagehome'>
        {" "}
        <h1>Join With Us And Save Life</h1>
        <h3>Roll up your sleeves and join the movement!</h3>
      </div>
      <div className='team-area'>
        <div className='single-team'>
          <img src={Event1} alt='donate blood' />

          <div className='team-text'>
            <h3> Donate A Blood</h3>
            <p>
              Be a vital lifeline for someone in critical need through blood
              donation
            </p>

            <button className='home-btn2' onClick={handleShowPopup}>
              {" "}
              Donate
            </button>
          </div>
        </div>
        <div className='single-team'>
          <img src={Event2} alt='request blood' />
          <div className='team-text'>
            <h3> Request A blood</h3>
            <p>Wait for someone to step forward and offer their assistance</p>
            <Link to='/request' style={{ textDecoration: "none" }}>
              <button className='home-btn2' onClick={handlescroll}> Request</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHome;
