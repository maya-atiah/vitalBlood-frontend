import React, { useEffect, useState } from "react";
import "../Feed/Feed.css";
import axios from "axios";
import RequestImage from "../../assets/images/event_1.jpg";
import LogoImageRequest from "../../assets/images/logoImageRequest.png";

const Feed = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/donation/getAllDonationRequest"
      );
      setDonationRequests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(donationRequests);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='feed-container'>
      <div className='feed-title-container'>
        <div className='feed-title'>
          <h1>Pending Requests</h1>
        </div>
        <div className='about-sub-title'>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar dui nibh,
          </h3>
        </div>
      </div>
      <div>
        <div className='request-card-details'>
          <div className='loader-request'></div>
          <div className='req-card-grid'>
            {donationRequests &&
              donationRequests.map((item) => {
                return (
                  <div className='request-card' key={item._id}>
                    <div className='user-details-request'>
                      <div className='user-details-request-info'>
                        <h3>User Details:</h3>
                        <h4>
                          <span>User Name:</span>{" "}
                          {item.receiver_id.details_id.firstName}{" "}
                          {item.receiver_id.details_id.lastName}
                        </h4>
                        <h4>
                          {" "}
                          <span>Phone Number:</span>{" "}
                          {item.receiver_id.details_id.phoneNumber}
                        </h4>
                        <h4>
                          {" "}
                          <span>Email:</span>{" "}
                          {item.receiver_id.details_id.email}
                        </h4>
                      </div>
                      <div>
                        {item.receiver_id.details_id.image ? (
                          <img
                            className='img-request'
                            src={item.receiver_id.details_id.image}
                            alt='User Image'
                          />
                        ) : (
                          <img
                            className='img-request'
                            src={LogoImageRequest}
                            alt='No Image'
                          />
                        )}
                      </div>
                    </div>
                    <div className='patient-details-info'>
                      <div>Patient Details</div>
                      <div className='patient-details-blood-container'>
                        <div className='patient-details-blood1'>
                          <h4>
                            <span>Blood Type: </span>{" "}
                            {item.details.bloodRequest.bloodType}
                          </h4>
                          <h4>
                            <span>Date Needed:</span>
                            {new Date(
                              item.details.bloodRequest.dateNeeded
                            ).toLocaleDateString()}
                          </h4>
                          <h4>
                            <span>Hospital:</span>{" "}
                            {item.details.bloodRequest.hospital}
                          </h4>
                          <h4>
                            <span>Level Of Emergency:</span>{" "}
                            {item.details.bloodRequest.levelOfEmergency}
                          </h4>
                        </div>
                        <div className='patient-details-blood2'>
                          <h4>
                            <span>Patient Name:</span>{" "}
                            {item.details.patientInfo.firstName}{" "}
                            {item.details.patientInfo.lastName}
                          </h4>

                          <h4>
                            {" "}
                            <span>Case :</span>{" "}
                            {item.details.patientInfo.caseType}
                          </h4>
                          <h4>
                            <span>Case Details: </span>
                            {item.details.patientInfo.caseDetails}
                          </h4>
                          <h4>
                            <span>Date Of Birth:</span>{" "}
                            {new Date(
                              item.details.patientInfo.dateOfBirth
                            ).toLocaleDateString()}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className='donate-request-btn-div'>
                      <button className='donate-request-btn'>Donate</button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>{/* <img src={RequestImage} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
