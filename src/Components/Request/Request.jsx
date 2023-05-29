import React, { useEffect, useState } from "react";
import "../Request/Request.css";
import ImageRequest from "../../assets/images/requestimage2.png";
import PopupRequest from "./PopupRequest";
import FormRequest from "./FormRequest";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Request = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const handleClickSubmit = () => {
    const token = secureLocalStorage.getItem("token");
    localStorage.setItem("path", "request");
    console.log('token',token)
    if (!token) {
      toast.error("You should login");
      window.location.href = "/login";
      return;
    
    }
    setButtonPopup(true);
  };

   useEffect(() => {
  
     // Simulate loading for 3 seconds
     setTimeout(() => {
       setLoading(false);
     }, 2000);
   }, []);
  
  useEffect(() => {
    if (buttonPopup)
      document.body.style.overflowY = 'hidden';
    else
      document.body.style.overflowY= 'scroll';

   }, [buttonPopup]);


   if (loading) {
     return <Loader />;
   }
  
  return (
    <>
      <div className='request-container'>
        <div className='request-image-container'>
          <div className='title-request-container'>
            <h1>Save Life</h1>
            <div className='save-life'>
              <h3>
                With a one click you can submit a form and wait for donors
                <BsFillBalloonHeartFill className='save-life' />
              </h3>{" "}
            </div>

            <button onClick={handleClickSubmit} className='request-hero-btn'>
              Request
            </button>
            <PopupRequest trigger={buttonPopup} setTrigger={setButtonPopup}>
              <FormRequest setTrigger={setButtonPopup} />
            </PopupRequest>
          </div>
        </div>
      </div>

      <div className='request-second-container'>
        <div className='details-request'>
          <h1>
            Efficient Blood Donation Requests
          </h1>
          <p>
            Our request page allows users to fill out a form with patient
            details, date needed, and hospital information. Once the request is
            submitted and the user is logged in, it is immediately added to the
            feed. An email is sent to all website users, sharing the patient's
            details and the requester's contact information. Users can then wait
            for potential donors to view the request in the feed and offer their
            assistance. Our platform aims to expedite the donation process and
            connect those in need with willing donors.{" "}
            <BsFillBalloonHeartFill className='save-life' />
          </p>
        </div>
        <div className='image-request-details'>
          <img src={ImageRequest} alt='Request' />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Request;
