import React, { useState } from 'react';
import SideBarNav from './Components/SideBar/SideBarNav';
import FormContainer from './Components/SideBar/FormContainer';
import PersonalInfo from './Components/SideBar/PersonalInfo';
import ResumeInfo from './Components/SideBar/ResumeInfo';
import './style.css';

const App = () => {
  return (
    <div className='app'>
      <div className='side-container'>
        <SideBarNav/>
        <FormContainer/>
      </div>
      <div className='resume-side'>
        <PersonalInfo/>
        <ResumeInfo/>
      </div>
    </div>
  );
};

export default App;

