import React from 'react';
import '../../Styles/ResumeInfo.css'; // Updated CSS import path

const ResumeInfo = ({ educationEntries }) => {
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
        {/* Add more entries here as needed */}
      </div>

      <div className="section">
        <div className="section-title-wrapper">
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="entry">
          <div className="entry-header">
            <div className='exp-left-column exp-column'>
                <div className="entry-date">08/2020 – present</div>
                <div className='entry-location'>New York City, US</div>
            </div>
            <div className='exp-right-column exp-column'>
                <div className="entry-title">Umbrella Inc.</div>
                <div className="entry-subtitle">UX & UI Designer</div>
                <div className="entry-details">
                Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications sector to mobile games for iOS and Android.
                </div>
            </div>
            
          </div>
        </div>

        
        {/* Add more entries here as needed */}
      </div>
    </div>
  );
};

export default ResumeInfo;
