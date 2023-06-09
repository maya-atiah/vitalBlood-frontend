import React, { useEffect, useRef, useState } from "react";
import ContactImage from "../../assets/images/hands.svg";
import "../Contact/Contact.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import Loader from "../../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const form = useRef();
  const [isLoading, setIsloading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    if (firstName && lastName) {
      const templateParams = {
        from_name: firstName + " " + lastName,
        message: e.target.elements.message.value,
        phone_number: value,
        email: e.target.elements.email.value,
      };
      setIsloading(true);
      emailjs
        .sendForm(
          "service_3y4blym",
          "template_2667if4",
          form.current,
          "d_65TWquepGbk75tH"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Reset input fields
            setValue(undefined);
            form.current.reset();
            toast.success("Your message is submitted successfully", {
              className: "toast success",
            });
            setIsloading(false);
          },
          (error) => {
            console.log(error.text);
            toast.error("There is something wrong. Try again", {
              className: "toast error",
            });
          }
        );
    } else {
      console.log("Please fill in the first name and last name fields.");
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
    <div className='contact-container'>
      <div className='image-contact-container'>
        <img src={ContactImage} alt='Contact' />
      </div>
      <div className='form-contact-container'>
        <h2>
          <span>Fill</span> the form
        </h2>
        <form
          className='form-details-container'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='form-container-div-input'>
            <label>First Name</label>
            <input
              name='firstName'
              placeholder='Enter your First Name'
              autoComplete='off'
            />
          </div>
          <div className='form-container-div-input'>
            <label>Last Name</label>
            <input
              name='lastName'
              placeholder='Enter your Last Name'
              autoComplete='off'
            />
          </div>
          <div className='form-container-div-input-one'>
            <label>Phone Number</label>
            <PhoneInput
              name='phone'
              placeholder='Enter phone number'
              value={value}
              onChange={setValue}
              defaultCountry='LB'
              autoComplete='off'
            />
          </div>

          <div className='form-container-div-input-one-res'>
            <label>Phone Number</label>
            <input
              name='phone'
              placeholder='Enter phone number'
              value={value}
              onChange={setValue}
              defaultCountry='LB'
              autoComplete='off'
            />
          </div>

          <div className='form-container-div-input'>
            <label>Email</label>
            <input
              name='email'
              placeholder='Enter your Email'
              autoComplete='off'
            />
          </div>
          <div className='form-container-div-input'>
            <label>Message</label>
            <textarea
              name='message'
              placeholder='Write your message'
            ></textarea>
          </div>
          <div>
            <button className='contact-btn'>
              {isLoading ? "Submitting..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Contact;
