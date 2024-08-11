import React from 'react';
import '../../Styles/PersonalInfo.css'

const PersonalInfo = ({ personalDetails }) => {
    return (
      <div className="header-container">
        <h1 className="name"> {personalDetails.name}</h1>
        <div className="contact-container">
          <span className="contact-item">📧 {personalDetails.email}</span>
          <span className="contact-item">📞 {personalDetails.phone}</span>
          <span className="contact-item">📍 {personalDetails.location}</span>
        </div>
      </div>
    );
  };


export default PersonalInfo;