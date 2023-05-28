import React, { useEffect, useState } from "react";
import "../Donate/Donate.css";
import Loader from "../../Loader/Loader";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  //****fetch user details  */
  const fetchUser = async () => {
    const token = secureLocalStorage.getItem("token");
 localStorage.setItem("path", "donate");
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
      setFirstName(res.data.details.firstName);
      setLastName(res.data.details.lastName);
      setBloodType(res.data.details.blood_type);
      setPhoneNumber(res.data.details.phoneNumber);
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
      if (!token) {
        window.location.href = "/login";
      }

      if (!firstName || !lastName || !dateOfBirth || !bloodType || !hospital) {
        toast.error("Please fill in all the required fields.", {
          className: "toast error",
        });
        return;
      }
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:8000/api/donation/createDonation",
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
      console.log(response.data);

      setFirstName("");
      setLastName("");
      setDateOfBirth("");
      setBloodType("");
      setHospital("");
      setPhoneNumber('');
      setDateNeeded('');
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
    fetchUser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
          <div>
            <input
              name='firstName'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              autoComplete='off'
            ></input>
          </div>
          <div>
            <input
              name='lastName'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              autoComplete='off'
            ></input>
          </div>
          <div>
            <input
              placeholder='Phone Number'
              name='phoneNumber'
              // value={value}
              // onChange={setValue}
              value={phoneNumber}
              autoComplete='off'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              placeholderText='Date of Birth'
            />
          </div>
          <div>
            <DatePicker
              selected={dateNeeded}
              onChange={(date) => setDateNeeded(date)}
              placeholderText='Date for donation'
            />
          </div>
          <div>
            <select
              className='select-doante'
              onChange={(e) => setBloodType(e.target.value)}
              value={bloodType}
              name='blood_type'
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

          <div>
            <input
              name='text'
              placeholder='Hospital'
              onChange={(e) => setHospital(e.target.value)}
              value={hospital}
              autoComplete='off'
            ></input>
          </div>
          <div>
            <button className='contact-btn'>
              {isLoading ? "Subitting..." : "Donate"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Donate;
