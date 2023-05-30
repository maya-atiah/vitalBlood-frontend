import axios from "axios";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import "../UserProfile/UserProfile.css";
import LogoImageRequest from "../../assets/images/logoImageRequest.png";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Loader from "../../Loader/Loader";
import DonationsList from "../../DonationList/DonationList";
import PopupUserEdit from "./PopupUserEdit";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [donations, setDonations] = useState([]);
  const [donationToDelete, setDonationToDelete] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [marital_status, setMaritalStatus] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [location, setLocation] = useState("");
  const [emergency_number, setEmergencyNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function isAuthenticated() {
    const token = secureLocalStorage.getItem("token");
    return token !== null;
  }
 
  //****fetch user details  */
  const fetchUser = async () => {
    const token = secureLocalStorage.getItem("token");

    try {
      const res = await axios.get(
        "http://localhost:8000/api/user/getuserbyid",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
      setPhoneNumber(res.data.details.phoneNumber);
      setMaritalStatus(res.data.details.marital_status);
      setIdNumber(res.data.details.id_number);
      setLocation(res.data.details.location);
      setEmergencyNumber(res.data.details.emergency_number);
      // setImage(res.data.details.image)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  /**fetch donations */
  const fetchDonations = async () => {
    const token = secureLocalStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:8000/api/donation/getDonationsByUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      setDonations(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  //***delete donation by id  */
  const deleteDonation = async (donationId) => {
    const token = secureLocalStorage.getItem("token");

    try {
      setLoading(true)
      await axios.delete(
        `http://localhost:8000/api/donation/deleteDonationById/${donationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Remove the deleted donation from the donations state
      setDonations((prevDonations) =>
        prevDonations.filter((donation) => donation._id !== donationId)
      );
      setDonationToDelete(""); // Reset the donationToDelete state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };


  // ***Update user information
  const updateUser = async () => {
    const token = secureLocalStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("phoneNumber", phoneNumber);
      formData.append("id_number", id_number);
      formData.append("marital_status", marital_status);
       formData.append("location", location);
      formData.append("emergency_number", emergency_number);
      if (image) {
        formData.append("image", image);
      }
 setIsLoading(true)
      const response = await axios.put(
        "http://localhost:8000/api/user/updateUserProfile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update the user state with the updated user information
      setUser(response.data);

      // Reset the form fields and image state
      setPhoneNumber(response.data.details?.phoneNumber);
      setMaritalStatus(response.data.details?.marital_status);
      setIdNumber(response.data.details?.id_number);
      setLocation(response.data.details?.location);
      setEmergencyNumber(response.data.details?.emergency_number);
      setImage(null);

      // Show success message or perform any other actions
    
    } catch (error) {
      console.error("Error updating user information:", error);
    } finally {
      setIsLoading(false)
    }
  };

  
  useEffect(() => {
    if (show)
      document.body.style.overflowY = 'hidden';
    else
      document.body.style.overflowY= 'scroll';

   }, [show]);
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUser();
      setShow(false);
      window.location.reload()
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      fetchUser();
    }
    fetchDonations();

    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);


  if (loading) {
    return <Loader />;
  }

   



  return (
    <div>
      <div>
        {user && (
          <div key={user._id} className='user-container'>
            <div className='user-image-container'>
              <h5> " Together, we can make a difference in someone's life "</h5>
              {user.details?.image ? (
                <img
                  className='user-profile'
                  src={user.details?.image}
                  alt='User Profile'
                />
              ) : (
                <img
                  className='user-profile'
                  src={LogoImageRequest}
                  alt='No Profile'
                />
              )}
              <h2>
                <FaUser className='user-profile-icon-user' />{" "}
                {user.details_id?.firstName} {user.details_id?.lastName}
              </h2>
              <h4>Email: {user.details_id?.email}</h4>
              <button className='update-button' onClick={() => setShow(true)}>
                Edit
              </button>
              <div>
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
              </div>
            </div>

            <div className='user-details-container'>
              <div className='test1'>
                <div>
                  <div className='user-details'>
                    <h4>User Details</h4>
                    <div className='user-details-titles'>
                      {" "}
                      <p>
                        <span>Phone Number</span>
                        {user.details?.phoneNumber}{" "}
                      </p>
                      <p>
                        <span>Location</span> {user.details?.location}
                      </p>
                      <p>
                        <span>Marital Status </span>
                        {user.details?.marital_status}
                      </p>
                      <p>
                        <span>Gender </span> {user.details?.gender}
                      </p>{" "}
                      <p>
                        <span>Id Number </span> {user.details?.id_number}
                      </p>
                      <p>
                        <span>Blood Type</span>
                        {user.details?.blood_type}
                      </p>{" "}
                      <p>
                        <span>Nationality</span> {user.details?.nationality}
                      </p>
                      <p>
                        <span>Emergency Number </span>
                        {user.details?.emergency_number}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='test1'>
                <div className='donationlist-container'>
                  <h4> My Requests</h4>
                  <div className='donation-container-user'>
                    <div className='donation-container-user-card'>
                      {donations.length === 0 ? (
                        <div>No data</div>
                      ) : (
                        <>
                          {donations
                            .filter((donation) => donation.type === "request")
                            .map((item) => {
                              return (
                                <div
                                  key={item._id}
                                  className='donation-subcontainer-user'
                                >
                                  <div>
                                    <p>
                                      {" "}
                                      <span>Blood Type: </span>
                                      {item.details?.bloodRequest.bloodType}
                                    </p>
                                    <p>
                                      {" "}
                                      <span>Date Needed:</span>
                                      {new Date(
                                        item.details?.bloodRequest.dateNeeded
                                      ).toLocaleDateString()}
                                    </p>
                                    <p>
                                      <span>Hospital:</span>
                                      {item.details?.bloodRequest.hospital}
                                    </p>
                                    <p>
                                      <span>Level Of Emergency:</span>
                                      {
                                        item.details?.bloodRequest
                                          .levelOfEmergency
                                      }
                                    </p>

                                    <p>
                                      <span> Number Of units</span>
                                      {item.details?.bloodRequest.numberOfUnits}
                                    </p>
                                    <div>
                                      {/* Delete button */}
                                      <button
                                        className='delete-button'
                                        onClick={() => deleteDonation(item._id)}
                                      >
                                      {loading ? 'Deleting' : 'Delete'}
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <p>
                                      <span>Patient Name:</span>{" "}
                                      {item.details?.patientInfo.firstName}{" "}
                                      {item.details?.patientInfo.lastName}
                                    </p>

                                    <p>
                                      {" "}
                                      <span>Case :</span> 4{" "}
                                      {item.details?.patientInfo.caseType}
                                    </p>
                                    <p>
                                      <span>Case Details: </span>
                                      {item.details?.patientInfo.caseDetails}
                                    </p>
                                    <p>
                                      <span>Date Of Birth:</span>{" "}
                                      {new Date(
                                        item.details.patientInfo.dateOfBirth
                                      ).toLocaleDateString()}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='donationlist-container'>
                <h4> Donation Request list</h4> <DonationsList />
              </div>
            </div>
          </div>
        )}
      </div>

      <PopupUserEdit trigger={show} setTrigger={setShow}>
        {user && (
          <div key={user._id} className='user-container-popup'>
            <div >
              <h4 className='title-user-popup'> User Edit Information</h4>
              <div className='user-details-container-popup'>
                {/* user details */}
                <form
                  className='user-details-popup'
                  onSubmit={handleSubmitUpdate}
                >
                  <div className='user-details-titles-popup'>
                    <div className='test1'>
                      <div>Phone Number:</div>{" "}
                      <input
                        type='text'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className='test1'>
                      <div>Location:</div>{" "}
                      <input
                        type='text'
                        name='location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className='test1'>
                      <div>Marital Status:</div>{" "}
                      <input
                        type='text'
                        name='marital_status'
                        value={marital_status}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                      />
                    </div>

                    <div className='test1'>
                      <div>ID Number:</div>{" "}
                      <input
                        type='text'
                        name='id_number'
                        value={id_number}
                        onChange={(e) => setIdNumber(e.target.value)}
                      />
                    </div>

                    <div className='test1'>
                      <div>Emergency Number:</div>{" "}
                      <input
                        type='text'
                        name='emergency_number'
                        value={emergency_number}
                        onChange={(e) => setEmergencyNumber(e.target.value)}
                      />
                    </div>
                    <div className='test1'>
                      <div>Image:</div>{" "}
                      <input
                        className='inputadd'
                        type='file'
                        onChange={(e) => {
                          const file = e.target.files[0];
                          // console.log(file); // Check the file object in the console
                          setImage(file);
                        }}
                      />
                    </div>
                  </div>
                  <div className='submit-user-profile-div'>
                    <button className='submit-user-profile'>{isLoading ? "Submitting" : "Submit"}</button>
                  </div>
                </form>
                <div className='balloons-user-popup'>
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                </div>
              </div>
            </div>
          </div>
        )}
      </PopupUserEdit>
    </div>
  );
};

export default UserProfile;
