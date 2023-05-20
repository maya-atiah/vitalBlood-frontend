// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import secureLocalStorage from "react-secure-storage";
// import "../UserProfile/UserProfile.css";
// import LogoImageRequest from "../../assets/images/logoImageRequest.png";
// import { BsFillBalloonHeartFill } from "react-icons/bs";
// import { FaUser } from "react-icons/fa";

// const UserProfile = () => {
//   const [user, setUser] = useState({
//     // existing user data
//   });

//   const [updatedUser, setUpdatedUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//     location: "",
//     marital_status: "",
//     gender: "",
//     id_number: "",
//     blood_type: "",
//     nationality: "",
//     emergency_number: "",
//     image: "",
//   });

//   const fetchUser = async () => {
//     // fetch user data from the server
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const updateUser = async () => {
//     const token = secureLocalStorage.getItem("token");
//     try {
//       const res = await axios.put(
//         "http://localhost:5000/api/user/update",
//         updatedUser,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("User updated successfully:", res.data);
//       setUser(res.data);
//       setUpdatedUser({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         phoneNumber: "",
//         location: "",
//         marital_status: "",
//         gender: "",
//         id_number: "",
//         blood_type: "",
//         nationality: "",
//         emergency_number: "",
//         image: "",
//       });
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setUpdatedUser((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div>
//       <div>
//         {user && (
//           <div key={user._id} className="user-container">
//             <div className="user-image-container">
//               {/* user profile image */}
//               <h2>
//                 <FaUser className="user-profile-icon-user" />{" "}
//                 {user.details_id.firstName} {user.details_id.lastName}
//               </h2>
//               <h4>Email: {user.details_id.email}</h4>
//               <button className="update-button" onClick={updateUser}>
//                 Update
//               </button>
//             </div>
//             <div className="user-details-container">
//               {/* user details */}
//               <div className="user-details">
//                 <div className="user-details-titles">
//                   <h4>
//                     <span>Phone Number:</span>{" "}
//                     <input
//                       type="text"
//                       name="phoneNumber"
//                       value={updatedUser.phoneNumber}
//                       onChange={handleInputChange}
//                     />
//                   </h4>
//                   <h4>
//                     <span>Location:</span>{" "}
//                     <input
//                       type="text"
//                       name="location"
//                       value={updatedUser.location}
//                       onChange={handleInputChange}
//                     />
//                   </h4>
//                   <h4>
//                     <span>Marital Status:</span>{" "}
//                     <input
//                       type="text"
//                       name="marital_status"
//                       value={updatedUser.marital_status}
//                       onChange={handleInputChange}
//                     />
//                   </h4>
//                   <h4>
//                     <span>Gender:</span>{" "}
//                     <input
//                       type="text"
//                       name="gender"
//                       value={updatedUser
