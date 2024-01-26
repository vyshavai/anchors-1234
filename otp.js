import React, { useState } from 'react';
import '../styles/otp.css';
import { IoRocketOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
  const navigate = useNavigate();
  const [sucessVerification, setSucessVerification] = useState(false);

  const handleContinue = () => {
    const isUserSucess = true;

    if (isUserSucess) {
      navigate('/sucess');
      setSucessVerification(true);
    } else {
      console.error('User failed.');
    }
  };

  return (
    <div className="bodyContainer">
      <div className="minContainer">
      <div className="iconText">
      <IoRocketOutline className="rocketIcon" />
      <h1 className="headingText">Create Your Account</h1>

      <div className="paraContainer1">
      <p>Please verify your email ID to continue.</p>
      </div>
      <div className="paraContainer2">
      we have sent an OTP to this emailID
      </div>

      <div className="inputContainer">
        <input type="text" id="email" className="input" placeholder="Enter OTP" />
      </div>

      <div className='buttonContainer'>
      <button className="createbtn" onClick={handleContinue} disabled={sucessVerification}>
        Continue
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default OTP;
