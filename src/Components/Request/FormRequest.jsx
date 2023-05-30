import React, { useState } from "react";
import "./FormRequest.css";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const FormRequest = ({setTrigger}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [caseType, setCaseType] = useState("");
  const [caseDetails, setCaseDetails] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [hospital, setHospital] = useState("");
  const [levelOfEmergency, setLeveOfEmergency] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState("");

  const navigate=useNavigate()
const [isLoading,setIsLoading]=useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const token = secureLocalStorage.getItem("token");
      if (!token) {
      navigate('/login')
      }
   setIsLoading(true)
      await axios.post(
        "http://localhost:8000/api/donation/createRequest",
        {
          firstName,
          lastName,
          dateOfBirth,
          caseType,
          caseDetails,
          bloodType,
          dateNeeded,
          hospital,
          levelOfEmergency,
          numberOfUnits,
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
      setCaseType("");
      setCaseDetails("");
      setBloodType("");
      setDateNeeded("");
      setHospital("");
      setLeveOfEmergency("");
      setNumberOfUnits("");
      // setEmergencyNumber("");

    toast.success("Your blood request is submitted successfully", {
      className: "toast success",
    });
      setTrigger(false);
    } catch (error) {
      console.error(error);
      toast.error("There is something wrong. Try again", {
        className: "toast error", 
      });
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <div className='form-container'>
      <h2 className='fill-form-request'>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='request-details-form-input-container'>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Write the patient's first name*</label>
              <input
                type='text'
                placeholder='First Name'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className='label-input-container'>
              <label>Write the patient's last name*</label>
              <input
                type='text'
                placeholder='Last Name'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className='label-input-container'>
              <label>Write the patient's date of birth</label>
              <input
                type='date'
                placeholder='Last Name'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
              />
            </div>
          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Choose the case*</label>
              <select
                className='select-signup'
                onChange={(e) => setCaseType(e.target.value)}
                value={caseType}
                 required={true} 
              >
                <option value='0'>Case Type</option>
                <option value='Accident'>Accident</option>
                <option value='Operation'>Operation</option>
                <option value='Cancer'>Cancer</option>
                <option value='Thalassemia'>Thalassemia</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='label-input-container'>
              <label>Write the case details*</label>
              <textarea
                type='text'
                placeholder='Case Details'
                className='form-request-textarea'
                 required={true} 
                onChange={(e) => setCaseDetails(e.target.value)}
                value={caseDetails}
              ></textarea>
            </div>

          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Choose patient's blood type*</label>
              <select
                className='select-signup'
                onChange={(e) => setBloodType(e.target.value)}
                value={bloodType}
                 required={true} 
              >
                <option value='0'>BLood Type</option>
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

            <div className='label-input-container'>
              <label>Write the date needed*</label>
              <input
                type='date'
                placeholder='Last Name'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setDateNeeded(e.target.value)}
                value={dateNeeded}
              />
            </div>
          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Hospital*</label>
              <input
                type='text'
                placeholder='Hospital'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setHospital(e.target.value)}
                value={hospital}
              />
            </div>
            <div className='label-input-container'>
              <label>Choose the level of emergency*</label>
              <select
                className='select-signup'
                onChange={(e) => setLeveOfEmergency(e.target.value)}
                value={levelOfEmergency}
                placeholder='Level of Emergency'
                 required={true} 
              >
                <option value='0'>level Of Emergency</option>
                <option value='Urgent'>Urgent</option>
                <option value='Medium'>Medium</option>
              </select>
            </div>
            <div className='label-input-container'>
              <label>Write the number of units needed*</label>
              <input
                type='number'
                placeholder='Number of blood Units'
                className='form-input-signup'
                 required={true} 
                onChange={(e) => setNumberOfUnits(e.target.value)}
                value={numberOfUnits}
              />
            </div>
          </div>
        </div>

        <button className='submit-request-btn'>
          {isLoading ? "Submitting..." : "Request"}
        </button>
      </form>
    </div>
  );
};

export default FormRequest;
