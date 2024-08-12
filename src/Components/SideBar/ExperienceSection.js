import React, { useState } from 'react';
import '../../Styles/ExperienceSection.css';

function ExperienceSection({ experienceEntries, setExperienceEntries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);


  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleAddExperienceClick = () => {
    setShowForm(true);
    setEditingIndex(null);
    setFormData({
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    });
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const updatedEntries = [...experienceEntries];
      updatedEntries[editingIndex] = formData;
      setExperienceEntries(updatedEntries);
    } else {
      setExperienceEntries([...experienceEntries, formData]);
    }
    setShowForm(false);
  };

  const handleDeleteClick = (index) => {
    const updatedEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(updatedEntries);
    handleCancelClick();  // Close the form after deletion
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setFormData(experienceEntries[index]);
    setShowForm(true);
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
                <input type="text" id="companyName" placeholder="Enter Company Name" value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" placeholder="Enter Position Title" value={formData.positionTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, positionTitle: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" placeholder="Enter Start Date" value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" placeholder="Enter End Date" value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location <span className="optional">optional</span></label>
                <input type="text" id="location" placeholder="Enter Location"  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  } />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description <span className="optional">optional</span></label>
                <textarea id="description" placeholder="Enter Description" value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  } ></textarea>
              </div>
              <div className="form-buttons">
                <button type="button" className="delete-button" onClick={() => {
                    handleDeleteClick(editingIndex);
                    handleCancelClick();
                  }}>Delete</button>
                <div>
                  <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                  <button type="submit" className="save-button" onClick={handleSaveClick}>Save</button>
                </div>
              </div>
            </form>
          ) : (
            <>
              {experienceEntries.map((entry, index) => (
                <div
                  key={index}
                  className='company-name'
                  onClick={() => handleEditClick(index)}
                >
                  {entry.companyName}
                </div>
              ))}
              <div className='exp-btn-container'>
                <button className="add-experience-button" onClick={handleAddExperienceClick}>+ Experience</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ExperienceSection;
