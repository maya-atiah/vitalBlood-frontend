import axios from "axios";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import '../UserProfile/UserProfile.css'
import LogoImageRequest from "../../assets/images/logoImageRequest.png";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { FaUser } from 'react-icons/fa'




const UserProfile = () => {


    const [isupdated,setIsUpdated]=useState(false)
    const [user, setUser] = useState({
      _id: "64649e6d56aef2a0ad30655d",
      details_id: {
        _id: "64649e6d56aef2a0ad30655b",
        firstName: "layla",
        lastName: "AS",
        email: "layla@gmail.com",
        password:
          "$2a$10$XIjRasCX5rtOvJwhPEq4m.ODupYHt37Qq3nwjl6CVF2cHjEMO2BTG",
        phoneNumber: 1233,
        location: "beirut",
        marital_status: "single",
        gender: "female",
        id_number: 123456,
        blood_type: "O+",
        nationality: "lebanese",
        emergency_number: 124,
        user_id: "64649e6d56aef2a0ad30655d",
        image:
          "https://firebasestorage.googleapis.com/v0/b/vital-blood.appspot.com/o/files%2Ftestp.jpeg%20%20%20%20%20%20%202023-5-19%2014%3A59%3A16?alt=media&token=bf6c8315-e6ac-4abc-9366-80728ed4e66a",
        is_deleted: false,
        __v: 0,
      },
      type: "individual",
    });

  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
    marital_status: "",
    gender: "",
    id_number: "",
    blood_type: "",
    nationality: "",
    emergency_number: "",
    image: "",
  });
    const fetchUser = async () => {
      const token = secureLocalStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/getuserbyid",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    useEffect(() => {
      fetchUser();
    }, []);
  
  
    const updateUser = async () => {
      const token = secureLocalStorage.getItem("token");
      try {
        const res = await axios.put(
          "http://localhost:5000/api/user/update",
          updatedUser,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User updated successfully:", res.data);
        setUser(res.data);
        setUpdatedUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          location: "",
          marital_status: "",
          gender: "",
          id_number: "",
          blood_type: "",
          nationality: "",
          emergency_number: "",
          image: "",
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };

    const handleInputChange = (e) => {
      setUpdatedUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  return (
    <div>
      <div>
        {user && (
          <div key={user._id} className='user-container'>
            <div className='user-image-container'>
              {user.details_id.image ? (
                <img
                  className='user-profile'
                  src={user.details_id.image}
                  alt='User Image'
                />
              ) : (
                <img
                  className='user-profile'
                  src={LogoImageRequest}
                  alt='No Image'
                />
              )}
              <h2>
                <FaUser className='user-profile-icon-user' />{" "}
                {user.details_id.firstName} {user.details_id.lastName}
              </h2>
              <h4>Email: {user.details_id.email}</h4>
              <button
                className='update-button'
                onClick={() => setIsUpdated(true)}
              >
                Edit
              </button>
            </div>
            <div className='user-details-container'>
              <h5> " Together, we can make a difference in someone's life "</h5>
              <div className='user-details'>
                <div className='user-details-titles'>
                  {" "}
                  <h4>
                    <span>Phone Number</span>
                    {user.details_id.phoneNumber}{" "}
                  </h4>
                  <h4>
                    <span>Location</span> {user.details_id.location}
                  </h4>
                  <h4>
                    <span>Marital Status </span>
                    {user.details_id.marital_status}
                  </h4>
                  <h4>
                    <span>Gender </span> {user.details_id.gender}
                  </h4>
                </div>
                <div className='user-details-titles'>
                  {" "}
                  <h4>
                    <span>Id Number </span> {user.details_id.id_number}
                  </h4>
                  <h4>
                    <span>Blood Type</span>
                    {user.details_id.blood_type}
                  </h4>{" "}
                  <h4>
                    <span>Nationality</span> {user.details_id.nationality}
                  </h4>
                  <h4>
                    <span>Emergency Number </span>
                    {user.details_id.emergency_number}
                  </h4>
                </div>
              </div>
              <div>
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                <BsFillBalloonHeartFill className='icon-user-profile-heart' />
              </div>
            </div>
          </div>
        )}
      </div>
      {isupdated && (
        <div>
          {user && (
            <div key={user._id} className='user-container'>
              <div className='user-image-container'>
                {/* user profile image */}
                <h2>
                  <FaUser className='user-profile-icon-user' />{" "}
                  {user.details_id.firstName} {user.details_id.lastName}
                </h2>
                <h4>Email: {user.details_id.email}</h4>
                <button className='update-button' onClick={updateUser}>
                  Update
                </button>
              </div>
              <div className='user-details-container'>
                {/* user details */}
                <div className='user-details'>
                  <div className='user-details-titles'>
                    <h4>
                      <span>Phone Number:</span>{" "}
                      <input
                        type='text'
                        name='phoneNumber'
                        value={updatedUser.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Location:</span>{" "}
                      <input
                        type='text'
                        name='location'
                        value={updatedUser.location}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Marital Status:</span>{" "}
                      <input
                        type='text'
                        name='marital_status'
                        value={updatedUser.marital_status}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Gender:</span>{" "}
                      <input
                        type='text'
                        name='gender'
                        value={updatedUser.gender}
                        onChange={handleInputChange}
                      />
                    </h4>
                  </div>
                  <div className='user-details-titles'>
                    <h4>
                      <span>ID Number:</span>{" "}
                      <input
                        type='text'
                        name='id_number'
                        value={updatedUser.id_number}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Blood Type:</span>{" "}
                      <input
                        type='text'
                        name='blood_type'
                        value={updatedUser.blood_type}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Nationality:</span>{" "}
                      <input
                        type='text'
                        name='nationality'
                        value={updatedUser.nationality}
                        onChange={handleInputChange}
                      />
                    </h4>
                    <h4>
                      <span>Emergency Number:</span>{" "}
                      <input
                        type='text'
                        name='emergency_number'
                        value={updatedUser.emergency_number}
                        onChange={handleInputChange}
                      />
                    </h4>
                  </div>
                </div>
                <div>
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                  <BsFillBalloonHeartFill className='icon-user-profile-heart' />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
