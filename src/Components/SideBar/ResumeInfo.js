import React from 'react';
import '../../Styles/ResumeInfo.css'; // Updated CSS import path

const ResumeInfo = ({ educationEntries, experienceEntries }) => {
  return (
    <div className="resume-container">
      <div className="section">
        <div className="section-title-wrapper">
          <h2 className="section-title">Education</h2>
        </div>
        {educationEntries.map((entry, index) => (
          <div className='entry' key={index}>
            <div className='entry-header'>
              <div className='edu-left-column edu-column'>
                <div className='entry-date'>{entry.startDate} - {entry.endDate}</div>
                <div className='entry-location'>{entry.location}</div>
              </div>
              <div className='edu-right-column edu-column'>
                <div className='entry-title'>{entry.school}</div>
                <div className='entry-subtitle'>{entry.degree}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title-wrapper">
          <h2 className="section-title">Professional Experience</h2>
        </div>
        {experienceEntries.map((entry, index) => (
          <div className='entry' key={index}>
            <div className='entry-header'>
              <div className='entry-left-column exp-column'>
                <div className='entry-date'>{entry.startDate} - {entry.endDate}</div>
                <div className='entry-location'>{entry.location}</div>
              </div>
              <div className='exp-right-column exp-column'>
                <div className='entry-title'>{entry.companyName}</div>
                <div className='entry-subtitle'>{entry.positionTitle}</div>
                <div className='entry-details'>{entry.description}</div>
              </div>
            </div>
          </div>
        ))}        
      </div>
    </div>
  );
};

export default ResumeInfo;
