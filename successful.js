// Sucess.js
import React, { useState } from 'react';
import '../styles/sucess.css';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { TiTickOutline } from "react-icons/ti";
import { Outlet, useNavigate } from 'react-router-dom';

const Sucess = () => {
  const navigate = useNavigate();
  const [otpVerification, setOtpVerification] = useState(false);

  const handleContinue = () => {
    const isUserCreated = true;

    if (isUserCreated) {
      navigate('/post'); 
      setOtpVerification(true);
    } else {
      console.error('User creation failed.');
    }
  };

  return (
    <div className="bodyContainer">
      <div className="container">
      <div className="iconText">
      <TiTickOutline className="tickIcon" />
      <div className="headingText1">
      <h3>Account Created </h3>
      </div>
      <div className="headingText2">
        <h3>Successfully</h3>
      </div>
      <div className='buttonContainer'>
      <button className="createbtn" onClick={handleContinue} disabled={otpVerification}>
        Create Your First Post
        <IoArrowForwardOutline className="arrow-icon" />
      </button>
      </div>
      <Outlet />
    </div>
      </div>
    </div>
  );
};

export default Sucess;
