import React, { useEffect, useState } from 'react'
import '../Donate/Donate.css'
import Loader from '../../Loader/Loader';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import { toast } from 'react-toastify';
import secureLocalStorage from 'react-secure-storage';


const Donate = () => {

  const [loading, setLoading] = useState(true);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodType, setBloodType] = useState("");
    const [hospital, setHospital] = useState("");
  
  
  const handleSubmitDonation = async (event) => {
    event.preventDefault();

    try {
      const token = secureLocalStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
      }

      if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !bloodType ||
        !hospital 
    
      ) {
        toast.error("Please fill in all the required fields.", {
          className: "toast error",
        });
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/donation/createBloodDonation",
        {
          firstName,
          lastName,
          dateOfBirth,
          bloodType,
          hospital,
      
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

      toast.success("Your blood request is submitted successfully", {
        className: "toast success",
      });
  
    } catch (error) {
      console.error(error);
      toast.error("There is something wrong. Try again", {
        className: "toast error",
      });
    }
  };
  
   useEffect(() => {
  
     // Simulate loading for 3 seconds
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
            ></input>
          </div>
          <div>
            <input
              name='lastName'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>
          </div>
          <div>
            <input
              placeholder='Phone Number'
              // value={value}
              // onChange={setValue}
              defaultCountry='LB'
            />
          </div>
          <div>
            <input
              name='text'
              placeholder='Date of birth'
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            ></input>
          </div>
          <div>
            <input
              name='message'
              placeholder='Blood type'
              onChange={(e) => setBloodType(e.target.value)}
              value={bloodType}
            ></input>
          </div>
          <div>
            <input
              name='message'
              placeholder='Hospital'
              onChange={(e) => setHospital(e.target.value)}
              value={hospital}
            ></input>
          </div>
          <div>
            <button className='contact-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donate
