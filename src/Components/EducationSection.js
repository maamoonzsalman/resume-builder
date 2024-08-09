import React, { useState } from 'react';
import './EducationSection.css';

function EducationSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleAddEducationClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div className="education-container">
      <div className="education-header" onClick={toggleSection}>
        <div className="education-title">
          <span role="img" aria-label="graduation-cap">🎓</span> {/* Replace with an icon if needed */}
          <span>Education</span>
        </div>
        <div className="toggle-icon">
          {isOpen ? '▲' : '▼'}
        </div>
      </div>
      {isOpen && (
        <div className="education-content">
          {showForm ? (
            <form className="education-form">
              <div className="edu-form-group">
                <label htmlFor="school">School</label>
                <input type="text" id="school" placeholder="Enter school / university" />
              </div>
              <div className="edu-form-group">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" placeholder="Enter Degree / Field Of Study" />
              </div>
              <div className="edu-form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" placeholder="Enter Start Date" />
              </div>
              <div className="edu-form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" placeholder="Enter End Date" />
              </div>
              <div className="edu-form-group">
                <label htmlFor="location">Location <span className="optional">optional</span></label>
                <input type="text" id="location" placeholder="Enter Location" />
              </div>
              <div className="form-buttons">
                <button type="button" className="delete-button">Delete</button>
                <div>
                  <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                  <button type="submit" className="save-button">Save</button>
                </div>
              </div>
            </form>
          ) : (
            <div className='edu-btn-container'>
                <button className="add-education-button" onClick={handleAddEducationClick}>+ Education</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EducationSection;
