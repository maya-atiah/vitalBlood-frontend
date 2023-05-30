import React, { useEffect, useState } from "react";
import "../About/About.css";
import { FaUserPlus, FaTint, FaMobileAlt, FaSmileBeam } from "react-icons/fa";
import Loader from "../../Loader/Loader";
import { BsFillBalloonHeartFill } from "react-icons/bs";
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
          <span>About</span> VitalBlood{" "}
          <BsFillBalloonHeartFill className='save-life' />
        </h3>
        <p>
          {" "}
          Looking back into a tough situation we had experienced as a family
          searching for blood donations for our sick grandmother.<br></br>
          <span className='span2-about'>
            Keeping track of such a lifesaver volunteer was a struggle!{" "}
          </span>{" "}
          <br></br>
          Five months ago, my grandmother was diagnosed with an urgent
          intestinal surgery, and the doctor asked for blood. Unfortunately, the
          hospital was unable to serve this need, so we started to call many
          organizations-in specific, we asked,{" "}
          <span className='span2-about'>
            “Who is responsible for such a call?”
          </span>
          . <br></br>We called the Red Cross, blood bank and some organizations,
          whose reply was to wait for them to meet our needs while few
          volunteers answered the call on the spot although it was difficult to
          find the same blood group “O-“. My grandmother did the surgery, but
          death was her fate. <br></br>It was a reason why I established this
          blog that serves the quest to change someone’s life. <br></br>
          <span className='span3-about'>
            As a blood donor, you can show your support of the lifesaving
            mission with your generous blood donations, and patients will be so
            grateful!
          </span>
        </p>
      </div>

      <div className='about-more-details'>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaUserPlus /> <h4>Register</h4>
          </div>
          <p>
            {" "}
            We value your privacy and ensure that your personal details are kept
            confidential.
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaTint /> <h4>Post Blood request</h4>
          </div>
          <p>
            {" "}
            If you or someone you know requires blood, our platform allows you
            to submit a request for blood donation.
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaMobileAlt /> <h4>Get notified</h4>
          </div>
          <p>
            {" "}
            You will receive an emails whenever there is a new request. Also
            when donating to a specific request you just wait for acceptance or
            rejection emails to reach you.
          </p>
        </div>
        <div className='about-more-details-cards'>
          <div className='about-more-title'>
            <FaSmileBeam /> <h4>Save a Life</h4>
          </div>
          <p>
            {" "}
            Once you find a request that you would like to fulfill, you can
            indicate your willingness to donate and coordinate with the
            requester.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
