import React, { useState } from 'react';
import '../../Styles/EducationSection.css';

function EducationSection({ educationEntries, setEducationEntries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: ''
  });
  
  const [editingIndex, setEditingIndex] = useState(null)

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleAddEducationClick = () => {
    setShowForm(true);
    setEditingIndex(null);
    setFormData({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    });
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const updatedEntries = [...educationEntries];
      updatedEntries[editingIndex] = formData;
      setEducationEntries(updatedEntries);
    } else {
      setEducationEntries([...educationEntries, formData]);
    }
    setShowForm(false);
  };

  const handleDeleteClick = (index) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setFormData(educationEntries[index]);
    setShowForm(true);
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
                <input type="text" id="school" placeholder="Enter school / university"  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })} />
              </div>
              <div className="edu-form-group">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" placeholder="Enter Degree / Field Of Study" value={formData.degree} 
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })} />
              </div>
              <div className="edu-form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" placeholder="Enter Start Date" value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} />
              </div>
              <div className="edu-form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" placeholder="Enter End Date" value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
              </div>
              <div className="edu-form-group">
                <label htmlFor="location">Location <span className="optional">optional</span></label>
                <input type="text" id="location" placeholder="Enter Location" value={formData.location} 
                onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </div>
              <div className="form-buttons">
                <button type="button" className="delete-button" onClick={() => {handleDeleteClick(editingIndex); handleCancelClick();}}>Delete</button>
                <div>
                  <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                  <button type="submit" className="save-button" onClick={handleSaveClick}>Save</button>
                </div>
              </div>
            </form>
          ) : (
            <>
            {educationEntries.map((entry, index) => (
                <div
                  key={index}
                  className='school-name'
                  onClick={() => handleEditClick(index)}
                >
                  {entry.school}
                </div>
              ))}

            <div className='edu-btn-container'>
                <button className="add-education-button" onClick={handleAddEducationClick}>+ Education</button>
            </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default EducationSection;
