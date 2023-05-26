import React, { useEffect, useState } from "react";
import "../Feed/Feed.css";
import axios from "axios";
import LogoImageRequest from "../../assets/images/logoImageRequest.png";
import Loader from "../../Loader/Loader";
import secureLocalStorage from "react-secure-storage";

const Feed = () => {
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
 const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/donation/getAllDonationRequest"
      );
      setDonationRequests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const donateRequest = async (donationRequestId, index) => {
    try {
      const token = secureLocalStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      // Disable the button immediately
      setDonationRequests((prevRequests) =>
        prevRequests.map((request, i) =>
          i === index ? { ...request, disabled: true } : request
        )
      );

      setIsLoading(true); // Set isLoading to true

      const res = await axios.post(
        `http://localhost:8000/api/donation/donateToRequest/${donationRequestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the donationRequests state to mark the requested donation as "waiting for confirmation"
      setDonationRequests((prevRequests) =>
        prevRequests.map((request, i) =>
          i === index
            ? { ...request, status: "waiting for confirmation" }
            : request
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after the request is complete
    }
  };


  useEffect(() => {
    fetchData();
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
          <div className='req-card-grid'>
            {donationRequests &&
              donationRequests.map((item, index) => {
                const isRequestLoading = item.disabled === true;
                return (
                  <div className='request-card' key={index}>
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
                            <span>Case :</span> 4{" "}
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
                      {item.status === "waiting for confirmation" ? (
                      <div className="donate-request-btn-confirmation" disabled>
                        Waiting for Confirmation
                      </div>
                    ) : (
                      <button
                        className="donate-request-btn"
                        onClick={() => donateRequest(item._id, index)}
                        disabled={isRequestLoading}
                      >
                        {isRequestLoading ? "Submitting..." : "Donate"}
                      </button>
                    )}
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
