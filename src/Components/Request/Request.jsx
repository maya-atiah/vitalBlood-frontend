import React, { useEffect, useState } from "react";
import "../Request/Request.css";
import ImageRequest from "../../assets/images/requestimage2.png";
import PopupRequest from "./PopupRequest";
import FormRequest from "./FormRequest";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";

const Request = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const handleClickSubmit = () => {
    const token = secureLocalStorage.getItem("token");
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
     }, 1000);
   }, []);

   if (loading) {
     return <Loader />;
   }
  
  return (
    <>
      <div className='request-container'>
        <div className='request-image-container'>
          <div className='title-request-container'>
            <h1>Save Life</h1>
            <h3>With a one click you can submit a form and wait for donors</h3>
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
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ametLorem
            ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit amet ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit amet
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
