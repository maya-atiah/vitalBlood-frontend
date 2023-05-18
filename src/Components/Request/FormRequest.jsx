import React, { useState } from "react";
import './FormRequest.css'

const FormRequest = () => {

    const [purpose, setPurpose] = useState('')
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
  return (
    <div>
      <form>
        <div>
          <input
            type='text'
            placeholder='purpose'
            className='form-input-signup'
            required
            onChange={(e) => setPurpose(e.target.value)}
            value={purpose}
          />
        </div>
        <div className='request-details-form-input-container'>
          <div className='request-details-form-input'>
            <input
              type='text'
              placeholder='First Name'
              className='form-input-signup'
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type='text'
              placeholder='Last Name'
              className='form-input-signup'
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type='date'
              placeholder='Date of Birth'
              className='form-input-signup'
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className='request-details-form-input'>
            <input
              type='text'
              placeholder='Case Type Name'
              className='form-input-signup'
              required
              onChange={(e) => setCaseType(e.target.value)}
              value={caseType}
            />
            <textarea
              type='text'
              placeholder='Case Details'
              className='form-input-signup'
              required
              onChange={(e) => setCaseDetails(e.target.value)}
              value={caseDetails}
            />
          </div>
          <div className='request-details-form-input'>
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
            <input
              type='date'
              placeholder='Last Name'
              className='form-input-signup'
              required
              onChange={(e) => setDateNeeded(e.target.value)}
              value={dateNeeded}
            />{" "}
          </div>
          <div className='request-details-form-input'>
            <input
              type='text'
              placeholder='Hospital'
              className='form-input-signup'
              required
              onChange={(e) => setHospital(e.target.value)}
              value={hospital}
            />
            <select
              className='select-signup'
              onChange={(e) => setLeveOfEmergency(e.target.value)}
              value={levelOfEmergency}
            >
              <option value='0'>BLood Type</option>
              <option value='A+'>Urgent</option>
              <option value='A-'>Medium</option>
            
            </select>
            <input
              type='text'
              placeholder='Number of Units'
              className='form-input-signup'
              required
              onChange={(e) => setNumberOfUnits(e.target.value)}
              value={numberOfUnits}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRequest;
