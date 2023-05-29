import React from 'react'
import Event1 from '../../assets/images/event_1.jpg';
import Event2 from '../../assets/images/event2.png';
import '../Home/ImageHome.css'
import { Link } from 'react-router-dom';

const ImageHome = () => {
  return (
    <div className='imagehome-container'>
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
            <p>Become an invaluable lifeline to someone in urgent need</p>
            <Link to='/donate' style={{ textDecoration: "none" }}>
              <button className='home-btn2'> Donate</button>
            </Link>
          </div>
        </div>
        <div className='single-team'>
          <img src={Event2} alt='request blood' />
          <div className='team-text'>
            <h3> Request A blood</h3>
            <p>Wait for someone to step forward and offer their assistance</p>
            <Link to='/request' style={{ textDecoration: "none" }}>
              <button className='home-btn2'> Request</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHome;
