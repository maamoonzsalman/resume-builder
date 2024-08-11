import React from 'react';
import '../../Styles/PersonalInfo.css'

const PersonalInfo = () => {
    return (
      <div className="header-container">
        <h1 className="name">Maamoon Salman</h1>
        <div className="contact-container">
          <span className="contact-item">📧 maamoonsalman@gmail.com</span>
          <span className="contact-item">📞 5108254409</span>
          <span className="contact-item">📍 Fremont, California</span>
        </div>
      </div>
    );
  };


export default PersonalInfo;