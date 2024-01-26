import React, { useState } from 'react';
import '../styles/createUser.css';
import { IoRocketOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [userVerification, setuserVerification] = useState(false);

  const handleContinue = () => {
    const isUserCreated = true;

    if (isUserCreated) {
      navigate('/otp');
      setuserVerification(true);
    } else {
      console.error('User creation failed.');
    }
  };

  return (
    <div className="bodyContainer">
      <div className="container">
      <div className="iconText">
        <IoRocketOutline className="rocketIcon" />
        <h1 className="headingText">Create Your Account</h1>
      </div>

      <div className="inputContainer">
        <input type="text" id="name" className="input-field" placeholder="Enter Your Name" />
      </div>

      <div className="inputContainer">
        <input type="email" id="email" className="input-field" placeholder="Enter Email ID" />
      </div>

      <div className='buttonContainer'>
      <button className="createbtn" onClick={handleContinue} disabled={userVerification}>
        Continue
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
      </div>
      </div>
    </div>
  );
};

export default CreateUser;
