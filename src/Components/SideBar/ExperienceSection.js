import React, { useState } from 'react';
import '../../Styles/ExperienceSection.css';

function ExperienceSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleAddExperienceClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div className="experience-container">
      <div className="experience-header" onClick={toggleSection}>
        <div className="experience-title">
          <span role="img" aria-label="briefcase">💼</span> {/* Replace with an icon if needed */}
          <span>Experience</span>
        </div>
        <div className="toggle-icon">
          {isOpen ? '▲' : '▼'}
        </div>
      </div>
      {isOpen && (
        <div className="experience-content">
          {showForm ? (
            <form className="experience-form">
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" placeholder="Enter Company Name" />
              </div>
              <div className="form-group">
                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" placeholder="Enter Position Title" />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" placeholder="Enter Start Date" />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" placeholder="Enter End Date" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location <span className="optional">optional</span></label>
                <input type="text" id="location" placeholder="Enter Location" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description <span className="optional">optional</span></label>
                <textarea id="description" placeholder="Enter Description"></textarea>
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
            <div className='exp-btn-container'>
            <button className="add-experience-button" onClick={handleAddExperienceClick}>+ Experience</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ExperienceSection;
