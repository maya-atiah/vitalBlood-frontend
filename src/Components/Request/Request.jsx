import React, { useState } from "react";
import "../Request/Request.css";
import ImageRequest from "../../assets/images/requestimage2.png";
import PopupRequest from "./PopupRequest";
import FormRequest from "./FormRequest";
const Request = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className='request-container'>
        <div className='request-image-container'>
          <div className='title-request-container'>
            <h1> Save Life</h1>
            <h3>
              with a one click you can submit a form and wait for a donors
            </h3>
            <button onClick={() => setButtonPopup(true)} className="request-hero-btn">Request</button>
            <PopupRequest trigger={buttonPopup} setTrigger={setButtonPopup}>
            <FormRequest/>
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
            dolor sit ametLorem ipsum dolor sit amet
          </p>
        </div>{" "}
        <div className='image-request-details'>
          <img src={ImageRequest} />
        </div>
      </div>
    </>
  );
};

export default Request;
