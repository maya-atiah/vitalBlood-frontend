import React, { useEffect, useState } from "react";
import "../Donate/Donate.css";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [hospital, setHospital] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();
  function isAuthenticated() {
    const token = secureLocalStorage.getItem("token");
    return token !== null;
  }

  //****fetch user details  */
  const fetchUser = async () => {
    const token = secureLocalStorage.getItem("token");

    try {
      const res = await axios.get(
        "https://vital-blood.onrender.com/api/user/getuserbyid",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
      setFirstName(res.data.details?.firstName);
      setLastName(res.data.details?.lastName);
      setBloodType(res.data.details?.blood_type);
      setPhoneNumber(res.data.details?.phoneNumber);
      // setImage(res.data.details.image)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //***Submit Donation */
  const handleSubmitDonation = async (event) => {
    event.preventDefault();

    try {
      const token = secureLocalStorage.getItem("token");
      localStorage.setItem("path", "donate");
      if (!token) {
        navigate("/login");
      }

      if (!firstName || !lastName || !dateOfBirth || !bloodType || !hospital) {
        toast.error("Please fill in all the required fields.", {
          className: "toast error",
        });
        return;
      }
      setIsloading(true);
      const response = await axios.post(
        "https://vital-blood.onrender.com/api/donation/createDonation",
        {
          firstName,
          lastName,
          dateOfBirth,
          bloodType,
          hospital,
          dateNeeded,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFirstName("");
      setLastName("");
      setDateOfBirth("");
      setBloodType("");
      setHospital("");
      setPhoneNumber("");
      setDateNeeded("");
      toast.success("Your blood request is submitted successfully", {
        className: "toast success",
      });
    } catch (error) {
      console.error(error);
      toast.error("There is something wrong. Try again", {
        className: "toast error",
      });
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    // Simulate loading for 3 seconds
    if (isAuthenticated()) {
      fetchUser();
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='donate-container'>
      <div className='donate-subcontainer'>
        <h1> Fill the form</h1>
        <form
          className='donate-form-container'
          // ref={form}
          onSubmit={handleSubmitDonation}
        >
          <div className='donate-container-label'>
            <label>First Name</label>
            <input
              name='firstName'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className='form--input'
              autoComplete='off'
              required={true}
            ></input>
          </div>
          <div className='donate-container-label'>
            <label>Last Name</label>
            <input
              name='lastName'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              autoComplete='off'
              required={true}
              className='form--input'
            ></input>
          </div>
          <div className='donate-container-label'>
            <label>Phone Number</label>
            <input
              placeholder='Phone Number'
              name='phoneNumber'
              className='form--input'
              // value={value}
              // onChange={setValue}
              value={phoneNumber}
              autoComplete='off'
              required={true}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='donate-container-label'>
            <label>Date of Birth</label>

            <input
              type='date'
              className='form--input'
              placeholder='Date of Birth'
              // className='form-input-signup'
              required={true}
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className='donate-container-label'>
            <label>Date for Donation</label>
            <input
              type='date'
              placeholder='Date for Donation'
              // className='form-input-signup'
              className='form--input'
              required={true}
              onChange={(e) => setDateNeeded(e.target.value)}
              value={dateNeeded}
            />
          </div>
          <div className='donate-container-label'>
            <label>Blood Type</label>
            <select
              className='select-doante'
              onChange={(e) => setBloodType(e.target.value)}
              value={bloodType}
              name='blood_type'
              required={true}
            >
              <option value='0'>Blood Type</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
            </select>
          </div>

          <div className='donate-container-label'>
            <label>Hospital</label>
            <input
              name='text'
              placeholder='Hospital'
              onChange={(e) => setHospital(e.target.value)}
              value={hospital}
              autoComplete='off'
              className='form--input'
              required={true}
            ></input>
          </div>
          <div>
            <button className='contact-btn'>
              {isLoading ? "Submitting..." : "Donate"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Donate;
