import axios from "axios";
import React, { useRef, useState } from "react";
import '../Login/Signup.css'
import secureLocalStorage from "react-secure-storage";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [id_Number, setid_Number] = useState("");
  const [blood_type , setblood_type ] = useState("");
  const [nationality , setnationality ] = useState("");
  const [emergency_number, setemergency_number] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [type, setType] = useState('');
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitted, setISSubmitted] = useState(false);


    const errRef = useRef();
  const emailRef = useRef();
  
  const fetchRegister = async () => {
    try {
      await axios
        .post("http://localhost:5000/api/user/register", {
          firstName,
          lastName,
          email,
          password,
          location,
          phoneNumber,
          maritalStatus,
          gender,
          id_Number,
          blood_type,
          nationality,
          emergency_number,
          type,
        })
        .then((res) => {
          secureLocalStorage.setItem("token", res.data.token);
          //  secureLocalStorage.setItem("role", res.data.role);
          secureLocalStorage.setItem("loggedIn", true);
          setErrMsg("you are loggedin ");
          setTimeout(() => setErrMsg(""), 3000);
           setErrMsg("Successfully registered! You can login now");
           setISSubmitted(true);
           setEmail("");
           setPassword("");
           setFirstName("");
           setLastName("");
           setLocation("");
           setMaritalStatus("");
           setPhone("");
           setemergency_number("");
           setid_Number("");
           setType("");
           setnationality("");
           setGender("");
           setTimeout(() => setErrMsg(""), 3000);
          window.location.reload();
        });
     
    } catch (error) {
      setErrMsg(error.response.data.message);
      setTimeout(() => setErrMsg(""), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchRegister();
  };


  return (
    <form className='form-signup' onSubmit={handleSubmit}>
      <div>
        {" "}
        <span className='signup'>SignUp</span>
      </div>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live='assertive'
      >
        {errMsg}
      </p>
      <div className='signup-form-container'>
        <div className='signup-details'>
          {" "}
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
        </div>
        <div className='signup-details'>
          {" "}
          <input
            type='email'
            placeholder='Email address'
            className='form-input-signup'
            required
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <input
            type='password'
            placeholder='Password'
            className='form-input-signup'
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
        </div>
        <div className='signup-details'>
          {" "}
          <input
            type='number'
            placeholder='Phone Number'
            className='form-input-signup'
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phoneNumber}
          />
          <input
            type='text'
            placeholder='Location'
            className='form-input-signup'
            required
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />{" "}
        </div>
        <div className='signup-details'>
          {" "}
          <input
            type='text'
            placeholder='Marital Status'
            className='form-input-signup'
            required
            onChange={(e) => setMaritalStatus(e.target.value)}
            value={maritalStatus}
          />{" "}
          <input
            type='text'
            placeholder='Gender'
            className='form-input-signup'
            required
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div className='signup-details'>
          {" "}
          <input
            type='number'
            placeholder='Id-Number'
            className='form-input-signup'
            required
            onChange={(e) => setid_Number(e.target.value)}
            value={id_Number}
          />
          <select
            className='select-signup'
            onChange={(e) => setblood_type (e.target.value)}
            value={blood_type }
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
        <div className='signup-details'>
          {" "}
          <input
            type='text'
            placeholder='nationality '
            className='form-input-signup'
            required
            onChange={(e) => setnationality (e.target.value)}
            value={nationality }
          />
          <input
            type='number'
            placeholder='Emergency Number'
            className='form-input-signup'
            required
            onChange={(e) => setemergency_number(e.target.value)}
            value={emergency_number}
          />
        </div>
        <input
          type='text'
          placeholder='Emergency Number'
          className='form-input-signup'
          required
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </div>
      <button className='form--submit'>Sign up</button>
    </form>
  );
};

export default Signup;
