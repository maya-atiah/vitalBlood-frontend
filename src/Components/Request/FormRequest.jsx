import React, { useState } from "react";
import './FormRequest.css'

const FormRequest = () => {

    const [purpose, setPurpose] = useState('bloodRequest')
      const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [caseType, setCaseType] = useState('')
    const [caseDetails, setCaseDetails] = useState('')
    const [bloodType, setBloodType] = useState('');
    const [dateNeeded, setDateNeeded] = useState('');
    const [hospital, setHospital] = useState('');
    const [levelOfEmergency, setLeveOfEmergency] = useState('');
  const [numberOfUnits, setNumberOfUnits] = useState('');
  const [EmergencyNumber, setEmergencyNumber] = useState('');
  
  return (
    <div className='form-container'>
      <h2 className='fill-form-request'>Fill the Form</h2>
      <form>
        {/* <div>
          <input
            type='text'
            placeholder='purpose'
            className='form-input-signup'
            required
            value={purpose}
          />
        </div> */}
        <div className='request-details-form-input-container'>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Write the patient's first name*</label>
              <input
                type='text'
                placeholder='First Name'
                className='form-input-signup'
                required
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
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className='label-input-container'>
              <label>Write the patient's date of birth</label>
              <input
                type='date'
                placeholder='Date of Birth'
                className='form-input-signup'
                required
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
              />
            </div>
          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Choose the case</label>
              <select
                className='select-signup'
                onChange={(e) => setCaseType(e.target.value)}
                value={caseType}
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
                required
                onChange={(e) => setCaseDetails(e.target.value)}
                value={caseDetails}
              ></textarea>
            </div>
            <div className='label-input-container'>
              <label>Write the emergency number*</label>
              <input
                type='number'
                placeholder='Emergency Number'
                className='form-input-signup'
                required
                onChange={(e) => setEmergencyNumber(e.target.value)}
                value={EmergencyNumber}
              />{" "}
            </div>
          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Choose patient's blood type</label>
              <select
                className='select-signup'
                onChange={(e) => setBloodType(e.target.value)}
                value={bloodType}
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
                required
                onChange={(e) => setDateNeeded(e.target.value)}
                value={dateNeeded}
              />{" "}
            </div>
          </div>
          <div className='request-details-form-input'>
            <div className='label-input-container'>
              <label>Write the date needed*</label>
              <input
                type='text'
                placeholder='Hospital'
                className='form-input-signup'
                required
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
              >
                <option value='A+'>Urgent</option>
                <option value='A-'>Medium</option>
              </select>
            </div>
            <div className='label-input-container'>
              <label>Write the number of units needed*</label>
              <input
                type='text'
                placeholder='Number of blood Units'
                className='form-input-signup'
                required
                onChange={(e) => setNumberOfUnits(e.target.value)}
                value={numberOfUnits}
              />
            </div>
          </div>
        </div>

        <button className='submit-request-btn'>Submit</button>
      </form>
    </div>
  );
};

export default FormRequest;
