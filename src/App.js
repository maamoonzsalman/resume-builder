import React, { useState } from 'react';
import SideBarNav from './Components/SideBar/SideBarNav';
import FormContainer from './Components/SideBar/FormContainer';
import PersonalInfo from './Components/SideBar/PersonalInfo';
import ResumeInfo from './Components/SideBar/ResumeInfo';
import './style.css';

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const [educationEntries, setEducationEntries] = useState([]);

  return (
    <div className='app'>
      <div className='side-container'>
        <SideBarNav/>
        <FormContainer
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          educationEntries={educationEntries}
          setEducationEntries={setEducationEntries}
        />
      </div>
      <div className='resume-side'>
        <PersonalInfo personalDetails={personalDetails}/>
        <ResumeInfo educationEntries={educationEntries}/>
      </div>
    </div>
  );
};

export default App;

